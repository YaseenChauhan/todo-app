import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

const Todo = ({ onClick, completed, text }) => (
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
		<FontAwesomeIcon icon={faPencilAlt} />
		<FontAwesomeIcon icon={faTrashAlt} />
    </div>
  </div>
)

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
}

export default Todo