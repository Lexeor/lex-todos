import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type StateType = {
  current: string;
};

const initialState: StateType = {
  current: 'All',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.current = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
