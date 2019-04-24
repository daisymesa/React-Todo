import React from 'react';


function TodoForm (props) {
    return (
        <form>
        <input placeholder="To Do" 
        // value={props.toDoItems.todo}
        onChange={props.handleChanges}
        name="todo"
        />
        <button onClick={props.addToDo}>
        Add To Do</button>
    </form>
    )
}



export default TodoForm;