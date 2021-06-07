import React from 'react'

export const TodoItem = (props) => {
    
    return (
        <div className='container my-3' >
            
            <h4>{props.todo.title}</h4>
            <p>{props.todo.desc}</p>
            <button onClick={()=>props.onDelete(props.todo)}>Delete Todo</button>
            <hr className='my-3'/>

        </div>
    )
}
