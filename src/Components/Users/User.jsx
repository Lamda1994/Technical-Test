import React from 'react'
import {
    Link
} from 'react-router-dom'

const User = (props)  =>{
  let {id, name, email, type, status} = props
  let data = {id, name, email, type, status}

  return(
    <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>{props.type}</td>
        <td>{props.status}</td>
        <td>
            <button className="waves-effect waves-light btn white-text" onClick={()=>props.del(props.d)}><i className="mediun material-icons ">delete</i></button>
            <button className="waves-effect waves-light btn white-text" style={ {margin: '5px'} } >
              <a href="/user/edit">
                <i className="mediun material-icons ">edit</i>
              </a>
            </button>
        </td>
        <td><button className="waves-effect waves-light btn white-text"><i className="mediun material-icons ">add</i></button></td>
    </tr>
  )
}
export default User
