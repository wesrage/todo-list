import React, { PropTypes } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggleTodo }) => (
  <ul>
    {todos.map((todo, index) => (
      <TodoItem
        key={index}
        index={index}
        todo={todo}
        onToggle={onToggleTodo}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
