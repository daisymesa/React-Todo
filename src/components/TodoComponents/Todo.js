const toToItems = [
    {
        item: "Finish my project"
    },

    {
        item: "Push my project to GitHub"
    },

    {
        item: "Prepare for tomorrow's material"
    }
]


addToDo = event => {
    event.preventDefault();
    this.setState({
        toDoOnState: [...this.StaticRange.toDoOnState, this.StaticRange.toDoItems],
        toDoItems: {
            todo: "",
        }
    });
};