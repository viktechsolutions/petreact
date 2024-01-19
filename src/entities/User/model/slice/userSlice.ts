import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from 'entities/User';

const initialState: UserSchema = {};
export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.authData = action.payload;
    }
  }
});

export const {actions: userActions} = userSlice;

export const {reducer: userReducer} = userSlice;