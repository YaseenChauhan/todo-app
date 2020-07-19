import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
    let [input, setInput] = useState('')
    const [disabled, setDisabled] = useState(true)
    useEffect(() => {
        if (input) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [input]);
    return (
        <div className="add-todo-container">
            <form onSubmit={e => {
                e.preventDefault();
                dispatch(addTodo(input))
                localStorage.setItem('todo', input) //setting in local storage
                setInput('')
            }}>
            <input 
                type="text" 
                onChange={ e => {
                    setInput(e.target.value)
                    
                }} 
                value={input} 
                className="add-todo-input" 
                placeholder="what to do?" 
            />
            <button type="submit" className="add-todo" disabled={disabled}>
                Add Todo
            </button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)