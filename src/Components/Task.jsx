import React from 'react'

const Task = (props)  => (
    <tr>
        <td>{props.name}</td>
        <td>{props.description}</td>
        <td>{props.status}</td>
        <td></td>
    </tr>
)

export default Task