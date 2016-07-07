import axios from 'axios';

export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';

const ROOT_URL = 'localhost:8080';
const GMAP_URL = 'gmapsapiroot';

export function fetchLandings () {
  const request = axios.get(`${ROOT_URL}/landings`);

  return {
    type: ADD_FILTER,
    payload: request
  };
}

export function searchLocation (search) {
  const request = axios.get(`${GMAP_URL}/${search}`);
}