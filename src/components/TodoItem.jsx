import React, { PropTypes } from 'react';

const TodoItem = ({ index, todo, onToggle }) => {
  const style = (todo.completed)
    ? { textDecoration: 'line-through' }
    : {};
  const toggle = onToggle.bind(this, index);
  return (
    <li style={style} onClick={toggle}>
      {todo.text}
    </li>
  );
};

TodoItem.propTypes = {
  index: PropTypes.number.isRequired,
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TodoItem;
