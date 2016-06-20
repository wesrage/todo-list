var React = require('react');

var TodoInput = React.createClass({
  propTypes: {
    onAddTodo: React.PropTypes.func.isRequired
  },
  addTodo: function() {
    this.props.onAddTodo(this.refs.input.value);
    this.refs.input.value = '';
    this.refs.input.focus();
  },
  render: function() {
    return (
      <div>
        <input ref="input"/>
        <button onClick={this.addTodo}>Add Todo</button>
      </div>
    );
  }
});


module.exports = TodoInput;
