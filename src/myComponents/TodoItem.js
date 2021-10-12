import React from 'react'

export const Todoitem = ({todo,onDelete}) => {
    return (
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.Desc}</p>
            <button className="btn btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    )
}
