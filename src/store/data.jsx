import {createSlice} from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    name: '',
    number: '',
  },
  reducers: {
    addName: (state, action) => {
      state.name = action.payload;
    },
    addNumber: (state, action) => {
      state.number = action.payload;
    },
  },
});

export const {addName, addNumber} = dataSlice.actions;

export default dataSlice;
