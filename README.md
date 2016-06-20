# Install
`npm install`

# Run
`localhost:3000`

# Develop
## Entry Point
The application entry point is `src/index.js`. This just renders the root component (`TodoApp`) to the DOM.
## Components
All components are located in `src/components` and `src/es5-components`. Make your modifications to these components in order to enhance the todo list app.
## Modern JS vs. ES5
The `src/components` and `src/es5-components` directories hold copies of the components in different JS dialects. You can choose either one to develop. By default, this app runs the modern JS version of the code. To change to ES5 components, change the line
```
import TodoApp from './components/TodoApp';
```
in `index.js` to use the `es5-components` directory instead.
## Raw HTML
This repo also ships raw standalone HTML files in the `raw` directory containing versions of the app using traditional `script` tags. Both are written in ES5, one with JSX syntax and one without. These examples show the easiest way to get started with React.
