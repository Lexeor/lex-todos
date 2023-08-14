import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TodoItemType = {
  id: number;
  title: string;
  completed: boolean;
};

export interface TodoState {
  todos: TodoItemType[];
  active: number;
}

const initialState: TodoState = {
  todos: [],
  active: 0,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      state.active++;
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      let isCompleted = false;
      const filtered = state.todos.filter((item) => {
        // Check if deleting item is completed
        if (item.id === action.payload) isCompleted = item.completed;

        return item.id !== action.payload;
      });

      state.todos = filtered;
      if (!isCompleted) state.active--;
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const modified = state.todos.map((item) => {
        if (item.id === action.payload) {
          // Change 'active' couter
          if (item.completed) {
            state.active++;
          } else {
            state.active--;
          }
          item.completed = !item.completed;
        }
        return item;
      });

      state.todos = modified;
    },
    clearCompleted: (state) => {
      const filtered = state.todos.filter((todo) => !todo.completed);
      state.todos = filtered;
      state.active = filtered.length;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, clearCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
