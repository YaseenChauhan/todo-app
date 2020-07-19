let id = 0

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: id++,
    text
})

export const deleteTodo = id => ({
    type: 'DELETE_TODO',
    id
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})
export const editTodo = (id, text) => ({
    type: 'EDIT_TODO',
    payload : {
        id,
        text
    }
})
