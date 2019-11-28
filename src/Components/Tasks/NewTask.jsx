import React from 'react'

const NewTask = (props)  => (
    <div className="col s12">
        <h3 className="center-align">New Task</h3>
         <form onSubmit={props.addTask}>
            <div className="row">
                <div className="input-field col s6 push-s3">
                    <input type="text" className="validate" name="title" id="title" placeholder="Insert the name of the task"/>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6 push-s3">
                    <textarea placeholder="Insert brief description of the task" name="description" id="description" className="materialize-textarea"></textarea>
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