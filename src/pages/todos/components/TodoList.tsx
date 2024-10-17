import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos?.todos);

  // Verifica si todos es un array
  if (!Array.isArray(todos)) {
    return <div>No hay tareas disponibles.</div>; // O algún mensaje que desees mostrar
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;
