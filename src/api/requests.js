import axios from 'axios';
import { API } from '@/constants/api';

export const login = async (payload) => {
  return axios.post(API.USERS.LOGIN, payload);
}

export const getLocations = async () => {
  return axios.get(API.LOCATIONS.GET_ALL);
}

export const saveLocation = async (payload) => {
  return axios.post(API.LOCATIONS.CREATE, payload);
}

export const deleteLocation = async (id) => {
  return axios.delete(`${API.LOCATIONS.DELETE}/${id}`);
}

export const getWeather = async (zipcode) => {
  return axios.get(API.WEATHER.GET, {
    params: {
      zip: `${zipcode},us`,
      appid: process.env.VUE_APP_OPEN_WEATHER_API_KEY,
      units: 'imperial'
    }
  });
}