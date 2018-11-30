function LightenDarkenColor(color, value) {
  let usePound = false;

  if (color[0] === "#") {
    color = color.slice(1);
    usePound = true;
  }

  const num = parseInt(color, 16);

  // Red
  let red = (num >> 16) + value;
  if (red > 255) red = 255;
  else if (red < 0) red = 0;

  // Green
  let green = (num & 0x0000FF) + value;
  if (green > 255) green = 255;
  else if (green < 0) green = 0;

  // Blue
  let blue = ((num >> 8) & 0x00FF) + value;
  if (blue > 255) blue = 255;
  else if (blue < 0) blue = 0;

  console.log((usePound?"#":"") + (green | (blue << 8) | (red << 16)).toString(16));

  return (usePound?"#":"") + (green | (blue << 8) | (red << 16)).toString(16);
}

function convertToRgb(hexVal) {
  let color = hexVal;

  if (color[0] === "#") color = color.slice(1);
  const num = parseInt(color, 16);
  const rgbVal = {
    red: num >> 16,
    green: (num >> 8) & 0x00FF,
    blue: num & 0x0000FF,
  }
  return `${rgbVal.red}, ${rgbVal.green}, ${rgbVal.blue}`;
}

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

  dropdown: {
    backgroundColor: colors.white,
    shadowColor: shadows.shadowColor,
    titleColor: theme.colors.textDark,
    borderColor: theme.colors.uiLight,

    item: {
      titleColor: theme.colors.uiDark,
      hoverColor: theme.colors.background,
      activeColor: LightenDarkenColor(theme.colors.background, -2),
      iconColor: theme.colors.textDark,
    },
  },
};
