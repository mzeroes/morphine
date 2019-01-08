import { DefaultTheme } from 'react-native-paper';

const DARK_MODE = false;

const TINT_COLOR = DARK_MODE ? '#4a5353' : '#6f8ca9';
const primary = '#6f8ca9';
const accent = '#EAEB5E';
const background = '#F2F2F2';
const darkBG = '#0000ff';
const lightBG = '#F2F2F2';
const text = '#4a5353';
const textDark = '#4a5353';
const textLight = '#F2F2F2';
const surface = '#F2F2F2';
const disabled = '#242b2b';
const placeholder = '#aaaaaa';
const backdrop = '#242b2b';
const tintColor = TINT_COLOR;
const tabIconSelected = TINT_COLOR;
const tabIconDefault = TINT_COLOR;
const statusbar = '#EfEfEf';
const secondary = '#242b2b';
const headingtext = '#6f8ca9';
const infoText = '#6f8ca9';
const link = '#ee5f5b';
const highlightedText = '#242b2b';
const theme = '#EAEB5E';
const white = '#EFEFEF';
const black = '#060B10';
const dark = '#171C1F';
const grey = '#E2E2E2';
const lightgrey = '#F2F2F2';
const overlay = '#242b2b';
const red = '#ee5f5b';
const blue = '#19b5fe';
const green = '#00ff0d';
const yellow = '#F8B106';
const tabBar = '#fefefe';
const errorBackground = 'red';
const errorText = '#fff';
const warningBackground = '#EAEB5E';
const warningText = '#666804';
const noticeBackground = TINT_COLOR;
const noticeText = '#fff';

export {
  primary,
  accent,
  background,
  darkBG,
  lightBG,
  text,
  textDark,
  textLight,
  surface,
  disabled,
  placeholder,
  backdrop,
  tintColor,
  tabIconSelected,
  tabIconDefault,
  statusbar,
  secondary,
  headingtext,
  infoText,
  link,
  highlightedText,
  theme,
  white,
  black,
  dark,
  grey,
  lightgrey,
  overlay,
  red,
  blue,
  green,
  yellow,
  tabBar,
  noticeText,
  errorBackground,
  errorText,
  warningBackground,
  warningText,
  noticeBackground,
};

export const papertheme = {
  ...DefaultTheme,
  roundness: 4,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary,
    accent,
    background,
    surface,
    text,
    disabled,
    placeholder,
    backdrop
  }
};
