var React = require('react');

var TodoItem = React.createClass({
  propTypes: {
    index: React.PropTypes.number.isRequired,
    todo: React.PropTypes.shape({
      text: React.PropTypes.string.isRequired,
      completed: React.PropTypes.bool.isRequired
    }).isRequired,
    onToggle: React.PropTypes.func.isRequired
  },
  toggle: function() {
    this.props.onToggle(this.props.index);
  },
  render: function() {
    var style = (this.props.todo.completed)
      ? { textDecoration: 'line-through' }
      : {};
    return (
      <li
        style={style}
        onClick={this.toggle}
      >
        {this.props.todo.text}
      </li>
    );
  }
});

module.exports = TodoItem;
