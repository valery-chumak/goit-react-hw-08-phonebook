import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../shared/api/auth';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signup(data);
      console.log(result);
      return result;
    } catch ({ response }) {
      const error = {
        type: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);
export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      return result;
    } catch ({ response }) {
      const error = {
        type: response.status,
        message: response.data.message,
      };
      return rejectWithValue(error);
    }
  }
);
