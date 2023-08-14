import { createSlice } from '@reduxjs/toolkit';

type TodoItem = {
  id: number;
  title: string;
  completed: boolean;
};

export interface TodoState {
  todos: TodoItem[] | null;
}

const initialState: TodoState = {
  todos: null,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {},
    removeTodo: (state, action) => {},
    toggleTodo: (state) => {},
    clearCompleted: (state) => {},
  },
});

export const { addTodo, removeTodo, toggleTodo, clearCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;