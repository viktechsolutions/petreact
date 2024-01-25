import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IUser, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUserNameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<IUser, LoginByUserNameProps, ThunkConfig<string>>(
  'login/fetchByUserName',
  async (authData, {extra, dispatch, rejectWithValue}) => {
    try {
      const response = await extra.api.post<IUser>('/login', authData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      extra.navigate('/about');
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('Введите корректные данные');
    }
  }
);
