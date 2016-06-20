var React = require('react');
var TodoItem = require('./TodoItem');

var TodoList = React.createClass({
  propTypes: {
    todos: React.PropTypes.array.isRequired,
    onToggleTodo: React.PropTypes.func.isRequired
  },
  render: function() {
    var onToggleTodo = this.props.onToggleTodo;
    return (
      <ul>
         {this.props.todos.map(function(todo, index) {
           return (
           <TodoItem
             key={index}
             index={index}
             todo={todo}
             onToggle={onToggleTodo}
           />
           );
         })}
      </ul>
    );
  }
});

module.exports = TodoList;
