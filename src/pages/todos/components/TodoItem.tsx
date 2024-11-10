import { ArrowUUpLeft, Check, Trash } from "@phosphor-icons/react"; 
import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../../../redux/slices/todoSlice"; 

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  priority: string; 
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, priority }) => {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(toggleTodo(id));
  };

  const handleRemove = () => {
    dispatch(removeTodo(id)); 
  };

  return (
    <div className="mb-4" data-testid="todoItem">
      <div className="flex items-center">
        {/* Tarea */}
        <p
          className="w-full text-lg"
          style={{ textDecoration: completed ? "line-through" : "none" }}
          data-testid="todoText" // data-testid para el texto de la tarea
        >
          {text}
        </p>

        {/* Botón de completar */}
        <button
          onClick={handleComplete}
          className="flex-no-shrink p-1 ml-2 border-2 rounded text-grey border-grey hover:bg-grey"
          data-testid="completeButton" // data-testid para el botón de completar
        >
          {!completed ? <Check size={20} /> : <ArrowUUpLeft size={20} />}
        </button>

        {/* Botón de eliminar */}
        <button
          onClick={handleRemove}
          className="flex-no-shrink p-1 ml-2 border-2 rounded text-grey border-grey hover:bg-grey"
          data-testid="removeButton" // data-testid para el botón de eliminar
        >
          <Trash size={20} />
        </button>
      </div>

      {/* Prioridad de la tarea */}
      <span
        className={`ml-2 font-bold border border-gray-400 rounded ${ 
          priority === "Urgente" ? "bg-red-500 text-white" : 
          priority === "Normal" ? "bg-green-500 text-white" : 
          "bg-yellow-500 text-white"
        }`}
        style={{ fontSize: '0.5rem', marginTop: '0', display: 'inline-block', textAlign: 'left', padding: '0.2rem 0.5rem' }}
        data-testid="priorityLabel" // data-testid para la etiqueta de prioridad
      >
        {priority === "Nada de Prioridad" ? "Baja" : priority === "Normal" ? "Media" : "Alta"}
      </span>
    </div>
  );
};

export default TodoItem;





