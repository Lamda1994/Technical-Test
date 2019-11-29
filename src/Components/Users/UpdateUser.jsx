import React from 'react'

const UpdateTask = (props)  => (
    <div className="col s12">
        <h3 className="center-align">Update User</h3>
         <form onSubmit={props.modUser}>
            <div className="row">
                <div className="input-field col s6 push-s3">
                    <input type="text" className="validate" name="id" defaultValue={props.id}/>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6 push-s3">
                    <input type="text" className="validate" name="name" defaultValue={props.name}/>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6 push-s3">
                    <input type="text" className="validate" name="email" defaultValue={props.email}/>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6 push-s3">
                    <input type="text" className="validate" name="pass" defaultValue={props.pass}/>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6 push-s3">
                    <input type="text" className="validate" name="status" defaultValue={props.status} />
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

export default UpdateTask
