import React, {Component} from 'react';

class AddTodo extends Component{
  constructor(props){
    super(props)
  }

  onSubmit(e){
    e.preventDefault();
  }

  onChange(e){
    if(e.key === 'Enter'){
      this.props.addTodo(e.target.value);
      e.target.value = '';
    }
  }

  render(){
    return (
      <form
        className="addTodo"
        onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="add Todo"
          onKeyPress={this.onChange.bind(this)}/>
      </form>
    )
  }
}

export default AddTodo;
