# droplr-react-ui

A responsive UI library for React web applications.

## Table of Contents
### Buttons
- [Button](#button)
- [DualButton](#dual-button)

### Dropdown
- [Dropdown](#dropdown)
- [DropdownItem](#dropdown-item)
- [DropdownWithToggler](#dropdown-with-toggler)

### Forms
- [Input](#input)


## Library

### Components

To use components you can import them like this (e.g. Button component):

```
import { Button } from 'droplr-react-ui';
```

Button
------
| Props                                    | Default        | Props notes |
|:-----------------------------------------|:---------------|:------------|
| **children** - String                    | empty string   | The text that will appear as a button's content. |
| **type** - String *required*             |                | The button's visual type. Accepts `primary` and `secondary`. |
| **buttonType** - String                  | `button`       | The HTML button's type attribute. Accepts `button`, `submit` and `reset`. |
| **Icon** - React Component               | `null`         | A React Component that will render a SVG icon. |
| **onClick** - Function                   | empty function | The button's callback. A function that will be executed after a click event. |
| **className** - String                   | empty string   | The button's additional class name. |
| **disabled** - Boolean                   | `false`        | If `true`, the button will appear in the disabled mode and will be unable to be clicked. |
| **loading** - Boolean                    | `false`        | If `true`, the button will appear in the loading mode and will be unable to be clicked. |
| **maxWidth** - Boolean                   | `false`        | If `true`, the button's width will increase to the 100% of it's container's width. |
| **dropdown** - Boolean                   | `false`        | If `true`, the button will appear with the dropdown icon on the right side. |


DualButton
----------
| Props                                    | Default        | Props notes |
|:-----------------------------------------|:---------------|:------------|
| **type** - String                        | `'primary'`    | The button's visual type. Accepts `primary` and `secondary`. |
| **className** - String                   | empty string   | The button's additional class name. |
| **maxWidth** - Boolean                   | `false`        | If `true`, the button's width will increase to the 100% of it's container's width. |
| **left** - Object *required* {           |                | An object containing properties for the left button. |
| **Icon** - React Component               | `null`         | A React Component that will render a SVG icon. |
| **onClick** - Function                   | empty function | The button's callback. A function that will be executed after a click event. |
| **className** - String                   | empty string   | The button's additional class name. |
| **disabled** - Boolean                   | `false`        | If `true`, the button will appear in the disabled mode and will be unable to be clicked. |
| **loading** - Boolean                    | `false`        | If `true`, the button will appear in the loading mode and will be unable to be clicked. |
| **maxWidth** - Boolean                   | `maxWidth`     | If `true`, the button's width will increase to the 100% of it's container's width. |
| **dropdown** - Boolean                   | `false`        | If `true`, the button will appear with the dropdown icon on the right side. |
| **text** - String                        | empty string   | The text that will appear as a button's content. |
| }                                        |                | |
| **right** - Object *required* {          |                | An object containing properties for the right button. |
| **Icon** - React Component               | `null`         | A React Component that will render a SVG icon. |
| **onClick** - Function                   | empty function | The button's callback. A function that will be executed after a click event. |
| **className** - String                   | empty string   | The button's additional class name. |
| **disabled** - Boolean                   | `false`        | If `true`, the button will appear in the disabled mode and will be unable to be clicked. |
| **loading** - Boolean                    | `false`        | If `true`, the button will appear in the loading mode and will be unable to be clicked. |
| **maxWidth** - Boolean                   | `maxWidth`     | If `true`, the button's width will increase to the 100% of it's container's width. |
| **dropdown** - Boolean                   | `false`        | If `true`, the button will appear with the dropdown icon on the right side. |
| **text** - String                        | empty string   | The text that will appear as a button's content. |
| }                                        |                | |


DropdownItem
------------
| Props                                    | Default        | Props notes |
|:-----------------------------------------|:---------------|:------------|
| **title** - String *required*            |                | The text displayed in the dropdown item. |
| **TitleIcon** - React Component          | `null`         | An icon displayed after the title. |
| **description** - Node element           | empty string   | Description displayed under the title. |
| **Icon** - React Component               | `null`         | An icon displayed before the title. |
| **className** - String                   | empty string   | Dropdown item's additional class name. |
| **active** - Boolean                     | `false`        | Indicates that the item is active with a check mark. Works only with `showItemStatus = true`. |
| **onClick** - Function                   | empty function | A function that will be executed after a click event. |
| **href** - String                        | empty string   | Makes the dropdown item a link and uses passed prop as a `href` attribute. |
| **target** - String                      | empty string   | Passes the prop to the element's `target` attribute. |
| **showItemStatus** - Boolean             | `false`        | If `true`, will display the check mark inside the dropdown item that has a prop `active` set to `true`. |
| **disabled** - Boolean                   | `false`        | If `true`, the dropdown item will appear in the disabled mode and will be unable to interact with. |
| **closeDropdown** - Function             | empty function | A function that will close the dropdown. |
| **closeOnItemClick** - Boolean           | `false`        | If `true`, will trigger the function from the `closeDropdown` prop after clicking on the item. |


Dropdown
--------
| Props                                    | Default        | Props notes |
|:-----------------------------------------|:---------------|:------------|
| **isActive** - Boolean *required*        |                | If `true`, it shows up itself. Hidden when `false`. |
| **children** - Node Element              |                | Elements or components that will be displayed as dropdown items. |
| or array of Node Elements                |                | |
| or Function                              |                | |
| or array of Functions                    |                | |
| **header** - String                      | empty string   | The text displayed at the top of the dropdown. |
| **className** - String                   | empty string   | Dropdown's additional class name. |
| **showItemStatus** - Boolean             | `false`        | If `true`, will display the check mark inside the dropdown item that has a prop `active` set to `true`. |
| **close** - Function                     | empty function | A function that will close the dropdown. |
| **closeOnItemClick** - Boolean           | `false`        | If `true`, will trigger the function from the `close` prop after clicking on the item. |
| **onMouseLeave** - Function              | empty function | Function that will be executed when mouse leaves the dropdown component |


DropdownWithToggler
-------------------
| Props                                    | Default        | Props notes |
|:-----------------------------------------|:---------------|:------------|
| **Toggler** - React Component *required* |                | A component that will display as dropdown toggler, e.g. a button. |
| **onClick** - Function                   | empty function | A function that will be executed after a click event is fired on the toggler. |
| **className** - String                   | empty string   | DropdownWithToggler's additional class name. |
| **isActive** - Boolean                   | `false`        | If `true`, the dropdown will be open after the component mounts. |
| **closeOnItemClick** - Boolean           | `false`        | If `true`, the dropdown will close after clicking on a dropdown item. |
| **showItemStatus** - Boolean             | `false`        | If `true`, the dropdown will display the check mark inside the dropdown item that has a prop `active` set to `true`. |
| **closeOnMouseLeave** - Boolean          | `false`        | Dropdown will be closed when mouse leaves it. |
| **header** - String                      | empty string   | The text displayed at the top of the dropdown. |
| **children** - Node Element *required*   |                | Elements or components that will be displayed as dropdown items. |
| or array of Node Elements                |                | |
| or Function                              |                | |
| or array of Functions                    |                | |


Input
-----
| Props                                    | Default        | Props notes |
|:-----------------------------------------|:---------------|:------------|
| **name** - String *required*             |                | Input's name attribute. |
| **className** - String                   | empty string   | Input's additional class name. |
| **type** - String                        | `'text'`       | Input's type attribute. |
| **value** - String                       | empty string   | Input's value attribute. |
| **placeholder** - String                 | empty string   | Input's placeholder attribute. |
| **label** - String                       | empty string   | Input's label text. |
| **sublabel** - String                    | empty string   | Input's sublabel text. |
| **info** - String                        | empty string   | Input's description displayed as a text paragraph under the input. |
| **error** - String                       | empty string   | Input's validation error message. |
| **autoFocus** - Boolean                  | `false`        | Input's autoFocus attribute. |
| **readOnly** - Boolean                   | `false`        | If `true`, the input will appear in the read-only mode, allowing only to read and copy the input's value. |
| **disabled** - Boolean                   | `false`        | If `true`, the input will appear in the disabled mode and will be unable to interact with. |
| **passwordVisibilityToggle** - Boolean   | `false`        | If `true`, adds a button inside the input to toggle the password's visibility. Works only if `type = 'password'`. |
| **passwordVisible** - Boolean            | `false`        | If `true`, the password input's value will render as visible. |
| **onBlur** - Function                    | empty function | A function that will be executed after input's `onBlur` event triggers. |
| **onFocus** - Function                   | empty function | A function that will be executed after input's `onFocus` event triggers. |
| **onKeyPress** - Function                | empty function | A function that will be executed after input's `onKeyPress` event triggers. |
| **onChange** - Function                  | empty function | A function that will be executed after input's `onChange` event triggers. |


### Icons

To use icons you can import them like this (e.g. DownloadIcon):

```
import { DownloadIcon } from 'droplr-react-ui/icons';
```

## Storybook

The storybook contains all of the components in different states and all of the icons.
It helps you to understand how they work and how to use them.

To use our Storybook you can run it with this command:

```
npm run storybook
```
