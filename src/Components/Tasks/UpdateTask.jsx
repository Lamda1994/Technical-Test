import React from 'react'

const NewTask = (props)  => (
    <div className="col s12">
        <h3 className="center-align">New Task</h3>
         <form onSubmit={props.modTask}>
            <div className="row">
                <div className="input-field col s6 push-s3">
                    <input type="text" className="validate" name="title" id="title" value={props.title}/>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6 push-s3">
                    <textarea name="description"  className="materialize-textarea">{props.description}</textarea>
                </div>
            </div>
            <div className="row ">               
                <div className="input-field col s6 push-s3">
                    <select name="type">
                        <option value="Open">Open</option>
                        <option value="In-Progress">In-Progress</option>
                        <option value="Completed,">Completed</option>
                        <option value="Archived">Archived</option>
                    </select>
                <label>Task status</label>                
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6 push-s3">
                    <input type="text" className="validate" name="title" id="title" value={props.status} readOnly/>
                </div>
            </div>
            <div className="row">
                <h6 className="center-align green-text accent-4">{props.msj}</h6>
            </div>
            <div className="row">
                <div className="input-field col s4 push-s3">
                    <button className="btn waves-effect waves-light" type="submit" name="action">Send</button>
                </div>
            </div>
        </form>
    </div>
)

export default NewTask