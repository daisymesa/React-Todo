import React from 'react';

//This is what is making each to do item show up

function Todo (props) {
    // let completedTask = "task";
    // if (props.event.completed) {
    //   completedTask += "completed";
    // }
    return (
        <div>
            {/* className={props.task.completed}
            key={props.task.id}
            onClick={event => {
                props.toggleItem(props.task.id);
            }}
        >         */}

            <p>{props.todoItem.task}</p>
        </div>
    );
}


export default Todo;