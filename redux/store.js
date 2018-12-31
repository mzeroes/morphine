import { createStore } from "redux";
import rootReducer from "./reducers";
import { updateUser } from "./action";
import { userDetails } from "../config/api";

const DEFAULT_STATE = {
  user: {},
  contacts: []
};

const store = createStore(rootReducer, DEFAULT_STATE);
async function userupdate() {
  const results = await userDetails();
  console.log(`HELADOADOASD${results.id}`);
  store.dispatch(updateUser({ id: results.id, name: results.name }));
  console.log(`state => \nid: ${store.getState().user.id}\nname: ${store.getState().user.name}`);
}
userupdate();
export default store;
