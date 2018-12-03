const colors = {
  purple: '#8D61DF',
  purpleDisabled: '#624F86',
  purpleBorder: '#542D9B',
  black: '#000',
  white: '#FFF',
  veryLightGrey: '#DCDDE6',
  lightGrey: '#60606D',
  grey: '#464651',
  darkGrey: '#2D2E33',
  transparentWhite: 'rgba(255, 255, 255, 0.1)',
  transparentBlack: 'rgba(0, 0, 0, 0.1)',
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
    backgroundColor: colors.darkGrey,
  },

  input: {
    color: colors.grey,
    colorFocus: colors.lightGrey,
    backgroundColor: colors.transparentBlack,
    borderColorFocus: colors.lightGrey,
    borderColor: colors.black,

    label: {
      color: colors.white,
    }
  },

  button: {
    primary: {
      backgroundColor: gradients.purple,
      backgroundColorHover: gradients.purpleHover,
      backgroundColorActive: gradients.purpleActive,
      backgroundColorDisabled: colors.purpleDisabled,
      textColor: colors.white,
      iconColor: colors.white,
      loaderColor: colors.white,
    },
    secondary: {
      backgroundColor: gradients.dark,
      backgroundColorHover: gradients.darkHover,
      backgroundColorActive: gradients.darkActive,
      backgroundColorDisabled: colors.grey,
      borderColor: colors.darkGrey,
      textColor: colors.veryLightGrey,
      textColorDisabled: colors.lightGrey,
      iconColor: colors.veryLightGrey,
      iconColorDisabled: colors.lightGrey,
      loaderColor: colors.veryLightGrey,
    },
  },

  dualButton: {
    primary: {
      separatorColor: colors.purple,
      borderColor: colors.purpleBorder,
    },
    secondary: {
      separatorColor: colors.lightGrey,
      borderColor: colors.darkGrey,
    },
  },

  loader: {
    backgroundColor: colors.purple,
  },
};
