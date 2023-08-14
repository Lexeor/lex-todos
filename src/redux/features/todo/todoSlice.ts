import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TodoItemType = {
  id: number;
  title: string;
  completed: boolean;
};

export interface TodoState {
  todos: TodoItemType[] | null;
}

const initialState: TodoState = {
  todos: null,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItemType>) => {},
    removeTodo: (state, action: PayloadAction<TodoItemType>) => {},
    toggleTodo: (state, action: PayloadAction<TodoItemType>) => {},
    clearCompleted: (state) => {},
  },
});

export const { addTodo, removeTodo, toggleTodo, clearCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
