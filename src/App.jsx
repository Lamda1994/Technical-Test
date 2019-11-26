import React, {Component} from 'react'
import {render} from 'react-dom'

class App extends Component{
    render(){
        return(
            <div>
                <nav>
                    <div className="nav-wrapper">
                    <a href="/" className="brand-logo">TDL-Task</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/api/task">Task</a></li>
                        <li><a href="/">Users</a></li>
                        <li><a href="/">Sing Out</a></li>
                    </ul>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col s7"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App