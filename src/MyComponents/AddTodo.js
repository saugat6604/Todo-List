
import React, {useState} from 'react';

export const AddTodo = ({addTodo}) => {
    const [title,setTitle] = useState("");
    const [desc, setDesc]= useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("tittle or description canot be blank");
        }
        addTodo(title,desc);



    }
    return (
        <div classNameName="container">
            <h3>Add Todo</h3>
            <form onSubmit={submit}>
                <div classNameName="mb-3">
                    <label htmlFor="title" className="form-label">Todo title</label>
                    <input type="text"  value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
                </div>
               
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    )
}
