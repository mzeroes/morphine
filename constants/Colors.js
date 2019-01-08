import { DefaultTheme } from 'react-native-paper';
import { DARK_MODE } from '../config';

const TINT_COLOR = DARK_MODE ? '#4a5353' : '#6f8ca9';

const LIGHT = {
  primary: '#6f8ca9',
  accent: '#EAEB5E',
  background: '#F2F2F2',
  darkBG: '#242b2b',
  lightBG: '#F2F2F2',
  text: '#4a5353',
  textDark: '#4a5353',
  textLight: '#F2F2F2',
  surface: '#F2F2F2',
  disabled: '#242b2b',
  placeholder: '#aaaaaa',
  backdrop: '#242b2b',
  tintColor: TINT_COLOR,
  tabIconSelected: TINT_COLOR,
  tabIconDefault: TINT_COLOR,
  statusbar: '#EfEfEf',
  secondary: '#242b2b',
  headingtext: '#6f8ca9',
  infoText: '#6f8ca9',
  link: '#ee5f5b',
  highlightedText: '#242b2b',
  theme: '#EAEB5E',
  white: '#EFEFEF',
  black: '#060B10',
  dark: '#171C1F',
  grey: '#E2E2E2',
  lightgrey: '#F2F2F2',
  overlay: '#242b2b',
  red: '#ee5f5b',
  blue: '#19b5fe',
  green: '#00ff0d',
  yellow: '#F8B106',
  tabBar: '#fefefe',
  errorBackground: 'red',
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: TINT_COLOR,
  noticeText: '#fff'
};

const DARK = {
  primary: '#3d5a6b',
  accent: '#636363',
  background: '#171C1F',
  darkBG: '#242b2b',
  lightBG: '#171C1F',
  text: '#4a5353',
  textDark: '#4a5353',
  textLight: '#F2F2F2',
  surface: '#F2F2F2',
  disabled: '#171C1F',
  placeholder: '#aaaaaa',
  backdrop: '#f0f0f0',
  tintColor: TINT_COLOR,
  tabIconSelected: TINT_COLOR,
  tabIconDefault: TINT_COLOR,
  statusbar: '#171C1F',
  secondary: '#f0f0f0',
  headingtext: '#6f8ca9',
  infoText: '#6f8ca9',
  link: '#ee5f5b',
  highlightedText: '#f0f0f0',
  theme: '#EAEB5E',
  white: '#EFEFEF',
  black: '#060B10',
  dark: '#171C1F',
  grey: '#E2E2E2',
  lightgrey: '#F2F2F2',
  overlay: '#f0f0f0',
  red: '#ee5f5b',
  blue: '#19b5fe',
  green: '#00ff0d',
  yellow: '#F8B106',
  tabBar: '#fefefe',
  errorBackground: 'red',
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: TINT_COLOR,
  noticeText: '#fff'
};

export const Colors = DARK_MODE ? DARK : LIGHT;
// export default LIGHT;

export const papertheme = {
  ...DefaultTheme,
  roundness: 4,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    accent: Colors.accent,
    background: Colors.background,
    surface: Colors.surface,
    text: Colors.text,
    disabled: Colors.disabled,
    placeholder: Colors.placeholder,
    backdrop: Colors.backdrop
  }
};
