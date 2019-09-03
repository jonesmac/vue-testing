import axios from 'axios';
import { API } from '@/constants/api';

export const login = async (payload) => {
  return axios.post(API.USERS.CREATE, payload);
}