import firebase from '../utils/firebase';
import { googleAuth } from './getOAuthFromProvider';

export const loginFireUsingGoogle = async () => {
  try {
    const response = await googleAuth();
    if (response.type === 'success') {
      // eslint-disable-next-line camelcase
      const { access_token } = response.params;
      const { url } = response;
      const data = {
        access_token,
        url
      };
      const credential = firebase.auth.GoogleAuthProvider.credential('', data.access_token);
      firebase.auth().signInAndRetrieveDataWithCredential(credential)
        .then((res) => {
          console.log(JSON.stringify(res, null, 2));
        });
    }
  } catch (error) {
    console.log(error);
  }
};
