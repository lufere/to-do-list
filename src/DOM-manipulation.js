const DOM = (()=>{
    const createTodo = (todo) =>{
        let todoContainer = document.createElement("div");
        todoContainer.classList.add("todo");
        let title = document.createElement("h3");
        title.classList.add("title");
        title.innerHTML = todo.title;
        let description = document.createElement("p");
        description.classList.add("description");
        description.innerHTML = todo.description;
        let dueDate = document.createElement("p");
        todoContainer.appendChild(title);
        todoContainer.appendChild(description);
        document.querySelector("#list").appendChild(todoContainer);
    }

    const alertme = () =>{
        alert("it works!");
    }
    return {createTodo, alertme}
})()

export default DOM