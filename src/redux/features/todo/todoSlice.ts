import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../utils/fetch-facade';

export type TodoItemType = {
  id: number;
  title: string;
  completed: boolean;
};

export interface TodoState {
  loading: boolean;
  todos: TodoItemType[];
  active: number;
  error: string | undefined;
}

const initialState: TodoState = {
  loading: true,
  todos: [],
  active: 0,
  error: '',
};

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const lsData = localStorage.getItem('lex-todos');

  if (lsData === null) {
    const res = await axios.get('/users/1/todos?_limit=5');
    return res.data;
  } else {
    return JSON.parse(lsData);
  }
});

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem('lex-todos', JSON.stringify(state.todos));
      state.active++;
    },
    editTodo: (state, action: PayloadAction<{ id: number; title: string }>) => {
      const todos = state.todos;

      todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title;
          return todo;
        }
        return todo;
      });

      localStorage.setItem('lex-todos', JSON.stringify(todos));
      state.todos = todos;
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      let isCompleted = false;
      const filtered = state.todos.filter((item) => {
        // Check if deleting item is completed
        if (item.id === action.payload) isCompleted = item.completed;

        return item.id !== action.payload;
      });

      state.todos = filtered;
      localStorage.setItem('lex-todos', JSON.stringify(filtered));
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
      localStorage.setItem('lex-todos', JSON.stringify(modified));
    },
    clearCompleted: (state) => {
      const filtered = state.todos.filter((todo) => !todo.completed);
      state.todos = filtered;
      localStorage.setItem('lex-todos', JSON.stringify(filtered));
      state.active = filtered.length;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchTodos.fulfilled,
      (state, action: PayloadAction<TodoItemType[]>) => {
        state.loading = false;
        state.todos = action.payload;
        localStorage.setItem('lex-todos', JSON.stringify(action.payload));
        state.error = '';
        state.active = action.payload.filter((item) => !item.completed).length;
      }
    );
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.loading = false;
      state.todos = [];
      state.error = action.error.message;
    });
  },
});

export const { addTodo, editTodo, removeTodo, toggleTodo, clearCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
