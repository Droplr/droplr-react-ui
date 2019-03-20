import { lightenDarkenColor, convertToRgb } from './helpers';

const colors = {
  white: '#FFF',
  black: '#000',
  brand: '#7A50C7',
  brandLight: '#A28FC6',
  brandDark: '#542D9B',
  sunsetOrange: '#F94C4C',
  sushi: '#70C843',
  whiteLilac: '#F8F9FC',
  mystic: '#DEE3EB',
  grayChateau: '#A1AAB7',
  shuttleGray: '#5E646E',
  mako: '#44484F',
  asparagus: '#6DA450',
  seaPink: '#EB8888',
};

const gradients = {
  purple: 'linear-gradient(0deg, #6B3CC1 0%, #7A50C7 100%)',
  purpleHover: 'linear-gradient(0deg, #7A50C7 0%, #6B3CC1 100%)',
  purpleActive: 'linear-gradient(0deg, #5E34AA 0%, #6F49B5 100%)',
  bright: 'linear-gradient(0deg, #F8F9FC 0%, #FFF 100%)',
  brightActive: 'linear-gradient(0deg, #FFF 0%, #F8F9FC 100%)',
  green: `linear-gradient(180deg, ${colors.sushi} 0%, ${lightenDarkenColor(colors.sushi, -10)} 100%)`,
  greenHover: `linear-gradient(180deg, ${lightenDarkenColor(colors.sushi, -10)} 0%, ${colors.sushi} 100%)`,
  red: `linear-gradient(180deg, ${colors.sunsetOrange} 0%, ${lightenDarkenColor(colors.sunsetOrange, -10)} 100%)`,
  redHover: `linear-gradient(180deg, ${lightenDarkenColor(colors.sunsetOrange, -10)} 0%, ${colors.sunsetOrange} 100%);`,
};

const shadows = {
  grayChateau: `rgba(${convertToRgb(colors.grayChateau)}, 0.3)`,
  brand: `rgba(${convertToRgb(colors.brand)}, 0.1)`,
};

export default {
  font: {
    family: {
      primary: '"Source Sans Pro", sans-serif',
    },
    size: {
      small: '12px',
      normal: '14px',
      big: '16px',
    },
    weight: {
      normal: '400',
      bold: '600',
    },
  },

  input: {
    // background
    backgroundColor: colors.white,

    // text
    textColor: colors.shuttleGray,
    textColorFocus: colors.black,

    // border
    borderColor: colors.mystic,
    borderColorHover: colors.grayChateau,
    borderColorFocus: colors.brand,

    // other
    placeholderColor: colors.mystic,
    errorColor: colors.sunsetOrange,
    iconColor: colors.grayChateau,
    shadowColor: shadows.brand,

    label: {
      textColor: colors.shuttleGray,
    }
  },

  button: {
    primary: {
      backgroundColor: gradients.purple,
      backgroundColorHover: gradients.purpleHover,
      backgroundColorActive: gradients.purpleActive,
      backgroundColorDisabled: colors.brandLight,
      shadowColor: lightenDarkenColor(colors.brand, -20),
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
      }
    },
    secondary: {
      backgroundColor: gradients.bright,
      backgroundColorHover: gradients.bright,
      backgroundColorActive: gradients.brightActive,
      backgroundColorDisabled: colors.whiteLilac,
      borderColor: colors.mystic,
      borderColorHover: lightenDarkenColor(colors.mystic, -10),
      textColor: colors.shuttleGray,
      textColorDisabled: colors.mystic,
      iconColor: colors.shuttleGray,
      loaderColor: colors.shuttleGray,
      danger: {
        borderColor: colors.sunsetOrange,
        borderColorHover: lightenDarkenColor(colors.sunsetOrange, -10),
        borderColorActive: lightenDarkenColor(colors.sunsetOrange, -40),
        borderColorDisabled: lightenDarkenColor(colors.sunsetOrange, 125),
        textColor: colors.sunsetOrange,
        textColorHover: lightenDarkenColor(colors.sunsetOrange, -10),
        textColorActive: lightenDarkenColor(colors.sunsetOrange, -40),
        textColorDisabled: lightenDarkenColor(colors.sunsetOrange, 125),
      }
    },
  },

  dualButton: {
    primary: {
      separatorColor: colors.brand,
      shadowColor: lightenDarkenColor(colors.brand, -20),
      borderColor: colors.brandDark,
    },
    secondary: {
      separatorColor: colors.white,
      borderColor: colors.mystic,
    },
  },

  loader: {
    backgroundColor: colors.brand,
  },

  dropdown: {
    backgroundColor: colors.white,
    shadowColor: shadows.grayChateau,
    borderColor: colors.mystic,
    headerTextColor: colors.shuttleGray,
    headerBorderColor: colors.whiteLilac,
    transitionSettings: '150ms linear',
  },

  dropdownItem: {
    textColor: colors.mako,
    textColorHover: colors.black,
    backgroundColor: colors.white,
    backgroundColorHover: colors.whiteLilac,
    backgroundColorActive: lightenDarkenColor(colors.whiteLilac, -2),
    iconColor: colors.shuttleGray,
    iconColorHover: lightenDarkenColor(colors.shuttleGray, -20),
    titleIconColor: colors.grayChateau,
    titleIconColorHover: lightenDarkenColor(colors.grayChateau, -16),
    disabledColor: colors.grayChateau,

    description: {
      textColor: colors.shuttleGray,
    },
  },
};
