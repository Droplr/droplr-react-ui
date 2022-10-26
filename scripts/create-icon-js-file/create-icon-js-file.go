package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"strings"
	"time"
	"unicode"
)

// Use the enums to reconfigure script
const (
	// Configuration
	IMAGE_DIR     = "./svg/"   // Folder to look into
	EXTENSION     = ".svg"     // Extension to match | IMPORTANT : Must be in text format, ie. .svg
	OUT_FILE_NAME = "icons.js" // Out-file name
	COMMENT_LINE  = "// "
)

var time_counter time.Time

func contains(s []string, e string) bool {
	for _, a := range s {
		if a == e {
			return true
		}
	}
	return false
}

func main() {
	time_counter = time.Now()
	fmt.Println("Ignoring arguments...\nLooking for .svg files in ./svg/")

	// Check if the directory from the configs exists
	if _, err := os.Stat(IMAGE_DIR); os.IsNotExist(err) {
		fmt.Println("----\nERROR -> ./src/ path does not exist. Please create it and place the .svg files there, ex. ./svg/alarm-ico.svg\n----")
		goodbye()
		return
	}

	// Read, list, count and separate valid from invalid files
	// Valid files contain the EXTENSION config var
	// Possible issue with extensions in filenames, ie. .svg.temp would probably want to be ignored | Update to rune check if needed
	files, err := os.ReadDir(IMAGE_DIR)
	if err != nil {
		fmt.Println("----\nERROR -> Could not read ./svg/ directory due to error:\n", err.Error(), "\n----")
		goodbye()
		return
	}

	file_counter := 0
	matching_extension_counter := 0
	var matching_files []os.DirEntry

	for _, file := range files {
		file_counter++
		if strings.Contains(file.Name(), EXTENSION) {
			matching_extension_counter++
			matching_files = append(matching_files, file)
		}
	}

	fmt.Println("Found [", file_counter, "] total files of which [", matching_extension_counter, "] match the provided extension (", EXTENSION, ")")
	fmt.Println("Beginning file parse and read...\n----")

	// Contains filenames of files with errors
	var files_with_errors []string
	// Contains variable names for JavaScript exports
	var export_names []string
	// Output file template and autogenarated comment
	out_file := ""
	out_file += COMMENT_LINE + "File is autogenerated - for maintained updates, contact the developers\n"
	// Stats
	success_counter := 0
	fail_counter := 0

	for _, file := range matching_files {
		// Store file metadata to fetch file name (Used to generate JS variable name)
		file_info, err := file.Info()
		if err != nil {
			files_with_errors = append(files_with_errors, file.Name())
			continue
		}
		fmt.Println("Parsing", file.Name(), " of size ", file_info.Size(), "bytes...")
		// Open file for reading
		f, err := os.Open(IMAGE_DIR + file.Name())
		if err != nil {
			fail_counter++
			fmt.Println("----\nERROR -> Could not open file, ", file_info.Name(), " due to error:\n", err.Error(), "\n----")
			continue
		}
		file_data, err := ioutil.ReadAll(f)
		if err != nil {
			f.Close()
			fail_counter++
			fmt.Println("----\nERROR -> Could not read file, ", file_info.Name(), " due to error:\n", err.Error(), "\n----")
			continue
		}
		// Stringify file contents
		file_data_string := string(file_data)
		// Contains 'd=' attributes of <path></path> elements
		var paths []string

		// Find d= and iterate from opening \"  to closing  \"
		for i, r := range file_data_string {
			if r == 'd' {
				if file_data_string[i+1] == '=' && file_data_string[i-1] == ' ' {
					k := i + 3
					path := ""
					for {
						if file_data_string[k] == '"' {
							paths = append(paths, path)
							break
						}
						path += string(file_data_string[k])
						k++
					}
				}
			}
		}
		// No paths found, check for polygon or polyline containing points attribute
		if len(paths) == 0 {
			for i, r := range file_data_string {
				if r == 's' && file_data_string[i-1] == 't' {
					if file_data_string[i+1] == '=' {
						k := i + 3
						path := "M"
						for {
							if file_data_string[k] == '"' {
								path += "z"
								paths = append(paths, path)
								break
							}
							path += string(file_data_string[k])
							k++
						}
					}
				}
			}
		}
		fmt.Println("Found", len(paths), " paths for ", file_info.Name(), "\n----")
		// Export variable naming
		// Rules:
		// Starts with an uppercase
		// -, ,_ mark the next letter to be uppercased, ie. arrow_down -> ArrowDown
		export_name := ""
		marked := false
		for i, r := range file_info.Name() {
			if r == '.' {
				break
			}
			if i == 0 {
				export_name += string(unicode.ToUpper(r))
				continue
			}
			if r == '-' || r == ' ' || r == '_' {
				marked = true
				continue
			}
			if marked {
				export_name += string(unicode.ToUpper(r))
				marked = false
				continue
			}
			export_name += string(r)
		}
		// Generate JS variables in out file template
		if contains(export_names, export_name) {
			fmt.Println("\nFound duplicate entry for :", export_name)
			continue
		}
		export_names = append(export_names, export_name)
		out_file += "const " + export_name + " = [\n"
		for i, p := range paths {
			out_file += "\t\"" + p
			if i < len(paths)-1 {
				out_file += "\",\n"
			} else {
				out_file += "\""
			}
		}
		out_file += "\n];\n"
		success_counter++
	}

	if len(out_file) == 0 {
		fmt.Println("----\nERROR -> Could not prepare output file: ", OUT_FILE_NAME)
		goodbye()
		return
	}

	// Add named exports to JS file
	out_file += "\nexport {\n"
	for i, e := range export_names {
		out_file += "\t" + e
		if i < len(export_names)-1 {
			out_file += ",\n"
		} else {
			out_file += "\n};"
		}
	}

	// Create delimitered TScript string
	out_file += "\n// The following is used for TS Strict Types\n//"
	for i, e := range export_names {
		out_file += " '" + e
		if i < len(export_names)-1 {
			out_file += "' |"
		} else {
			out_file += "'"
		}
	}

	// Create file with configured filename
	f, err := os.Create(OUT_FILE_NAME)
	if err != nil {
		fmt.Println("----\nERROR -> Could not create output file due to error:\n", err.Error(), "\n----")
		goodbye()
		return
	}
	defer f.Close()

	_, err = f.WriteString(out_file)
	if err != nil {
		fmt.Println("----\nERROR -> Could not write to output file due to error:\n", err.Error(), "\n----")
		goodbye()
		return
	}

	output_file_info, _ := f.Stat()
	fmt.Println("\nFinished parsing.\nSuccessful parses: ", success_counter, "\nFailed parses: ", fail_counter)
	fmt.Println("Output file is: ", OUT_FILE_NAME, ", size:", output_file_info.Size(), "bytes")

	goodbye()
}

func goodbye() {
	fmt.Println("Execution time is: ", time.Since(time_counter))
	fmt.Println("Goodbye")
}
