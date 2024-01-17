import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter';

const initialState: CounterSchema = {
  value: 0,
};

export const templateNameSlice = createSlice({
  name: 'templateName',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {actions: counterActions} = templateNameSlice;
export const {reducer: counterReducer} = templateNameSlice;