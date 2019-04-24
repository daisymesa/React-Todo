// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

render () {
    return (
        <div>
            <h1>To Do List!</h1>
            <div className="to-do-list">
            
            {this.state.toDoOnState.map(toDoItems => (
                <ToDoItems toDoItems={toDoItems} />
            ))}
            </div>
        </div>
    )
}