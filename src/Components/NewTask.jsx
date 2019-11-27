import React from 'react'

const NewTask = ()  => (
    <div>
         <form className="col s12">
            <div className="row">
                <div className="input-field col s6">
                    <input type="text" className="validate" id="name" placeholder="Insert the name of the task"/>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6">
                    <textarea placeholder="Insert brief description of the task" id="Description" className="materialize-textarea"></textarea>
                </div>
            </div>
            <div className="row">
                <button className="btn waves-effect waves-light" type="submit" name="action">Send</button>
            </div>
        </form>
    </div>
)

export default NewTask