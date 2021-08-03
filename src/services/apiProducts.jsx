import { callApi, baseUrl, myHeaders } from "./apiData";

/* -------------------------------- */
//gets products data
export const callProducts = () => {
  const productsEndpoint = `${baseUrl}products`;
  return callApi(productsEndpoint, myHeaders);
};
/* -------------------------------- */
//it exchanges points for products
export const redeemProduct = async (productId) => {
  //receives product id to exchange
  const raw = JSON.stringify({ productId: productId });
  //info to api request options
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  const redeemEndpoint = `${baseUrl}redeem`;
  //sending data to api
  try {
    const response = await fetch(redeemEndpoint, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};