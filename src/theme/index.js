import typographyStyle from './typographyStyle';
import { colorsLight, colorsDark } from './colors';
import breakpoints from './breakpoints';

const borderRadius = '8px';
const transition = '200ms ease-in-out';
const fontFamily = "'Rubik', sans-serif";

export const ThemeLight = {
  colors: colorsLight,
  typographyStyle,
  breakpoints,
  borderRadius,
  transition,
  fontFamily,
};

export const ThemeDark = {
  colors: colorsDark,
  typographyStyle,
  breakpoints,
  borderRadius,
  transition,
  fontFamily,
};
