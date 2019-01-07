// common utils
import { WebBrowser } from 'expo';
import { signOutUser } from 'auth/authFirebase';
import store from 'app/redux/store';
import { updateUser } from 'app/redux/action';
import NavigationService from './NavigationService';
import { resetTokenInStore } from '../api/user';

export const handleUrl = (url) => {
  WebBrowser.openBrowserAsync(url);
};

export const onPressLogoutAsync = async () => {
  try {
    await resetTokenInStore();
    signOutUser();
    store.dispatch(updateUser({}));

    NavigationService.navigate('Loading');
  } catch (err) {
    console.log(err);
  }
};
