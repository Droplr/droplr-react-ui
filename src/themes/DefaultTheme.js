import { lightenDarkenColor, convertToRgb } from './helpers';

const colors = {
  purple: '#7A50C7',
  purpleShadow: '#542D9B',
  purpleDisabled: '#A28FC6',
  purpleBorder: '#542D9B',
  red: '#F94C4C',
  green: '#50BF17',
  greenLight: '#70C843',
  blue: '#0B68FF',
  white: '#FFF',
  black: '#000',
  bright: '#F8F9FC',
  lightGrey: '#DEE3EB',
  grey: '#A1AAB7',
  greyDark: '#5E646E',
  greyDarker: '#44484F',
  transparentWhite: 'rgba(255, 255, 255, 0.1)',
  transparentBlack: 'rgba(0, 0, 0, 0.1)',
};

const theme = {
  colors: {
    brand: colors.purple,
    brandShadow: colors.purpleShadow,
    brandDisabled: colors.purpleDisabled,
    brandBorder: colors.purpleBorder,
    danger: colors.red,
    success: colors.green,
    link: colors.blue,
    info: colors.blue,
    background: colors.bright,
    uiLight: colors.lightGrey,
    uiDark: colors.greyDarker,
    text: colors.grey,
    textDark: colors.greyDark,
  },
};

const gradients = {
  purple: 'linear-gradient(0deg, #6B3CC1 0%, #7A50C7 100%)',
  purpleHover: 'linear-gradient(0deg, #7A50C7 0%, #6B3CC1 100%)',
  purpleActive: 'linear-gradient(0deg, #5E34AA 0%, #6F49B5 100%)',
  bright: 'linear-gradient(0deg, #F8F9FC 0%, #FFF 100%)',
  brightActive: 'linear-gradient(0deg, #FFF 0%, #F8F9FC 100%)',
};

const shadows = {
  shadowColor: `rgba(${convertToRgb(theme.colors.text)}, 0.3)`,
}

export default {
  convertToRgb,

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
    backgroundColor: theme.colors.background,
  },

  button: {
    primary: {
      backgroundColor: gradients.purple,
      backgroundColorHover: gradients.purpleHover,
      backgroundColorActive: gradients.purpleActive,
      backgroundColorDisabled: theme.colors.brandDisabled,
      shadowColor: theme.colors.brandShadow,
      textColor: colors.white,
      iconColor: colors.white,
      loaderColor: colors.white,
    },
    secondary: {
      backgroundColor: gradients.bright,
      backgroundColorHover: gradients.bright,
      backgroundColorActive: gradients.brightActive,
      backgroundColorDisabled: theme.colors.background,
      borderColor: theme.colors.uiLight,
      borderColorHover: lightenDarkenColor(theme.colors.uiLight, -10),
      textColor: theme.colors.textDark,
      textColorDisabled: theme.colors.uiLight,
      iconColor: theme.colors.textDark,
      loaderColor: theme.colors.textDark,
    },
  },

  dualButton: {
    primary: {
      separatorColor: theme.colors.brand,
      shadowColor: theme.colors.brandShadow,
      borderColor: theme.colors.brandBorder,
    },
    secondary: {
      separatorColor: colors.white,
      borderColor: theme.colors.uiLight,
    },
  },

  loader: {
    backgroundColor: theme.colors.brand,
  },

  dropdown: {
    backgroundColor: colors.white,
    shadowColor: shadows.shadowColor,
    titleColor: theme.colors.textDark,
    borderColor: theme.colors.uiLight,

    item: {
      titleColor: theme.colors.uiDark,
      hoverColor: theme.colors.background,
      activeColor: lightenDarkenColor(theme.colors.background, -2),
      iconColor: theme.colors.textDark,
    },
  },
};
