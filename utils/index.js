// common utils 
import { WebBrowser } from "expo";
import { AsyncStorage } from 'react-native';
import NavigationService from './NavigationService';

export const handleUrl = url => {
  WebBrowser.openBrowserAsync(url);
};

onPressLogout = async () => {
  await AsyncStorage.setItem("userToken", "");
  // add some latency
  setTimeout(() => { }, 4000); // add some function to confirm
  console.log("logging out....")
  NavigationService.navigate('AuthLoading');
}
