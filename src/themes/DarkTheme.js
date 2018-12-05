import { lightenDarkenColor } from './helpers';
import { convertToRgb } from './helpers';

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
    backgroundColor: colors.shark,
  },

  button: {
    primary: {
      backgroundColor: gradients.purple,
      backgroundColorHover: gradients.purpleHover,
      backgroundColorActive: gradients.purpleActive,
      backgroundColorDisabled: colors.brandLight,
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
};
