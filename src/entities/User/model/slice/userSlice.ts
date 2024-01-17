import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, UserSchema } from 'entities/User/model/types/userSchema';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

const initialState: UserSchema = {
  authData: undefined,
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem('user');
      state.authData = user ? JSON.parse(user) : undefined;
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    }
  },
});

// Action creators are generated for each case reducer function
export const {actions: userActions} = userSlice;
export const {reducer: userReducer} = userSlice;