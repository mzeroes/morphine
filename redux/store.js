import { AsyncStorage } from "react-native";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { updateUser } from "./action";
import { userDetails } from "../config/api";

const DEFAULT_STATE = {
  user: {},
  contacts: [],
};

const store = createStore(rootReducer, DEFAULT_STATE);

export async function getStoredToken() {
  const userToken = await AsyncStorage.getItem("userToken");
  console.log(`[INFO**] getStoredToken() => UserToken : ${userToken}`);
  return userToken;
}
export async function storeTokenInStore(token) {
  try {
    await AsyncStorage.setItem("userToken", token);
    console.log(`[INFO**] storeTokenInStore() => token : ${token}`);
    return "success";
  } catch (err) {
    console.warn(err);
    throw err;
  }
}


async function userupdate() {
  const test = await getStoredToken();
  if (test) {
    const results = await userDetails();
    store.dispatch(updateUser({ id: results.id, name: results.name }));
    console.log(`state => {\nid: ${store.getState().user.id}\n \
                           name: ${store.getState().user.name}}`);
  }
}
userupdate();
export default store;
