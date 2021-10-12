import React from 'react'
import  {Todoitem}  from './TodoItem'

export const Todos = (props) => {
    return (
        <div className="container" >
            <h1 className="text-center my-3">Todos List</h1>
            {props.todos.map((t)=>{
                return <Todoitem todo={t} key={t.sno} onDelete={props.onDelete}/>
            })}
            
        </div>
    )
}
