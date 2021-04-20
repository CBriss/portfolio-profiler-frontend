import axios from "axios";

export const getCompanies = () => {
  return axios
    .get(`${process.env.REACT_APP_SERVER_URL}/companies`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const createCompany = (newCompany) => {
  return axios
    .post(`${process.env.REACT_APP_SERVER_URL}/companies/new`, {
      company: newCompany,
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export const deleteCompany = (company_id) => {
  return axios
    .post(`${process.env.REACT_APP_SERVER_URL}/companies/delete/${company_id}`)
    .catch((error) => console.log(error));
};
