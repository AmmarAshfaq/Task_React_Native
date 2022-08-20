import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  button: {
    marginHorizontal: Metrics.ratio(20),
    marginBottom: Metrics.ratio(20),
  },
  section1: {
    flex: 0.6,
    backgroundColor: '#ec252d',
    transform: [{scaleX: Metrics.ratio(2)}],
    borderBottomStartRadius: Metrics.ratio(180),
    borderBottomEndRadius: Metrics.ratio(200),
    overflow: 'hidden',
  },
  section1ChildView: {flex: 1, transform: [{scaleX: Metrics.ratio(0.5)}]},
  section2: {
    flex: 0.4,
    backgroundColor: Colors.background.primary,
    justifyContent: 'center',
  },
  section2View: {justifyContent: 'center', alignItems: 'center'},
  section2Text: {flexDirection: 'row', alignItems: 'center'},
  registerButton: {
    alignItems: 'flex-end',
    marginHorizontal: Metrics.ratio(10),
    marginTop: Metrics.ratio(10),
  },
  headingView: {
    zIndex: 1000,
    flex: 1,
    justifyContent: 'center',
    marginLeft: Metrics.ratio(20),
  },
});
