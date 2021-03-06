// import list from "./index";

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
        priorityValue.classList.add("currentPriority");
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
        let editBtn = document.createElement("button");
        editBtn.classList.add("edit");
        editBtn.innerHTML = "EDIT ✔️";
        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete");
        deleteBtn.innerHTML = "DEL ❌";
        actions.appendChild(editBtn);
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

    const createTodoNoAction = (todo) =>{
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
        priorityValue.classList.add("currentPriority");
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
        let dueDate = document.querySelector("#formDate").value;
        let priority = document.querySelector("#formPriority").checked;
        return {title, description, dueDate, priority}
    }

    const render = (project) =>{
        document.querySelector("#list").innerHTML = "";
        for (let item of project){
            createTodo(item);
        }
        inputForm();
        // list.setListeners();
    }

    const editForm = (project, pos) => {
        document.querySelector("#list").innerHTML = "";
        for (let i = 0; i < pos; i++) {
            createTodoNoAction(project[i])
        }
        inputForm();
        // let permaTitle = document.createElement("h3");
        // permaTitle.innerHTML = "TEST";
        // permaTitle.classList.add("title");
        let titleInput = document.querySelector("#formTitle");
        titleInput.readOnly = true;
        let editButton = document.querySelector("#createTodo");
        editButton.innerHTML = "Finish Edit"
        editButton.id = "confirmEdit";
        let cancelButton = document.querySelector("#cancel");
        cancelButton.innerHTML = "Cancel Edit"
        cancelButton.id = "cancelEdit";
        // document.querySelector("#newTodo").prepend(permaTitle);
        for (let i = pos+1; i < project.length; i++) {
            createTodoNoAction(project[i])
        }
    }

    const alertme = () =>{
        alert("it works!");
    }
    return {createTodo, alertme, render, toggleFormVisibility, getTodoValues, inputForm, editForm}
})()

export default DOM