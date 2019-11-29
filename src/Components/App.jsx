import React, {Component} from 'react'
import TaskList from './Tasks/ListTask';
import NewTask from './Tasks/NewTask';
import UpdateTask from './Tasks/UpdateTask';
import ListUser from './Users/ListUser';
import UpdateUser from './Users/UpdateUser'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import NewUser from './Users/NewUser';

//import {render} from 'react-dom'

class App extends Component{
    constructor(...props){
        super(...props)

        this.state = {
            tasks: [],
            users:[],
            msj: "",
            update:{
                id:"",
                title:"",
                description:"",
                status:""
            },
            user:{}
        }
        this.addNewTask =  this.addNewTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.addNewUser = this.addNewUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.updateUser = this.updateUser.bind(this)
        this.updateTask = this.updateTask.bind(this)
    }

    componentDidMount(){
        this.loadTasks()
        this.loadUsers()
    }

    loadUsers(){
        fetch('http://localhost:4000/api/user')
            .then(res => res.json())
            .then(data => {
                this.setState({users: data})
               // console.log(this.state)
            })
            .catch(err => console.error(err))
    }

    loadTasks(){
        fetch('http://localhost:4000/api/task')
            .then(res => res.json())
            .then(data => {
                this.setState({tasks: data})
               // console.log(this.state)
            })
            .catch(err => console.error(err))
    }

    addNewTask(event){
        event.preventDefault()

        let form = event.target,
        task = {
            title: form.title.value,
            description: form.description.value
        }

        console.log(task)
        let config = {
               method: "POST",
               headers: {
                   'Content-Type':'application/json',
                   'Accept':'application/json'
               },
               body: JSON.stringify(task),
               mode: 'cors',
               cache: 'default'
        }
        fetch('http://localhost:4000/api/task', config)
            .then(res => res.json())
            .then(data => {
                this.loadTasks()
                console.log(data)
                this.setState({msj:"Task Saved"})
                setTimeout(()=>this.setState({msj:""}),5000);
            })
            .catch(err => console.error(err))
        form.reset()
    }

    addNewUser(event){
        event.preventDefault()

        let form = event.target,
        user = {
            id:form.id.value,
            name:form.name.value,
            email:form.email.value,
            type:form.type.value,
            password: form.pass.value
        }

        console.log(user)
        let config = {
               method: "POST",
               headers: {
                   'Content-Type':'application/json',
                   'Accept':'application/json'
               },
               body: JSON.stringify(user),
               mode: 'cors',
               cache: 'default'
        }
        fetch('http://localhost:4000/api/user', config)
            .then(res => res.json())
            .then(data => {
                this.loadUsers()
                console.log(data)
                this.setState({msj:"Task Saved"})
                setTimeout(()=>this.setState({msj:""}),5000);
            })
            .catch(err => console.error(err))
        form.reset()
    }


    deleteTask(id){
        let config = {
                method: "DELETE",
                mode: 'cors',
                cache: 'default'
        }

        let url = 'http://localhost:4000/api/task/'+id
        fetch(url, config)
            .then(res => res.json())
            .then(data => {
                this.loadTasks()
                console.log(data)
            })
            .catch(err => console.error(err))
    }

    deleteUser(id){
        let config = {
                method: "DELETE",
                mode: 'cors',
                cache: 'default'
        }

        let url = 'http://localhost:4000/api/user/'+id
        fetch(url, config)
            .then(res => res.json())
            .then(data => {
                this.loadUsers()
                console.log(data)
            })
            .catch(err => console.error(err))
    }

    updateTask(props){
        let {id, title, description, status} = props
        let data = {id, title, description, status}
        this.setState({update: data})
        console.log(this.state)
    }

    updateUser(props){
      this.setState({user: props})
      console.log(this.state)
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
                                <Link to="/user">Users</Link>
                            </li>
                            <li>
                                <Link to="/task/edit">Users</Link>
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
                                <Switch>
                                    <Route path="/user/edit">
                                      <UpdateUser user={this.user} />
                                    </Route>
                                    <Route path="/task/edit">
                                        <UpdateTask
                                            key={this.state.update.id}
                                            id={this.state.update.id}
                                            name={this.state.update.title}
                                            description={this.state.update.description}
                                            status={this.state.update.status}
                                        />
                                    </Route>
                                    <Route path="/task/new">
                                        <NewTask addTask={this.addNewTask} msj={this.state.msj}></NewTask>
                                    </Route>
                                    <Route path="/task">
                                        <div>
                                            <h3 className="center-align">List of Task</h3>
                                            <Link to="/task/new" className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">add</i></Link>
                                            <TaskList tasks={this.state.tasks} del={this.deleteTask} mod={this.updateTask}/>
                                        </div>
                                    </Route>
                                    <Route path="/user/new">
                                        <NewUser addUser={this.addNewUser} msj={this.state.msj}></NewUser>
                                    </Route>
                                    <Route path="/user">
                                        <div>
                                            <h3 className="center-align">List of Users</h3>
                                            <Link to="/user/new" className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">add</i></Link>
                                            <ListUser users={this.state.users} del={this.deleteUser} />
                                        </div>
                                    </Route>

                                </Switch>

                            </div>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App
