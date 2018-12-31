import { Dimensions } from "react-native";
import { Constants } from "expo";

const { width, height } = Dimensions.get("window");

export default {
  statusbarMargin: Constants.statusBarHeight,
  window: {
    width,
    height
  },
  isSmallDevice: width < 375
};
