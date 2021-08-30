import typographyStyle from './typographyStyle';
import { colorsLight, colorsDark } from './colors';
import breakpoints from './breakpoints';

const borderRadius = '8px';
const transition = '200ms ease-in-out';
const fontFamily = "'Rubik', sans-serif";
const backgroundLight = 'url(/images/bubbles.svg)';
const backgroundDark = 'url(/images/bubbles_dark.svg)';

export const ThemeLight = {
  colors: colorsLight,
  typographyStyle,
  breakpoints,
  borderRadius,
  transition,
  fontFamily,
  backgroundImage: backgroundLight,
};

export const ThemeDark = {
  colors: colorsDark,
  typographyStyle,
  breakpoints,
  borderRadius,
  transition,
  fontFamily,
  backgroundImage: backgroundDark,
};
