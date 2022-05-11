import axios from "axios";
import { LGA } from "../models/lga";
import { Party } from "../models/party";
import { PUResult } from "../models/pu_result";
import { PollingUnit } from "../models/polling-unit";

//TODO: Fix react env not working - problem
const apiEndpoint = "https://inec-node.herokuapp.com";
//const apiEndpoint = "http://localhost:9000";

export const getLGA = () => {
  return axios.get<LGA[]>(`${apiEndpoint}/lga`);
};

export const getParties = () => {
  return axios.get<Party[]>(`${apiEndpoint}/party`);
};

export const getPollingUnits = () => {
  return axios.get<PollingUnit[]>(`${apiEndpoint}/polling-units`);
};

export const getPollingUnitResults = (party: string) => {
  return axios.get<PUResult[]>(`${apiEndpoint}/pu-results/${party}`);
};

export const getLGAResults = (lgaId: string) => {
  return axios.get(`${apiEndpoint}/lga/${lgaId}`);
};

export const getPUNResults = (pun: string) => {
  return axios.get(`${apiEndpoint}/polls/${pun}`);
};
