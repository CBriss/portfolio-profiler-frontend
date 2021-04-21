import axios from "axios";

export const getCompanies = () => {
  return axios
    .get(`${process.env.REACT_APP_SERVER_URL}/companies`)
    .then((response) => response.data);
};

export const createCompany = (newCompany) => {
  return axios
    .post(`${process.env.REACT_APP_SERVER_URL}/companies/new`, {
      company: newCompany,
    })
    .then((response) => response.data);
};

export const deleteCompany = (company_id) => {
  return axios.post(
    `${process.env.REACT_APP_SERVER_URL}/companies/delete/${company_id}`
  );
};

export const listCompanies = () => {
  return axios
    .get(`${process.env.REACT_APP_SERVER_URL}/companies/list`)
    .then((response) => response.data);
};
