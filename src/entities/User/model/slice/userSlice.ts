import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, UserSchema } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

const initialState: UserSchema = {};
export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      state.authData = undefined;
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    }
  }
});

export const {actions: userActions} = userSlice;

export const {reducer: userReducer} = userSlice;