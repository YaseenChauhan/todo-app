import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
    let input

    return (
        <div className="add-todo-container">
            <form onSubmit={e => {
                e.preventDefault();
                dispatch(addTodo(input.value))
                input.value = ''
            }}>
            <input type="text" ref={value => input = value} className="add-todo-input" />
            <button type="submit" className="add-todo">
                Add Todo
            </button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)