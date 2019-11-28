import React from 'react'
import {
    Link
} from 'react-router-dom'

const Task = (props)  =>{ 
console.log(props)
return(
        <tr>
            <td className="center-align">{props.name}</td>
            <td className="center-align">{props.description}</td>
            <td className="center-align">{props.status}</td>
            <td className="center-align">
                <button className="btn waves-effect waves-light" onClick={()=>props.del(props.id)}><i className="mediun material-icons ">delete</i></button>
                <button  className="btn waves-effect waves-light"  style={ {margin: '5px'} }><i className="mediun material-icons ">edit</i></button>
                
                    <Link to="task/edit" className="btn waves-effect waves-light"><i className="mediun material-icons ">edit</i></Link>
    
            
            </td> 
        </tr>
)}

export default Task