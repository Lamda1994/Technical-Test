import React from 'react'
import Task from './Task';

const TaskList = (props)=>(
    <div className="col s12">
        <h3 className="center-align">List of Task</h3>
        <table>
            <thead>
            <tr>
                <th>Task</th>
                <th>Description</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {
                    props.tasks.map(task => (
                        <Task 
                            key={task.id}
                            name={task.name}
                            description={task.description}
                            status={task.status}
                        />
                    ))
                }                      
            </tbody>
        </table>
    </div>
)

export default TaskList