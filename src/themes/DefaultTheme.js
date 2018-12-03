const colors = {
  purple: '#7A50C7',
  purpleShadow: '#542D9B',
  purpleDisabled: '#A28FC6',
  purpleBorder: '#542D9B',
  black: '#000',
  white: '#FFF',
  bright: '#F8F9FC',
  lightGrey: '#DEE3EB',
  grey: '#CCD3DE',
  darkGrey: '#3E4247',
  transparentWhite: 'rgba(255, 255, 255, 0.1)',
  transparentBlack: 'rgba(0, 0, 0, 0.1)',
};

const gradients = {
  purple: 'linear-gradient(0deg, #6B3CC1 0%, #7A50C7 100%)',
  purpleHover: 'linear-gradient(0deg, #7A50C7 0%, #6B3CC1 100%)',
  purpleActive: 'linear-gradient(0deg, #5E34AA 0%, #6F49B5 100%)',
  bright: 'linear-gradient(0deg, #F8F9FC 0%, #FFF 100%)',
  brightActive: 'linear-gradient(0deg, #FFF 0%, #F8F9FC 100%)',
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
      bold: '700',
    },
  },

  input: {
    backgroundColor: colors.white,
    color: colors.black,
    borderColorFocus: colors.purple,
  },

  window: {
    backgroundColor: colors.bright,
  },

  button: {
    primary: {
      backgroundColor: gradients.purple,
      backgroundColorHover: gradients.purpleHover,
      backgroundColorActive: gradients.purpleActive,
      backgroundColorDisabled: colors.purpleDisabled,
      shadowColor: colors.purpleShadow,
      textColor: colors.white,
      iconColor: colors.white,
      loaderColor: colors.white,
    },
    secondary: {
      backgroundColor: gradients.bright,
      backgroundColorHover: gradients.bright,
      backgroundColorActive: gradients.brightActive,
      backgroundColorDisabled: colors.bright,
      borderColor: colors.lightGrey,
      borderColorHover: colors.grey,
      textColor: colors.darkGrey,
      textColorDisabled: colors.lightGrey,
      iconColor: colors.darkGrey,
      loaderColor: colors.darkGrey,
    },
  },

  dualButton: {
    primary: {
      separatorColor: colors.purple,
      shadowColor: colors.purpleShadow,
      borderColor: colors.purpleBorder,
    },
    secondary: {
      separatorColor: colors.white,
      borderColor: colors.lightGrey,
    },
  },

  loader: {
    backgroundColor: colors.purple,
  },
};
