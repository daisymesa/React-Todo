import React from 'react';

//This is the form itself: the input field and the submit + completed buttons

function TodoForm(props) {
    return (
        <form>

            <input placeholder="To Do"
                // value={props.toDoItems.todo}
                onChange={props.handleChanges}
                name="todo"
            />

            <button onClick={props.addToDo}>
                Add To Do</button>
            <button onClick={props.addToDo}>
                Clear Completed</button>

        </form>
    )
}


export default TodoForm;