import { callApi, baseUrl, myHeaders } from "./apiData";

//gets user data 
export const callUser = () => {
    const userEndpoint = `${baseUrl}user/me`;
    return callApi(userEndpoint, myHeaders);
  };

//gets user redeem history data
export const callHistory = () => {
    const historyEndpoint = `${baseUrl}user/history`;
    return callApi(historyEndpoint, myHeaders);
  };

//add points
export const sendPoints = async (giftPoints) => {
    //receives the amount to add
    const raw = JSON.stringify({ amount: giftPoints });
    //info to api request options
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    const pointsEndpoint = `${baseUrl}user/points`;
 //sending data to api
 try {
    const response = await fetch(pointsEndpoint, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};