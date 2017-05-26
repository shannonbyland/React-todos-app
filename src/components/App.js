import React, { Component } from 'react';
import CreateToDo from './CreateToDo'
import List from './List';
import ListItem from './ListItem';

const todos = [
  {
      task: '',
      isCompleted: false
  }
]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    };
  }

  editTask = (task, updateTask ) => {
    let todos = this.state.todos
    const foundTodo = todos.find(todo => todo.task === task);
    foundTodo.task = updateTask;
    this.setState({ todos: [ foundTodo ] })
  }


  toggleTask = (task) => {
    const foundTodo = this.todos.find(this.state.todos, todo => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({ todos: this.state.todos });
  }

  createTask = (task) => {
    let { todos } = this.state;
    todos.push({
      task,
      isCompleted: false
    });
    this.setState({ todos: this.state.todos });
  }


  render() {
    return (
      <div id='main'>
        <h1>React Todos App</h1>
        <CreateToDo
          createTask={this.createTask}
         />
        <List
          editTask={this.editTask}
          todos={this.state.todos}
          toggleTask={this.toggleTask}
         />
      </div>
    );
  }
}


export default App;
