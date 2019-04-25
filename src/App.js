import React from 'react';

import TodoList from './components/TodoComponents/TodoList';

import TodoForm from './components/TodoComponents/TodoForm';


const toDoItems = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];




class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      toDoItems: toDoItems,
      task: "",
      id: "",
    }
  }

  addToDo = event => {
    event.preventDefault();
    this.setState({
      toDoItems: [...this.StaticRange.toDoOnState, this.StaticRange.toDoItems],
      toDoItems: {
        task: "",
        id: ""
      }
    });
  };

  handleChanges = event => {
    this.setState({
      toDoItems: {
        ...this.state.toDoItems,
        [event.target.toDoItems]: event.target.value
      }
    })
  }


  render() {
    return (

      <div>
        <h2>To List Hello</h2>
        < TodoList toDoItems={this.state.toDoItems} task={this.state.task} />
        < TodoForm />
      </div>

    );
  }


}

export default App;
