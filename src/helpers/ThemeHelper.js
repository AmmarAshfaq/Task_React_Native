import {Colors} from '../themes';
import {DataHelper} from '../helpers';

class ThemeHelper {
  getAppBackgroundColor = () => {
    return Colors.white;
  };

  getAppPrimaryColor = () => {
    const appSettingTheme = DataHelper.getAppTheme();

    if (appSettingTheme) {
      return appSettingTheme[0];
    }

    return Colors.themeColors.primary;
  };

  getAppPrimaryLightColor = () => {
    const appSettingTheme = DataHelper.getAppTheme();

    if (appSettingTheme) {
      return appSettingTheme[1];
    }

    return Colors.themeColors.lightPrimary;
  };

  getAppPrimaryFont = () => {
    const appSettingFont = DataHelper.getAppThemeFont();

    if (appSettingFont) {
      return appSettingFont;
    }

    return 'base';
  };
}

export default new ThemeHelper();
