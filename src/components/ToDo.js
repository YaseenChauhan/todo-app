import React from 'react'
import PropTypes from 'prop-types'
import DeleteTodo from '../containers/RemoveTodo'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
// import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

const Todo = ({ onClick, completed, text, id }) => (
  <div className="todo">
    <div
		onClick={onClick}
		style={{
			textDecoration: completed ? 'line-through' : 'none'
		}}
		className='todo-item'
    >
      	{text}
    </div>
    <div>
		{/* <FontAwesomeIcon icon={faPencilAlt} />
		<FontAwesomeIcon icon={faTrashAlt} onClick={
			e => {
				e.preventDefault()
				dispatch(deleteTodo(id))
			}
		} /> */}
		<DeleteTodo id={id} />
    </div>
  </div>
)

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
}

export default Todo