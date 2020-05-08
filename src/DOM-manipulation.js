const DOM = (()=>{
    const createTodo = (todo) =>{
        let todoContainer = document.createElement("div");
        todoContainer.classList.add("todo");
        //title creation
        let title = document.createElement("h3");
        title.classList.add("title");
        title.innerHTML = todo.title;
        //description creation
        let description = document.createElement("p");
        description.classList.add("description");
        description.innerHTML = todo.description;
        //dueDate creation
        let dueDate = document.createElement("div");
        dueDate.classList.add("dueDate");
        let dateTitle = document.createElement("p");
        dateTitle.innerHTML = "Due Date:"
        let dateValue = document.createElement("p");
        dateValue.innerHTML = todo.dueDate;
        dueDate.appendChild(dateTitle);
        dueDate.appendChild(dateValue);
        //priority creation
        let priority = document.createElement("div");
        priority.classList.add("priority");
        let priorityTitle = document.createElement("p");
        priorityTitle.innerHTML = "Priority";
        let priorityValue = document.createElement("p");
        if (todo.priority){ 
            todoContainer.classList.add("high");
            priorityValue.innerHTML = "High";
        }
        else priorityValue.innerHTML = "Low"; 
        priority.appendChild(priorityTitle);
        priority.appendChild(priorityValue);
        //apending all sections to the todo div
        todoContainer.appendChild(title);
        todoContainer.appendChild(description);
        todoContainer.appendChild(dueDate);
        todoContainer.appendChild(priority);
        //appending the todo to the DOM
        document.querySelector("#list").appendChild(todoContainer);
    }

    const inputForm = () =>{
        let todoContainer = document.createElement("div");
        todoContainer.classList.add("todo");
        todoContainer.id = "newTodo";
        let inputForm = document.createElement("form");
        //title input
        let titleInput = document.createElement("input");
        titleInput.placeholder = "Title";
        inputForm.appendChild(titleInput);
        //description input
        let descriptionInput = document.createElement("input");
        descriptionInput.type = "textarea";
        descriptionInput.placeholder = "Description";
        inputForm.appendChild(descriptionInput);
        //date input
        let dateInput = document.createElement("input");
        dateInput.type = "date";
        inputForm.appendChild(dateInput);
        //priority input
        let priorityDiv = document.createElement("div");
        let priorityInput = document.createElement("input");
        let priorityText = document.createTextNode("High Priority?");
        priorityInput.type = "checkbox";
        priorityDiv.appendChild(priorityInput);
        priorityDiv.appendChild(priorityText);
        inputForm.appendChild(priorityDiv);
        //buttons input
        let buttonDiv = document.createElement("div");
        let cancelButton = document.createElement("button");
        let createButton = document.createElement("button");
        cancelButton.id = "cancel";
        createButton.id = "createTodo";
        cancelButton.innerHTML = "Cancel";
        createButton.innerHTML = "Create";
        buttonDiv.appendChild(cancelButton);
        buttonDiv.appendChild(createButton);
        inputForm.appendChild(buttonDiv);
        //appending the todo to the DOM
        todoContainer.appendChild(inputForm);
        document.querySelector("#list").appendChild(todoContainer);
    }

    const render = (list) =>{
        for (let item of list){
            createTodo(item);
        }
        inputForm();
    }

    const alertme = () =>{
        alert("it works!");
    }
    return {createTodo, alertme, render}
})()

export default DOM