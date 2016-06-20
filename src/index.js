require('./index.html');
import React from 'react';
import { render } from 'react-dom';
import TodoApp from './components/TodoApp';

const target = document.getElementById('root');

render(<TodoApp/>, target);
