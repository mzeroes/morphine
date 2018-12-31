import { AsyncStorage } from "react-native";
import { AuthSession } from "expo";

import { config } from ".";

const { FB_APP_ID } = config;

export const loginUserWithFBToken = async (token) => {
  // make sure token is not null
  if (token) {
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`
    ).catch(err => console.warn(err));

    if (response.ok) {
      return response;
    }
    // if bad response
    const errMessage = await response.text();
    throw new Error(errMessage);
  } else {
    console.warn("token is null");
    throw new Error("Enter a validateToken");
  }
};

export const webSessionLoginFBAsync = async () => {
  const redirectUrl = AuthSession.getRedirectUrl();
  const result = await AuthSession.startAsync({
    authUrl:
      "https://www.facebook.com/v2.8/dialog/oauth?response_type=token"
      + `&client_id=${FB_APP_ID}`
      + `&redirect_uri=${encodeURIComponent(redirectUrl)}`
  });
  console.log(`[INFO**] webSessionLoginFBAsync => ${result}`);
  return result;
};

export const validateFBTokenAsync = async (token) => {
  const response = await loginUserWithFBToken(token);
  console.log(response);
  if (response.ok) {
    console.log("[INFO**] : FB token validated");
    return true;
  }
  return false;
};
export const userDetails = async () => {
  const userToken = await AsyncStorage.getItem("userToken");
  // await validateTokenAsync(userToken);
  if (userToken) {
    let errMessage;
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${userToken}`
    ).catch((err) => {
      errMessage = err;
    });
    if (response.ok) {
      return response.json();
    }
    errMessage = await response.text();
    throw new Error(errMessage);
  }
  return null;
};
