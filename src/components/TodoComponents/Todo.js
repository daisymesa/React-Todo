import React from 'react';

function Todo (props) {
    return (
        <div>
            <p>{props.todoItem.task}</p>
        </div>
    );
}


export default Todo;