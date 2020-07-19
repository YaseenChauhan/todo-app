import React from 'react'
import { connect } from 'react-redux'
import { editTodo } from '../actions'

const EditTodo = ({dispatch, id, text, doneEditing}) => {
    let input 
    return(
        <input className="edit" 
            onKeyDown={ (e) =>{ 
                dispatch(editTodo(id, input.value))
                if(e.keyCode == 13)
                    doneEditing();
            } }
            defaultValue={text} 
            ref={value => input = value}
        />
    )
}

export default connect()(EditTodo)