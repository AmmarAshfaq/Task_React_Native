import Metrics from './Metrics.js';
const type = {
  base: 'Poppins-Regular',
  description: 'Poppins-Regular',
  semiBold: 'Poppins-SemiBold',
  medium_poppins: 'Poppins-Medium',
  light_poppins: 'Poppins-Light',
};

const size = {
  xxxxxSmall: Metrics.generatedFontSize(9),
  xxxxSmall: Metrics.generatedFontSize(11),
  xxxSmall: Metrics.generatedFontSize(12),
  xxSmall: Metrics.generatedFontSize(13),
  xSmall: Metrics.generatedFontSize(14),
  small: Metrics.generatedFontSize(15),
  normal: Metrics.generatedFontSize(17),
  medium: Metrics.generatedFontSize(18),
  large: Metrics.generatedFontSize(20),
  xLarge2: Metrics.generatedFontSize(22),
  xLarge: Metrics.generatedFontSize(24),
  xLarge3: Metrics.generatedFontSize(25),
  xLarge4: Metrics.generatedFontSize(28),
  xxLarge1: Metrics.generatedFontSize(30),
  xxLarge12: Metrics.generatedFontSize(32),
  xxLarge: Metrics.generatedFontSize(34),
  xxLarge2: Metrics.generatedFontSize(36),
  xxxLarge: Metrics.generatedFontSize(40),
  xxxxLarge: Metrics.generatedFontSize(60),
};

export default {
  type,
  size,
};
