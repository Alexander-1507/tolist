import React from 'react';
import AddTodo from './pages/todos/components/AddTodo';
import TodoList from './pages/todos/components/TodoList';

const App: React.FC = () => {
    return (
        <div className="App h-screen w-full bg-teal-lightest font-sans flex flex-col items-center">
            
            {}
            <div className="absolute top-4 left-4">
                <img 
                    src="/assets/logo.jpg" 
                    alt="Logo"
                    className="h-20" 
                />
            </div>

           
            <div className="flex justify-center items-center w-full flex-grow mt-20">
                <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-2xl">
                    <div className="mb-4">
                        <h1 className="text-lg text-center font-bold">Todo List</h1>
                        <AddTodo />
                    </div>

                   
                    <div className="max-h-96 overflow-y-auto">
                        <TodoList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;




