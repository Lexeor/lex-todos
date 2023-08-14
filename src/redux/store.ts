// eslint-disable-next-line
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import todoReducer from './features/todo/todoSlice';
import filterReducer from './features/filter/filterSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    filter: filterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom useSelector and useDuspatch hooks for the store
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
