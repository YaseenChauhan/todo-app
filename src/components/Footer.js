import React from 'react'

const Footer = ({addedTodos}) => {
    
    return(
        <div>
            <h3>Currently added tasks: {addedTodos} </h3>
            <div>• Check the box to complete a task.</div>
            <div>• Click on a task to edit it</div>
        </div>
    )
}

export default Footer