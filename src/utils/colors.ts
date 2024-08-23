//Main colors
import color from 'color';

const black = '#000000';
const white = '#FFFFFF';

// Core colors
const primary = '#0076CB';
const secondary = '#C2C2C4';
const inactive = '#AEAEAE';
const border = '#E2E2E2';
const blackWhite = '#212121';
const green = '#187D59';
const onSurfaceBlack = '#616E7C';
const onSurfaceHigh = '#19232D';
const neutralPrimaryColor = '#1B1B1B';
const backgroundLight = '#A9A9A9';
const gray5 = '#545664';
const disabled = '#9D9EA1';

const primaryDark = '#23AA49';

function rgb(hex: any) {
  return color(hex).alpha(1).toString();
}

// Return an rgba string value for CSS
function rgba(hex: any, opacity: number) {
  return color(hex).alpha(opacity).toString();
}

// Sass's darken function
function darken(hex: any, amount: number) {
  return color(hex)
    .darken(amount / 100)
    .toString();
}

// Sass's lighten function
function lighten(hex: any, amount: number) {
  return color(hex)
    .lighten(amount / 100)
    .toString();
}

const Giratina100 = '#F5F5F5';
const Giratina200 = '#F6F6F6';
const Giratina500 = '#9E9E9E';

const bgDialog = 'rgba(0, 0, 0, 0.5)';

const gray25 = '#FCFCFD';
const gray800 = '#1D2939';
const gray700 = '#344054';
const gray500 = '#667085';
const gray600 = '#475467';
const gray400 = '#98A2B3';
const gray300 = '#D0D5DD';
const gray200 = '#EAECF0';
const gray100 = '#F2F4F7';

const primary600 = '#0076CB';
const primary500 = '#0A96ED';

const warn = '#FDB022';
const warn25 = 'FFFAEB';

export {rgb, rgba, darken, lighten};

export default {
  primary,
  secondary,
  black,
  white,
  inactive,
  border,
  blackWhite,
  primaryDark,

  Giratina100,
  Giratina200,
  Giratina500,

  bgDialog,
  green,
  onSurfaceBlack,
  onSurfaceHigh,
  neutralPrimaryColor,
  backgroundLight,
  gray5,
  disabled,

  gray800,
  gray700,
  gray600,
  gray500,
  gray400,
  gray300,
  gray200,
  gray100,
  gray25,

  primary600,
  primary500,

  warn25,
  warn,
};
