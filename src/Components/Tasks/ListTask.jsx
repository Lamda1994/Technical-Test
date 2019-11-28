import React from 'react'
import Task from './Task';

const TaskList = (props)=>(
    <div className="col s12">
        <table>
            <thead>
            <tr>
                <th className="center-align">Task</th>
                <th className="center-align">Description</th>
                <th className="center-align">Status</th>
                <th className="center-align">Actions</th>
            </tr>
            </thead>
            <tbody>
                {                    
                    props.tasks.map(task => (
                        <Task
                            key={task._id}
                            id={task._id}
                            name={task.title}
                            description={task.description}
                            status={task.status}
                            del={props.del}
                            mod={props.mod}
                        />
                    ))
                }
            </tbody>
        </table>
    </div>
)

export default TaskList
