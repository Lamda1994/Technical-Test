import React, {Component} from 'react'
import TaskList from './ListTask';
import {
    BrowserRouter as Router,
    Route,
    Link,
    
} from 'react-router-dom'
import NewTask from './NewTask';
import Axios from 'axios';
//import {render} from 'react-dom'

class App extends Component{
    constructor(...props){
        super(...props)

        this.state = {
            tasks: []
        }

    }

    componentDidMount(){
        var config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        }
        Axios.get('http://localhost:4000/api/task', config)
            .then(res => res.json())
            .then(data => {
                this.setState({tasks: data})
                console.log(this.state)
            })
            .catch(err => console.error(err))
    }


    render(){
        return(
            <div>
                <Router>
                    <nav>
                        <div className="nav-wrapper red darken-4">
                        <a href="/" className="brand-logo">TDL-Task</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li>
                                <Link to="/task">Tasks</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                            <li>
                                <a href="/">Sing Out</a>
                            </li>
                        </ul>
                        </div>
                    </nav>                  
                    <div >
                        <div className="row">                        
                            <div className="col s8 push-s2"> 
                            <Route path="/task">                        
                                <TaskList tasks={this.state.tasks} />
                            </Route>
                            <Route path="/task/new">                          
                                <NewTask></NewTask>
                            </Route>
                            </div>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App