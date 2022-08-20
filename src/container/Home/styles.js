import { StyleSheet } from "react-native";
import { Colors, Metrics } from "../../themes";
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    borderColor: Colors.themeColors.border,
    borderWidth: Metrics.ratio(1),
    marginVertical: Metrics.ratio(10),
    marginHorizontal: Metrics.ratio(10),
    padding: Metrics.ratio(10),
    borderRadius: Metrics.ratio(10),
  },
});
