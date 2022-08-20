import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../themes';
const LOADER_SIZE = Metrics.ratio(100);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: (Metrics.screenWidth - LOADER_SIZE) / 2,
    top: (Metrics.screenHeight - LOADER_SIZE) / 2 - Metrics.ratio(50),
  },
});
export default styles;
