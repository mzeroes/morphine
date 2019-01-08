import firebase from 'utils/firebase';
import { userUpdate } from 'api/stored';

export const signOutUser = async () => {
  firebase.auth().signOut().then(() => {
    console.info('Signout successfull');
  }).catch((error) => {
    console.warn(error);
  });
};

export const getUser = async () => {
  try {
    let userInfo;
    await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.info('In userAuthStateChanged()');
        userInfo = user;
        userUpdate(user);
      }
    });
    return userInfo;
  } catch (err) {
    console.err(err);
    return null;
  }
};
