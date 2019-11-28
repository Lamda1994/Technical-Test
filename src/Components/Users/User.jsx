import React from 'react'

const User = (props)  =>(
    <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>{props.type}</td>
        <td>{props.status}</td>  
        <td> 
            <button className="waves-effect waves-light btn white-text" onClick={()=>props.del(props.d)}><i className="mediun material-icons ">delete</i></button>
            <button className="waves-effect waves-light btn white-text" style={ {margin: '5px'} }><i className="mediun material-icons ">edit</i></button>
        </td> 
        <td><button className="waves-effect waves-light btn white-text"><i className="mediun material-icons ">add</i></button></td>     
    </tr>
)

export default User