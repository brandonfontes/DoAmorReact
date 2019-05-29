import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
  miniMargin: 3,
  miniPadding: 3,
  smallMargin: 8,
  smallPadding: 5,
  basePadding: 15,
  baseMargin: 15,
  doubleBaseMargin: 30,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  tabBarHeight: 54,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  statusBarHeight: (Platform.OS === 'ios') ? 20 : 0,
  baseRadius: 5,
  tabsRadius: 20,
  iconPrimary: 60,
  iconSecundary: 35,
  elevation: 4,
};

export default metrics;