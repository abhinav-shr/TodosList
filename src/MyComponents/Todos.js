import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    
    return (
        <div>
            <h3 className='container my-3'>Todos List</h3>
            {props.todos.length===0 ? 
            <p className='container my-3'>No Todos to display!!! </p>: 
            props.todos.map(item => <TodoItem key={item.sno} todo={item} onDelete={props.onDelete}/>)}

        </div>
    )
}
