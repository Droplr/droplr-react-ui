import { lightenDarkenColor, convertToRgb } from './helpers';

const colors = {
  white: '#FFF',
  black: '#000',
  brand: '#8D61DF',
  brandLight: '#624F86',
  brandDark: '#542D9B',
  tuna: '#3A3A43',
  shark: '#2D2E33',
  mako: '#464651',
  blueHaze: '#CBCEDE',
  athensGray: '#E9EAED',
  waterloo: '#878891',
};

const shadows = {
  shadowColor: `rgba(${convertToRgb(colors.black)}, 0.5)`,
}

const gradients = {
  purple: 'linear-gradient(0deg, #7140CC 0%, #8D61DF 100%)',
  purpleHover: 'linear-gradient(0deg, #8D61DF 0%, #7140CC 100%)',
  purpleActive: 'linear-gradient(0deg, #7A50C7 0%, #6B3CC1 100%)',
  dark: 'linear-gradient(0deg, #464651 0%, #60606D 100%)',
  darkHover: 'linear-gradient(0deg, #43434D 0%, #60606D 100%)',
  darkActive: 'linear-gradient(0deg, #3D3D46 0%, #60606D 100%)',
};

export default {
  input: {
    // background
    backgroundColor: colors.shark,

    // text
    textColor: colors.athensGray,
    textColorFocus: colors.white,
    
    // border
    borderColor: colors.shark,
    borderColorHover: colors.mako,
    borderColorFocus: colors.brand,

    // other
    placeholderColor: colors.mako,
    iconColor: colors.waterloo,

    label: {
      textColor: colors.white,
    }
  },

  button: {
    primary: {
      backgroundColor: gradients.purple,
      backgroundColorHover: gradients.purpleHover,
      backgroundColorActive: gradients.purpleActive,
      backgroundColorDisabled: colors.brandLight,
      borderColor: colors.tuna,
      textColor: colors.white,
      iconColor: colors.white,
      loaderColor: colors.white,
    },
    secondary: {
      backgroundColor: gradients.dark,
      backgroundColorHover: gradients.darkHover,
      backgroundColorActive: gradients.darkActive,
      backgroundColorDisabled: colors.mako,
      borderColor: colors.tuna,
      borderColorDisabled: colors.shark,
      textColor: colors.blueHaze,
      textColorDisabled: `rgba(${convertToRgb(colors.waterloo)}, 0.5)`,
      iconColor: colors.blueHaze,
      iconColorDisabled: `rgba(${convertToRgb(colors.waterloo)}, 0.5)`,
      loaderColor: colors.blueHaze,
    },
  },

  dualButton: {
    primary: {
      separatorColor: colors.brand,
      borderColor: colors.brandDark,
    },
    secondary: {
      separatorColor: lightenDarkenColor(colors.mako, 20),
      borderColor: lightenDarkenColor(colors.tuna, 5),
    },
  },

  loader: {
    backgroundColor: colors.brand,
  },

  dropdown: {
    backgroundColor: colors.tuna,
    shadowColor: shadows.shadowColor,
    borderColor: colors.shark,
    headerTextColor: colors.white,
    headerBorderColor: colors.mako,
  },

  dropdownItem: {
    textColor: colors.athensGray,
    textColorHover: colors.white,
    backgroundColor: colors.tuna,
    backgroundColorHover: lightenDarkenColor(colors.tuna, -10),
    backgroundColorActive: lightenDarkenColor(colors.tuna, -15),
    iconColor: colors.white,
    titleIconColor: colors.waterloo,
    titleIconColorHover: colors.waterloo,
    disabledColor: colors.waterloo,

    description: {
      textColor: colors.blueHaze,
    },
  },
};
