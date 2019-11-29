import React from 'react'
import User from './User';
import UpdateUser from './UpdateUser'
import {
    Route
} from 'react-router-dom'
var user = {}

const UserList = (props)=>(
    <div className="col s12">
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Type user</th>
                <th>Status</th>
                <th>Actions</th>
                <th>Task</th>
            </tr>
            </thead>
            <tbody>
                {
                    props.users.map(user => (
                        <User
                            key={user._id}
                            d={user._id}
                            id={user.id}
                            name={user.name}
                            email={user.email}
                            type={user.type}
                            status={user.status}
                            del={props.del}
                        />
                    ))
                }
            </tbody>
        </table>
    </div>
)

export default UserList
