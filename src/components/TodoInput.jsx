import React, { Component, PropTypes } from 'react';

class TodoInput extends Component {
  addTodo = () => {
    this.props.onAddTodo(this.input.value);
    this.input.value = '';
    this.input.focus();
  }

  render() {
    return (
      <div>
        <input ref={c => this.input = c}/>
        <button onClick={this.addTodo}>Add Todo</button>
      </div>
    );
  }
}

TodoInput.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default TodoInput;
