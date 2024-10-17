import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/slices/todoSlice";

const AddTodo: React.FC = () => {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && priority) {
      dispatch(addTodo({ text, priority }));
      setText("");
      setPriority("");
    } else {
      alert("Por favor, ingresa una tarea y selecciona una prioridad.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mt-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="appearance-none border rounded w-3/4 py-2 px-3 mr-2" // Cambiado a w-3/4 para hacerlo más ancho
        placeholder="New Task"
        required
        name="Nombre_tarea"
      />

      <div className="relative mr-2">
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="bg-gray-800 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        >
          <option value="">---</option>
          <option value="Urgente">Muy Prioritario</option>
          <option value="Normal">Prioridad Media</option>
          <option value="Nada de Prioridad">Prioridad Baja</option>
        </select>
      </div>

      <button
        type="submit"
        data-testid="addButton"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5"
        disabled={!text.trim() || !priority}
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
