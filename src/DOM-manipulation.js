import list from "./index";

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
        //actions creation
        let actions = document.createElement("div");
        actions.classList.add("actions");
        let completedBtn = document.createElement("button");
        completedBtn.classList.add("completed");
        completedBtn.innerHTML = "✔️";
        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete");
        deleteBtn.innerHTML = "❌";
        actions.appendChild(completedBtn);
        actions.appendChild(deleteBtn);
        //apending all sections to the todo div
        todoContainer.appendChild(title);
        todoContainer.appendChild(description);
        todoContainer.appendChild(dueDate);
        todoContainer.appendChild(priority);
        todoContainer.appendChild(actions);
        //appending the todo to the DOM
        document.querySelector("#list").appendChild(todoContainer);
    }

    const inputForm = () =>{
        let todoContainer = document.createElement("div");
        todoContainer.classList.add("todo");
        todoContainer.id = "newTodo";
        let inputForm = document.createElement("div");
        inputForm.id = "newTodoForm";
        inputForm.style.display = "flex";
        //title input
        let titleInput = document.createElement("input");
        titleInput.id = "formTitle";
        titleInput.placeholder = "Title";
        inputForm.appendChild(titleInput);
        //description input
        let descriptionInput = document.createElement("input");
        descriptionInput.id = "formDescription";
        descriptionInput.type = "textarea";
        descriptionInput.placeholder = "Description";
        inputForm.appendChild(descriptionInput);
        //date input
        let dateInput = document.createElement("input");
        dateInput.id = "formDate";
        dateInput.type = "date";
        inputForm.appendChild(dateInput);
        //priority input
        let priorityDiv = document.createElement("div");
        let priorityInput = document.createElement("input");
        priorityInput.id = "formPriority";
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
        todoContainer.appendChild(inputForm);
        //creating the show form button
        let addFormButton = document.createElement("div");
        addFormButton.id = "addFormButton";
        let AddText = document.createElement("p");   
        let AddButton = document.createElement("p");
        AddText.innerHTML = "Add new To Do";
        AddButton.innerHTML = "+";
        addFormButton.appendChild(AddText);
        addFormButton.appendChild(AddButton);
        addFormButton.style.display= "none";
        todoContainer.appendChild(addFormButton);
        //appending the todo to the DOM
        document.querySelector("#list").appendChild(todoContainer);
    }

    const toggleFormVisibility = () =>{
        let form = document.querySelector("#newTodoForm");
        let buttonForm = document.querySelector("#addFormButton");
        if(form.style.display == "flex"){
            form.style.display = "none";
            buttonForm.style.display = "flex";
            buttonForm.style.flexFlow = "column";
        }
        else{
            form.style.display = "flex";
            buttonForm.style.display = "none";
        }
    }

    const getTodoValues = () =>{
        let title = document.querySelector("#formTitle").value;
        let description = document.querySelector("#formDescription").value;
        let date = document.querySelector("#formDate").value;
        let priority = document.querySelector("#formPriority").checked;
        return {title, description, date, priority}
        // list.createTodo(title, description, date, priority);
    }

    // document.querySelector("#test").addEventListener('click', toggleFormVisibility);

    const render = (project) =>{
        document.querySelector("#list").innerHTML = "";
        for (let item of project){
            createTodo(item);
        }
        inputForm();
        // list.setListeners();
    }
    
    // const setListeners = () =>{
    //     document.querySelector("#createTodo").addEventListener('click',() => list.createTodo(getTodoValues()));
    //     document.querySelector("#cancel").addEventListener('click',() => toggleFormVisibility());
    //     document.querySelector("#addFormButton").addEventListener('click',() => toggleFormVisibility());
    // }

    const alertme = () =>{
        alert("it works!");
    }
    return {createTodo, alertme, render, toggleFormVisibility, getTodoValues}
})()

export default DOM