import {Platform} from 'react-native';

const white = '#FFFFFF';
const black = '#000000';
const grey = Platform.select({
  ios: '#F4F4F4',
  android: '#FAFAFA',
});
const lightGrey = '#8A8A8A';
const darkGrey = '#363535';
const transparent = 'rgba(0,0,0,0)';

const primary = '#f8f4ed';
const secondary = white;
const tertiary = black;
const quaternary = grey;

const background = {
  primary,
  secondary: '#f2f2f2',
  tertiary: '#00000057',
  button: '#3b383c',
};

const defaultTextInput = '#333';

const text = {
  primary: '#212121',
  secondary: '#bcbcbc',
  tertiary: primary,
  quaternary: '#707070',
  accent: '#ff2824',
  linkText: '#3380cb',
  light: white,
  senary: '#706f6f',
};

const themeColors = {
  primary: '#3b383c',
  lightPrimary: '#8f8d8e',
  secondary: '#e9a23d',
  hilite: '#3ad1ce',
  tertiary: '#078ea0',
  senary: '#c4c4c4',

  btnHilite: '#edf4ff',
  border: '#b9b9b9',
  borderLite: '#eef1f7',
  hrLine: '#E9E8E8',
  linkText: '#3380cb',
  unreadMessage: '#cee7ff',
  toastColor: '#b5b5b5',
  themeDarkColor: '#004085',
  doneButtonColor: '#52ef0c',
  disabledDoneButtonColor: '#b9b9b9',
  loader: '#2ca502',
  destructive: '#e45858',
  decision: 'rgb(215, 110, 51)',
  themeBlue: '#b8daff',
  themeGrey: '#272626',
  themeGray2: '#e6e6e6',
  inputBorder:"#fbbc04"
};

const border = '#f2f2f2';
const separator = '#f2f2f2';

export default {
  white,
  black,
  grey,
  lightGrey,
  darkGrey,
  transparent,
  themeColors,
  defaultTextInput,
  primary,
  secondary,
  tertiary,
  quaternary,

  background,
  text,

  border,
  separator,

  info: '#19bfe5',
  warning: '#feb401',
  danger: '#ed1c4d',
  success: '#b76c94',
  green: 'green',
  lightGreen: '#40a700',

  rowColor: '#dbdbdb',

  gradientColor: ['#fff', '#fff'],
  themeColor: '#23ABBE',

  // subHeading: "#D5D5D5",
  // placeholderColor: "#D5D5D5",
  // inputColor: "#4E4E4E",
  // descriptionColor: "#676767",
  // borderColor: "#E6E6E6",
  // subHeading: "#676767",
  // logoutColor: "#D80101",

  subHeading: '#D5D5D5',
  placeholderColor: '#b6b6b6',
  inputColor: '#676767',
  descriptionColor: '#706f6f',
  borderColor: '#E6E6E6',
  logoutColor: '#D80101',

  ratingColor: '#ffc107',
  blue: 'blue',
  messageSeen: '#00bf6d',
  messageUnseem: '#b9cca0',
  inActive: '#CCF0EB',
  socialBackground: '#e0f5f2',
  modalCancelText: '#7e7e7e',
  descriptionColor2: '#535353',
  iconColor: '#53b6a3',
  stickMsgBg: '#d0f1ec',
  sliderTextColor: '#909090',
  sliderBckgroundColor: '#f8f8f8',
  backIconColor: '#3e3e3e',
};
