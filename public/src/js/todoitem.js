import React, {Component} from 'react';

import styles from '../css/todoitem.css';

class TodoItem extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <li className={styles.todoItem} key={this.props.todo.title}>
        <input type="checkbox" id={this.props.todo.title}
          checked={this.props.todo.done}
          onChange={this.props.onTodoComplete.bind(this, this.props.todo)} />
          <label htmlFor={this.props.todo.title}>{this.props.todo.title}</label>
      </li>
    )
  }
}

export default TodoItem;
