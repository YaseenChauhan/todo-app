import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const DeleteTodo = ({ dispatch, id }) => {
    return (
        <FontAwesomeIcon icon={faTrashAlt} onClick={
			e => {
				e.preventDefault()
				dispatch(deleteTodo(id))
			}
		} />
    )
}

export default connect()(DeleteTodo)