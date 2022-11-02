import axios from 'axios';

const address = `https://preonboarding.platdev.net/api/cars`;

export const GetAllCarsApi = () => {
  return axios.get(address, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const GetSegmentApi = type => {
  return axios.get(`${address}?segment=${type}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
