import React from 'react';

import TodoList from './components/TodoComponents/TodoList';

import TodoForm from './components/TodoComponents/TodoForm';

//This is an array, toDoItems, and they are the default to do items that will show up

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
      completed: false
    }
  }

  addToDo = event => {
    event.preventDefault();

    this.setState({
      toDoItems: [...this.state.toDoOnState, this.state.toDoItems],

      toDoItems: {
        task: "",
        id: "",
        completed: false
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

  
  // New To Do's
  addItemHandler = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        toDoItems: [
          ...prevState.toDoItems,
          {
            completed: false,
            id: Date.now(),
            name: prevState.task
          }
        ],
        task: ""
      };
    });
  };

  // Toggle Task
  toggleItem = itemId => {
    this.setState(prevState => {
      return {
        toDoItems: prevState.toDoItems.map(taskItem => {
          if (taskItem.id === itemId) {
            return {
              ...taskItem,
              completed: !taskItem.completed
            };
          } else {
            return taskItem;
          }
        })
      };
    });
  };


  render() {
    return (
      <div>

        <div className="header">
          <h2>To List</h2>
        </div>

        < TodoList
          toDoItems={this.state.toDoItems}
          task={this.state.task}
          toggleItem={this.toggleItem}
        />

        < TodoForm
          toDoItems={this.state.toDoItems}
          handleChanges={this.handleChanges}
          addToDo={this.addToDo}
        />

      </div>

    );
  }
}

export default App;
