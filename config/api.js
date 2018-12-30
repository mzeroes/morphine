import { AsyncStorage } from "react-native";


export const loginUser = async token => {
  const response = await fetch(
    "https://graph.facebook.com/me?access_token=" + token
  ).catch(err => { });

  if (response.ok) {
    // console.log(response)
    return response;
  }

  const errMessage = await response.text();
  throw new Error(errMessage);
};

export const validateFBAccessToken = async fbAccessToken => {

  if (fbAccessToken) {
    const response = await fetch("http://localhost:8000/validateFBAccessToken", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ fbAccessToken })
    });

    if (response.ok) {
      // valid token
      return true;
    }

    const errMessage = await response.text();
    throw new Error(errMessage);
  } else {
    throw new Error("No access_token");
  }
};

export const logFBAccessToken = async fbAccessResponse => {
  if (fbAccessResponse) {
    const response = await fetch("http://localhost:8000/fbAccessToken", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ fbAccessResponse })
    });

    if (response.ok) {
      // token is logged
      return true;
    }

    const errMessage = await response.text();
    throw new Error(errMessage);
  }
};
export const userDetails = async () => {
  const userToken = await AsyncStorage.getItem("userToken");
  // await validateTokenAsync(userToken);
  var errMessage = "";
  if (userToken) {
    const response = await fetch(
      "https://graph.facebook.com/me?access_token=" + userToken
    ).catch(err => {
      errMessage = err;
    });
    if (response.ok) {
      // console.log(response._bodyInit)
      return response._bodyInit;
    }
    errMessage = errMessage + await response.text();
    throw new Error(errMessage);
  } else {
    throw new Error("userToken should be present in store");
  }
};
