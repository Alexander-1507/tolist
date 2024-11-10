import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos?.todos);

  if (!Array.isArray(todos)) {
    return <div>No hay tareas disponibles.</div>; 
  }

  return (
    <div className="max-h-96 overflow-y-auto">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;

