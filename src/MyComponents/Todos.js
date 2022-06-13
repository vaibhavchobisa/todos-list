import React from 'react';
import { TodoItem } from "../MyComponents/TodoItem";

export const Todos = (props) => {
    return (
        <div className='container my-5'>
            <h4 className='my-3'>Todos List</h4>
            {props.todos.length === 0 ? <h5>No todos to display</h5> :
                props.todos.map(todo => {
                    return (
                        <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                        // {/* Why have we added 'key' to rectify an error on console?? */ }
                    )
                })
            }
        </div>
    )
}
