import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUserName } from 'features/AuthByUserName/model/services/loginByUserName/loginByUserName';
import { LoginSchema } from 'features/AuthByUserName/model/types/loginSchema';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
  error: undefined,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUserName.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUserName.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginByUserName.rejected, (state, action) => {
        state.isLoading = false;
        // @ts-ignore
        state.error = action.payload;
      });
  }
});

// Action creators are generated for each case reducer function
export const {actions: loginActions} = loginSlice;
export const {reducer: loginReducer} = loginSlice;