var React = require('react');
var TodoInput = require('./TodoInput');
var TodoList = require('./TodoList');
var VisibilityFilters = require('./VisibilityFilters');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [],
      filter: 'All'
    };
  },
  addTodo: function(text) {
    this.setState({
      todos: this.state.todos.concat({
        text: text,
        completed: false
      })
    });
  },
  toggleTodo: function(index) {
    var todos = [].concat(this.state.todos);
    todos[index].completed = !todos[index].completed;
    this.setState({
      todos: todos
    });
  },
  setVisibilityFilter: function(filter) {
    this.setState({ filter: filter });
  },
  getVisibleTodos: function() {
    switch (this.state.filter) {
    case 'Active':
      return this.state.todos.filter(function(todo) {
        return !todo.completed;
      });
    case 'Completed':
      return this.state.todos.filter(function(todo) {
        return todo.completed;
      });
    default:
      return this.state.todos;
    }
  },
  render: function() {
    return (
      <div>
        <TodoInput onAddTodo={this.addTodo}/>
        <TodoList
          todos={this.getVisibleTodos()}
          onToggleTodo={this.toggleTodo}
        />
        <VisibilityFilters onSetFilter={this.setVisibilityFilter}/>
      </div>
    );
  }
});

module.exports = TodoApp;
