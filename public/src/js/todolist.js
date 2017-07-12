import React, { Component } from 'react';
import TodoItem from './todoitem'

class TodoList extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <ul className="todo-list">
        {this.props.todos.map( todo => <TodoItem todo={todo} onTodoComplete={this.props.todoComplete.bind(this)}/>)}
      </ul>
    )
  }
}

export default TodoList;
