import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;
const vw = Dimensions.get("window").width / 100;
const vh = Dimensions.get("window").height / 100;

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 667;

const scale = (size) => (screenWidth / guidelineBaseWidth) * +size;
const scaleVertical = (size) => (screenHeight / guidelineBaseHeight) * size;

const ratio = (iosSize, androidSize) =>
  Platform.select({
    // ios: scaleVertical(iosSize),
    ios: androidSize || iosSize,
    android: androidSize || iosSize,
  });

const generatedFontSize = (iosFontSize, androidFontSize) =>
  Platform.select({
    ios: scale(iosFontSize),
    android: androidFontSize || iosFontSize,
  });

export default {
  ratio,
  screenWidth,
  screenHeight,
  vw,
  vh,
  generatedFontSize,
  smallMargin: ratio(8),
  baseMargin: ratio(16),
  doubleBaseMargin: ratio(32),
};
