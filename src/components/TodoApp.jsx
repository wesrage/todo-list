import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import VisibilityFilters from './VisibilityFilters';

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      filter: 'All',
    };
  }

  getVisibleTodos = () => ({
    Active: this.state.todos.filter(todo => !todo.completed),
    Completed: this.state.todos.filter(todo => todo.completed),
  }[this.state.filter] || this.state.todos);

  setVisibilityFilter = (filter) => {
    this.setState({ filter });
  }

  addTodo = (text) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          text,
          completed: false,
        },
      ],
    });
  }

  toggleTodo = (index) => {
    this.setState({
      todos: [
        ...this.state.todos.slice(0, index),
        Object.assign({}, this.state.todos[index], {
          completed: !this.state.todos[index].completed,
        }),
        ...this.state.todos.slice(index + 1),
      ],
    });
  }

  render() {
    return (
      <div>
        <TodoInput onAddTodo={this.addTodo}/>
        <TodoList
          todos={this.getVisibleTodos.call(this)}
          onToggleTodo={this.toggleTodo}
        />
        <VisibilityFilters onSetFilter={this.setVisibilityFilter}/>
      </div>
    );
  }
}

export default TodoApp;
