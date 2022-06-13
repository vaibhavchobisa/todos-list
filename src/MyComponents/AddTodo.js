import React, { useState } from 'react';

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be empty!");
        }
        else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className='container my-3'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter Todo Title"
                        value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input type="text" className="form-control" id="desc" placeholder="Enter Todo Description"
                        value={desc} onChange={(e) => setDesc(e.target.value)} />
                </div>
                <div className='my-3'>
                    <button type="submit" className="btn btn-success btn-sm">Submit</button>
                </div>
            </form>
        </div>
    )
}
