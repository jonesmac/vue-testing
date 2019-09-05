import axios from 'axios';
import { API } from '@/constants/api';

export const login = async (payload) => {
  return axios.post(API.USERS.CREATE, payload);
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