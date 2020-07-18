import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
    let input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                dispatch(addTodo(input.value))
                input.value = ''
            }}>
            <input type="text" ref={value => input = value} />
            <button type="submit">
                Add Todo
            </button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)