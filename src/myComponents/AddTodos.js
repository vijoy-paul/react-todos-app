import React from 'react'

export const AddTodos = () => {
    return (
        
            <form className="container my-4">
                <h1>Add a todo</h1>
                <div class="mb-3">
                    <label for="title" class="form-label">Todo Title</label>
                    <input type="text" class="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="desc" class="form-label">Todo Description</label>
                    <input type="text" class="form-control" id="desc"/>
                </div>
                <button type="submit" class="btn btn-primary">Add Todo</button>
            </form>

    )
}
