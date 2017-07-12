import React, { Component } from 'react';
import AddTodo from './addTodo';
import TodoList from './todolist'
import axios from 'axios'

class TODOApp extends Component{
  constructor(props){
    super(props)
    this.state={
      todos:[]
    }
  }

  componentWillMount(){
    axios.get('/todo')
    .then((res)=>{
        this.setState(res.data)
    })
  }

  onAdd(todo){
    this.state.todos.push({"title":todo,"done":false});
    this.setState({todos:this.state.todos})
  }

  onComplete(item){
    this.state.todos.map(todo=>{
      if(todo.title === item.title){
        todo.done = !todo.done
      }
      return todo;
    })
    this.setState({todos:this.state.todos})
  }

  render(){
    return (
      <div className="todo-app">
        <header>
            <h1>TODO APP - Reactjs</h1>
        </header>
        <AddTodo
          addTodo={this.onAdd.bind(this)}/>
        <TodoList
          todos={this.state.todos}
          todoComplete={this.onComplete.bind(this)} />
      </div>
    )
  }
}


export default TODOApp;
