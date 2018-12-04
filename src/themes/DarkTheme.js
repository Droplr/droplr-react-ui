import { lightenDarkenColor } from './helpers';
import { convertToRgb } from './helpers';

const colors = {
  purple: '#8D61DF',
  purpleDisabled: '#624F86',
  purpleBorder: '#542D9B',
  red: '#F94C4C',
  green: '#50BF17',
  greenLight: '#70C843',
  blue: '#488EFF',
  white: '#FFF',
  black: '#000',
  dark: '#3A3A43',
  darkerDark: '#2D2E33',
  lighterDark: '#464651',
  grey: '#CBCEDE',
  lightGrey: '#E9EAED',
  darkerGrey: '#878891',
  transparentWhite: 'rgba(255, 255, 255, 0.1)',
  transparentBlack: 'rgba(0, 0, 0, 0.1)',
};

const theme = {
  colors: {
    brand: colors.purple,
    brandDisabled: colors.purpleDisabled,
    brandBorder: colors.purpleBorder,
    danger: colors.red,
    success: colors.green,
    link: colors.blue,
    info: colors.blue,
    background: colors.darkerDark,
    uiLight: colors.lighterDark,
    uiDark: colors.dark,
    text: colors.white,
    textLight: colors.grey,
    textDark: colors.darkerGrey,
    light: colors.lightGrey,
  },
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
  window: {
    backgroundColor: theme.colors.background,
  },

  button: {
    primary: {
      backgroundColor: gradients.purple,
      backgroundColorHover: gradients.purpleHover,
      backgroundColorActive: gradients.purpleActive,
      backgroundColorDisabled: theme.colors.brandDisabled,
      textColor: theme.colors.text,
      iconColor: theme.colors.text,
      loaderColor: theme.colors.text,
    },
    secondary: {
      backgroundColor: gradients.dark,
      backgroundColorHover: gradients.darkHover,
      backgroundColorActive: gradients.darkActive,
      backgroundColorDisabled: colors.grey,
      borderColor: theme.colors.uiDark,
      textColor: theme.colors.textLight,
      textColorDisabled: theme.colors.textDark,
      iconColor: theme.colors.textLight,
      iconColorDisabled: theme.colors.textDark,
      loaderColor: theme.colors.textLight,
    },
  },

  dualButton: {
    primary: {
      separatorColor: theme.colors.brand,
      borderColor: theme.colors.brandBorder,
    },
    secondary: {
      separatorColor: lightenDarkenColor(theme.colors.uiLight, 20),
      borderColor: lightenDarkenColor(theme.colors.uiDark, 5),
    },
  },

  loader: {
    backgroundColor: theme.colors.brand,
  },

  dropdown: {
    backgroundColor: theme.colors.uiDark,
    shadowColor: shadows.shadowColor,
    titleColor: colors.white,
    borderColor: theme.colors.uiLight,
    borderColorLight: theme.colors.background,

    item: {
      hoverColor: lightenDarkenColor(theme.colors.uiDark, -10),
      activeColor: lightenDarkenColor(theme.colors.uiDark, -15),
      iconColor: colors.white,
    },

    title: {
      color: theme.colors.light,
      hoverColor: colors.white,
      hoverDanger: theme.colors.danger,
      iconFill: theme.colors.textDark,
      hoverIconFill: theme.colors.textDark,
    },

    icon: {
      fillDanger: theme.colors.danger
    },

    description: {
      color: theme.colors.textLight,
    },
  },
};
