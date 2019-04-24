import React from 'react';

import Todo from './Todo';





function TodoList(props) {
    return (
        <div>
            {props.toDoItems.map((todoItem, index) => {
                return (
                    <Todo todoItem={todoItem} key={index} />
                );
            })}

        </div>
    );
}





export default TodoList;




// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js