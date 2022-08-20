import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../themes';
const styles = StyleSheet.create({
  main: {
    overflow: 'hidden',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    height: Metrics.ratio(44),
    borderRadius: Metrics.ratio(90),
    marginVertical: Metrics.ratio(2.5),
    justifyContent: 'center',
    marginHorizontal: 0,
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.white,
    textTransform: 'capitalize',
    fontSize: Metrics.ratio(16),
  },
  buttonTouch: {
    width: '100%',
    minHeight: Metrics.ratio(70),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
