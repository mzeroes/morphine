import firebase from 'firebase';

import { firebaseConfig } from '../config/keys';

firebase.initializeApp(firebaseConfig);

export default firebase;
