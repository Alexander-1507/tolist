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
    <div className="mb-4">
      <div className="flex items-center">
        <p
          className="w-full"
          style={{ textDecoration: completed ? "line-through" : "none" }}
        >
          {text}
        </p>
        <button
          onClick={handleComplete}
          className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-grey border-grey hover:bg-grey"
        >
          {!completed ? <Check size={23} /> : <ArrowUUpLeft size={23} />}
        </button>
        <button
          onClick={handleRemove}
          className="flex-no-shrink p-2 ml-2 border-2 rounded text-grey border-grey hover:bg-grey"
        >
          <Trash size={23} />
        </button>
      </div>
      <span className={`mt-1 inline-block text-sm rounded-full px-2 py-1 ${
        priority === "Urgente" ? "bg-red-500 text-white" : 
        priority === "Normal" ? "bg-green-500 text-white" : 
        "bg-yellow-500 text-white"
      }`}>
        {priority}
      </span>
    </div>
  );
};

export default TodoItem;
