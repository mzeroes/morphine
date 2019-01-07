import { AsyncStorage } from 'react-native';
import store from 'app/redux/store';
import { updateUser } from 'app/redux/action';

export const getStoredToken = async () => {
  const token = await AsyncStorage.getItem('userToken');
  const type = await AsyncStorage.getItem('userTokenType');
  return { token, type };
};

export const getStoredItem = async (ITEM_NAME) => {
  const ITEM = await AsyncStorage.getItem(ITEM_NAME);
  return ITEM;
};

export const storeItem = async (ITEM_NAME, ITEM) => {
  try {
    await AsyncStorage.setItem(ITEM_NAME, ITEM);
  } catch (err) {
    throw err;
  }
};

export const storeTokenInStore = async (tokenData) => {
  try {
    await AsyncStorage.setItem('userToken', tokenData.token);
    await AsyncStorage.setItem('userTokenType', tokenData.type);
    return 'success';
  } catch (err) {
    console.warn(err);
    throw err;
  }
};

export async function userUpdate(user) {
  console.log(user);
  store.dispatch(updateUser({ id: user.uid, name: user.displayName, email: user.email }));
}
