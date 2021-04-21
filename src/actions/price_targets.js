import axios from "axios";

export const getPriceTargets = () => {
  return axios
    .get(`${process.env.REACT_APP_SERVER_URL}/price_targets`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const createPriceTarget = (newPriceTarget) => {
  return axios
    .post(`${process.env.REACT_APP_SERVER_URL}/price_targets/new`, {
      priceTarget: newPriceTarget,
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const deletePriceTarget = (priceTarget_id) => {
  return axios
    .post(
      `${process.env.REACT_APP_SERVER_URL}/price_targets/delete/${priceTarget_id}`
    )
    .catch((error) => console.log(error));
};
