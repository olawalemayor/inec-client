import axios from "axios";

//TODO: Fix react env not working - problem
const apiEndpoint = "https://inec-node.herokuapp.com/";

export const getLGA = () => {
  return axios.get(`${apiEndpoint}/lga`);
};

export const getParties = () => {
  return axios.get(`${apiEndpoint}/party`);
};

export const getPollingUnitResults = (party: string) => {
  return axios.get(`${apiEndpoint}/pu-results/${party}`);
};
