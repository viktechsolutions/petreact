import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  readonly: false,
  error: undefined
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState: initialState,
  reducers: {},
});

export const {reducer: profileReducer} = profileSlice;
export const {actions: profileActions} = profileSlice;