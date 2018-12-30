import { Dimensions } from "react-native";
import { Constants } from "expo"

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


export default {
  statusbarMargin: Constants.statusBarHeight,
  window: {
    width,
    height
  },
  isSmallDevice: width < 375
};
