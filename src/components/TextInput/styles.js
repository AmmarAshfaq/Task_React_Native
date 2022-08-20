import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../themes';
const styles = StyleSheet.create({
  inputStyle: {height: Metrics.ratio(40), borderBottomWidth: Metrics.ratio(2),color:Colors.black,borderBottomColor:Colors.themeColors.inputBorder},
  viewStyle: {
    backgroundColor: Colors.white,
    borderRadius:Metrics.ratio(10),
    paddingHorizontal:Metrics.ratio(15),
    paddingVertical: Metrics.ratio(10)
  },
  labelViewStyle: {},
  labelStyle: {},
});
export default styles;
