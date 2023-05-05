import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      return { ...state, count: state.count + 1 };
    },
    algo: (state, action) => {
      return { ...state, count: state.count + action.payload };
    },

    increment_5: state => {
      return { ...state, count: state.count + 5 };
    },
    decrement: state => {
      return { ...state, count: state.count - 1 };
    },
    decrement_5: state => {
      return { ...state, count: state.count - 5 };
    },
    divide: state => {
      return { ...state, count: state.count / 2 };
    },
    multiply: state => {
      return { ...state, count: state.count * 2 };
    },
    reset: () => {
      return initialState;
    },
  },
});

export const {
  increment,
  increment_5,
  decrement,
  decrement_5,
  multiply,
  divide,
  reset,
  algo,
} = counterSlice.actions;

export default counterSlice.reducer;
