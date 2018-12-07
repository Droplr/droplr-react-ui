import { lightenDarkenColor, convertToRgb } from './helpers';

const colors = {
  white: '#FFF',
  black: '#000',
  brand: '#7A50C7',
  brandLight: '#A28FC6',
  brandDark: '#542D9B',
  lima: '#50BF17',
  sushi: '#70C843',
  blueRibbon: '#0B68FF',
  whiteLilac: '#F8F9FC',
  mystic: '#DEE3EB',
  grayChateau: '#A1AAB7',
  shuttleGray: '#5E646E',
  mako: '#44484F',
};

const gradients = {
  purple: 'linear-gradient(0deg, #6B3CC1 0%, #7A50C7 100%)',
  purpleHover: 'linear-gradient(0deg, #7A50C7 0%, #6B3CC1 100%)',
  purpleActive: 'linear-gradient(0deg, #5E34AA 0%, #6F49B5 100%)',
  bright: 'linear-gradient(0deg, #F8F9FC 0%, #FFF 100%)',
  brightActive: 'linear-gradient(0deg, #FFF 0%, #F8F9FC 100%)',
};

const shadows = {
  shadowColor: `rgba(${convertToRgb(colors.grayChateau)}, 0.3)`,
}

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
      bold: '700',
    },
  },

  window: {
    backgroundColor: colors.whiteLilac,
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
    shadowColor: shadows.shadowColor,
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
    titleIconColor: colors.grayChateau,
    titleIconColorHover: lightenDarkenColor(colors.grayChateau, -16),
    disabledColor: colors.grayChateau,

    description: {
      textColor: colors.shuttleGray,
    },
  },
};
