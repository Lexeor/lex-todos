import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TodoItemType = {
  id: number;
  title: string;
  completed: boolean;
};

export interface TodoState {
  todos: TodoItemType[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<TodoItemType>) => {},
    toggleTodo: (state, action: PayloadAction<TodoItemType>) => {},
    clearCompleted: (state) => {},
  },
});

export const { addTodo, removeTodo, toggleTodo, clearCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
