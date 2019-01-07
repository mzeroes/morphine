import { combineReducers } from 'redux';
import { UPDATE_CONTACT, UPDATE_USER } from './action';

const contactsReducer = (state = [], action) => {
  if (action.type === UPDATE_CONTACT) return [...state, action.payload];
  return state;
};

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return ({
        ...state,
        ...action.payload
      });
    case UPDATE_CONTACT:
      return ({
        ...state,
        ...action.payload
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  contacts: contactsReducer
});

export default rootReducer;
