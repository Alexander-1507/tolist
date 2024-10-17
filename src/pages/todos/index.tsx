import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function Todo() {
  return (
    <div className="App">
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-2xl">
          <div className="mb-4">
            <h1 className="text-lg text-center font-bold">Todo List</h1>
            <AddTodo></AddTodo>
          </div>
          <div>
            <TodoList></TodoList>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo