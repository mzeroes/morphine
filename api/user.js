import { AsyncStorage } from 'react-native';
import { Permissions, Contacts } from 'expo';

export const resetTokenInStore = async () => {
  await AsyncStorage.setItem('userToken', '');
  await AsyncStorage.setItem('userTokenType', '');
};

export const validateFBToken = async (token) => {
  if (token) {
    try {
      const response = await fetch(
        'https://graph.facebook.com/'
          + 'me?fields=id,email,name,picture'
          + `&access_token=${token}`
      );
      return response.json();
    } catch (err) {
      resetTokenInStore();
      return false;
    }
  }
  console.warn('FB token is null');
  return false;
};

export const validateGoogleTokenAsync = async (token) => {
  if (token) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${token}`
      );
      return response.json();
    } catch (err) {
      resetTokenInStore();
      return false;
    }
  }
  console.warn('Google Token is null');
  return false;
};

export const validateTokenAsync = async (tokenData) => {
  switch (tokenData.type) {
    case 'Facebook': {
      const response = await validateFBToken(tokenData.token);
      if (response) {
        console.log('[INFO] FB token validated');
        return true;
      }
      return false;
    }
    case 'Google': {
      const response = await validateGoogleTokenAsync(tokenData.token);
      if (response) {
        console.log('[INFO] Google token validated');
        return true;
      }
      return false;
    }
    case 'Email': {
      return true;
    }
    default:
      return false;
  }
};

export const userDetails = async (tokenData) => {
  console.log(tokenData.type);
  switch (tokenData.type) {
    case 'Facebook': {
      const response = await validateFBToken(tokenData.token);
      console.log(response);
      if (response) {
        console.log(`[INFO] : FB data: ${JSON.stringify(response, null, 4)}`);
        return {
          name: response.name,
          id: response.id,
          picture: response.picture.data.url,
          email: response.email
        };
      }
      return false;
    }
    case 'Google': {
      const response = await validateGoogleTokenAsync(tokenData.token);
      if (response) {
        console.log(`[INFO] Google data: ${JSON.stringify(response, null, 4)}`);
        return {
          name: response.name,
          id: response.id,
          picture: response.picture,
          email: response.email
        };
      }
      return false;
    }
    case 'Email': {
      return true;
    }
    default:
      return false;
  }
};

export const getPhoneContactsAsync = async () => {
  const { status } = await Permissions.askAsync(Permissions.CONTACTS);

  if (status === 'granted') {
    const { data } = await Contacts.getContactsAsync({
      pageSize: 100,
      offset: 0,
      fields: [
        Contacts.Fields.ID,
        Contacts.Fields.Emails,
        Contacts.Fields.Name,
        Contacts.Fields.PhoneNumbers
      ]
    });
    return data;
  } else {
    throw new Error('Location permission not granted');
  }
};

export const usersAsync = async () => {
  // const response = await fetch('https://randomuser.me/api/?page=3&results=40&seed=abcd');

  // const { results } = await response.json();
  const results = await getPhoneContactsAsync();

  // console.log(results);

  const processUsers = user => ({
    id: user.id,
    name: user.name,
    phoneNumbers: user.phoneNumbers,
    image: null,
    emails: user.emails
  });

  // console.log(Object.entries(results)[1]);
  // const users = mapper(results, value => value);

  const users = results.map(processUsers);
  return users;
};
