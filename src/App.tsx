import React from 'react';
import AddTodo from './pages/todos/components/AddTodo';
import TodoList from './pages/todos/components/TodoList';

const App: React.FC = () => {
    return (
        <div className="App h-screen w-full flex items-start justify-center bg-teal-lightest font-sans"> {/* Cambiar items-center a items-start */}
            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-2xl">
                <div className="mb-4">
                    <h1 className="text-lg text-center font-bold">Todo List</h1>
                    <AddTodo />
                </div>
                <div>
                    <TodoList />
                </div>
            </div>
        </div>
    );
};

export default App;

