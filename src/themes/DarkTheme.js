const colors = {
  purple: '#8D61DF',
  purpleDisabled: '#624F86',
  purpleBorder: '#542D9B',
  white: '#FFF',
  black: '#000',
  dark: '#3A3A43',
  darkerDark: '#2D2E33',
  lighterDark: '#464651',
  darkGrey: '#464651',
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
  },
};

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
      borderColor: theme.colors.background,
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
      separatorColor: theme.colors.textDark,
      borderColor: theme.colors.textDark,
    },
  },

  loader: {
    backgroundColor: theme.colors.brand,
  },
};
