import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TodoItemType = {
  id: number;
  title: string;
  completed: boolean;
};

export interface TodoState {
  todos: TodoItemType[];
  total: number;
  active: number;
}

const initialState: TodoState = {
  todos: [],
  total: 0,
  active: 0,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      state.total++;
      state.active++;
    },
    removeTodo: (state, action: PayloadAction<TodoItemType>) => {},
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
      state.total = filtered.length;
      state.active = filtered.length;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, clearCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
