import React from 'react'
import  {Todoitem}  from './TodoItem'

export const Todos = (props) => {
    return (
        <div className="container my-4" >
            <h1 className=" my-3">Todos List</h1>
            {props.todos.length === 0 ?"No todos to Display"
            : props.todos.map((t)=>{
                return <Todoitem todo={t} key={t.sno} onDelete={props.onDelete}/>
            })}
           
            
        </div>
    )
}
