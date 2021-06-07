import React from 'react'
import { TodoItem } from './TodoItem'

export const MatchingTodos = (props) => {

    return (
        <div>
            <h3 className='container my-3'>Matching Todos</h3>
            {props.matchingTodos.length===0 ? 
            <p className='container my-3'>No Todos to display!!! </p>: 
            props.matchingTodos.map(item => <TodoItem key={item.sno} todo={item} onDelete={props.onDelete}/>)}
        </div>
    )
}