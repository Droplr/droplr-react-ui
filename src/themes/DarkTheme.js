import { lightenDarkenColor, convertToRgb } from './helpers';

const colors = {
  white:          '#FFFFFF',
  athensGray:     '#E9EAED',
  mystic:         '#DEE3EB',
  blueHaze:       '#CBCEDE',
  waterloo:       '#878891',
  mako:           '#464651',
  tuna:           '#3A3A43',
  shark:          '#2D2E33',
  brandLight:     '#624F86',
  brand:          '#8D61DF',
  brandDark:      '#542D9B',
  goldenTainoi:   '#FFC554',
  yellowSea:      '#FFAD0C',
  seaPink:        '#EB8888',
  sunsetOrange:   '#F94C4C',
  sushi:          '#70C843',
  asparagus:      '#6DA450',
  dodgerBlue:     '#5495FF',
  blueRibbon:     '#0B68FF',
  black:          '#000000',
};

const shadows = {
  black: `rgba(${convertToRgb(colors.black)}, 0.5)`,
}

const buttonGradient = (color, invert) =>
  `linear-gradient(${invert ? '0' : '180'}deg, ${color} 0%, ${lightenDarkenColor(color, -10)} 100%)`;

const gradients = {
  purple: 'linear-gradient(0deg, #7140CC 0%, #8D61DF 100%)',
  purpleHover: 'linear-gradient(0deg, #8D61DF 0%, #7140CC 100%)',
  purpleActive: 'linear-gradient(0deg, #7A50C7 0%, #6B3CC1 100%)',
  dark: 'linear-gradient(0deg, #464651 0%, #60606D 100%)',
  darkHover: 'linear-gradient(0deg, #43434D 0%, #60606D 100%)',
  darkActive: 'linear-gradient(0deg, #3D3D46 0%, #60606D 100%)',
  greenSwitchChecked: `${colors.sushi} linear-gradient(180deg, ${colors.sushi} 0%, ${lightenDarkenColor(colors.sushi, -10)} 100%)`,
  green: buttonGradient(colors.sushi),
  greenHover: buttonGradient(colors.sushi, true),
  red: buttonGradient(colors.sunsetOrange),
  redHover: buttonGradient(colors.sunsetOrange, true),
  blue: buttonGradient(colors.blueRibbon),
  blueHover: buttonGradient(colors.blueRibbon, true),
  yellow: buttonGradient(colors.yellowSea),
  yellowHover: buttonGradient(colors.yellowSea, true),
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

  switch: {
    // text
    textColor: colors.white,

    // background
    backgroundColor: colors.shark,
    backgroundColorAfter: colors.athensGray,
    backgroundColorChecked: gradients.greenSwitchChecked,
    backgroundColorAfterDisabled: lightenDarkenColor(colors.athensGray, -80),

    // border
    borderColor: colors.shark,
    borderColorChecked: lightenDarkenColor(colors.sushi, -10),

    // other
    shadowColor: shadows.black,
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
      promo: {
        backgroundColor: gradients.green,
        backgroundColorHover: gradients.greenHover,
        backgroundColorActive: lightenDarkenColor(colors.sushi, -10),
        backgroundColorDisabled: colors.asparagus,
        textColorDisabled: colors.mystic,
      },
      danger: {
        backgroundColor: gradients.red,
        backgroundColorHover: gradients.redHover,
        backgroundColorActive: lightenDarkenColor(colors.sunsetOrange, -10),
        backgroundColorDisabled: colors.seaPink,
        textColorDisabled: colors.white,
      },
      info: {
        backgroundColor: gradients.blue,
        backgroundColorHover: gradients.blueHover,
        backgroundColorActive: lightenDarkenColor(colors.blueRibbon, -10),
        backgroundColorDisabled: colors.dodgerBlue,
        textColorDisabled: colors.white,
      },
      warning: {
        backgroundColor: gradients.yellow,
        backgroundColorHover: gradients.yellowHover,
        backgroundColorActive: lightenDarkenColor(colors.yellowSea, -10),
        backgroundColorDisabled: colors.goldenTainoi,
        textColorDisabled: colors.white,
      },
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
      danger: {
        borderColor: colors.sunsetOrange,
        borderColorHover: lightenDarkenColor(colors.sunsetOrange, -10),
        borderColorActive: lightenDarkenColor(colors.sunsetOrange, -40),
        borderColorDisabled: lightenDarkenColor(colors.seaPink, -115),
        textColor: colors.sunsetOrange,
        textColorHover: lightenDarkenColor(colors.sunsetOrange, -10),
        textColorActive: lightenDarkenColor(colors.sunsetOrange, -40),
        textColorDisabled: lightenDarkenColor(colors.seaPink, -115),
      }
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
    shadowColor: shadows.black,
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
