import React from 'react'

const NewUser= (props)=>(
    <div className="col s12">
        <h3 className="center-align">New User</h3>
        <form onSubmit={props.addUser}>
            <div className="row">
                <div className="input-field col s6 push-s3">
                    <input type="text" className="validate" name="id" placeholder="Enter your identification number"/>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s6 push-s3">
                    <input type="text" className="validate" name="name" placeholder="Enter your name"/>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s6 push-s3">
                    <input type="text" className="validate" name="email" placeholder="Enter your email"/>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s6 push-s3">
                    <input type="password" className="validate" name="pass" placeholder="Enter your password"/>
                </div>
            </div>

            <div className="row ">
               
                <div className="input-field col s6 push-s3">
                    <select name="type">
                        <option value="Admin">Administrator</option>
                        <option value="Normal">Normal</option>
                    </select>
                <label>User type</label>
                
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

export default NewUser