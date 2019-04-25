import React from 'react';


//This is what is making each to do item show up
function Todo (props) {
    return (
        <div>
            <p>{props.todoItem.task}</p>
        </div>
    );
}


export default Todo;