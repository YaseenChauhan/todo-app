import React from 'react'
import PropTypes from 'prop-types'
import Todo from './ToDo'
import Footer from '../components/Footer'

const TodoList = ({ todos, toggleTodo }) => (
  <div>
    {console.log(todos)}
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onChange={() => toggleTodo(todo.id)}
      />
    )}
    <Footer addedTodos={todos.length} />
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList