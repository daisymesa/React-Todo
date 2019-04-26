import React from 'react';

import Todo from './Todo';

//Here is where the array for the toDoItems is being mapped

function TodoList(props) {
    return (
        <div className="to-do-list">
            {props.toDoItems.map( (todoItem, index) => {
                return (
                    <Todo 
                    todoItem={todoItem} 
                    key={index}
                    // toggleItem={props.toggleItem}
                    />
                );
            })}

        </div>
    );
}


export default TodoList;


// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js