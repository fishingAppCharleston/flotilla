import axios from 'axios';

export const FETCH_LANDINGS = 'FETCH_LANDINGS';


export function fetchLandings() {
  const request = axios.get(`${ROOT_URL}/landings`);

  return {
    type: FETCH_LANDINGS,
    payload: request
  };
}

//search function
