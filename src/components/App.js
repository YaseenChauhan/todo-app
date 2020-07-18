import React from 'react'
import AddTodo from '../containers/AddTodo'
import ToDoList from '../containers/ToDoList'


const App = () => (
  <div className="todo-app-container">
    <h1>ToDo App</h1>
    <AddTodo />
    <ToDoList />
  </div>
)

export default App