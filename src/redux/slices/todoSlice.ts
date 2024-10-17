import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, TodoState } from '../../models';

interface AddTodoPayload {
  text: string;
  priority: string;
}

const initialState: TodoState = {
  todos: JSON.parse(localStorage.getItem('todos') || '[]'), // Cargar desde localStorage
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<AddTodoPayload>) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload.text,
        priority: action.payload.priority,
        completed: false,
      };
      state.todos.push(newTodo);
      localStorage.setItem('todos', JSON.stringify(state.todos)); // Guardar en localStorage
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem('todos', JSON.stringify(state.todos)); // Actualizar en localStorage
      }
    },
    removeTodo: (state, action: PayloadAction<number>) =>  {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
  localStorage.setItem('todos', JSON.stringify(state.todos)); // Actualizar en localStorage
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
