import DOM from "./DOM-manipulation";

const Todo = (title, description, dueDate, priority) =>{
    let completed = false;
    return{title, description, dueDate, priority, completed}
}

const Project = (title, color) =>{
    let todoList = [];
    const add = (todo)=>{
        todoList.push(todo);
    }
    const remove = (position) =>{
        todoList.splice(position,1);
    }

    const findPosition = (title) =>{
        return todoList.findIndex(element => element.title == title);

    }

    const replace = (position, newTodo) => {
        console.table(todoList);
        console.log(position);
        todoList.splice(position, 1, newTodo);
        console.table(todoList);
    }

    return {title, color, todoList, add, remove, findPosition, replace}
}

const list = (()=>{
    let currentProject;
    let projects = [];
    const setProject = (index) =>{
        currentProject = projects[index];
        console.log(currentProject);
    }

    const createProject = (name, color) => {
        projects.push(Project(name, color));
        // Project("default", "yellow");
    }
    
    const getProject = () =>{
        return currentProject
    }

    const createTodo = (todo) =>{
        let title = todo.title;
        let description = todo.description;
        let dueDate = todo.dueDate;
        let priority = todo.priority;
        var test = Todo(title, description, dueDate, priority);
        currentProject.add(test);
        DOM.render(currentProject.todoList);
        setListeners();
    }

    const setListeners = ()=>{
        document.querySelector("#createTodo").addEventListener('click',() => list.createTodo(DOM.getTodoValues()));
        document.querySelector("#cancel").addEventListener('click',() => DOM.toggleFormVisibility());
        document.querySelector("#addFormButton").addEventListener('click',() => DOM.toggleFormVisibility());
        document.querySelectorAll(".delete").forEach(element => {
            element.addEventListener("click", function(){
                let todoDiv = element.parentNode.parentNode;
                let titleID = todoDiv.querySelector(".title").innerHTML;
                removeTodo(getProject().findPosition(titleID));
                setListeners();
            })
        });
        
        document.querySelectorAll(".edit").forEach(element => {
            element.addEventListener('click', function(){
                // alert(element.parentNode.parentNode.querySelector(".title").innerHTML);
                let todoDiv = element.parentNode.parentNode;
                let title = todoDiv.querySelector(".title").innerHTML;
                let description = todoDiv.querySelector(".description").innerHTML;
                let dueDate = todoDiv.querySelector(".dueDate > p:nth-child(2)").innerHTML;
                let checked = (todoDiv.querySelector(".currentPriority").innerHTML=="High")?true:false;
                // document.querySelector("#list").innerHTML = "";
                let pos = getProject().findPosition(title);
                DOM.editForm(currentProject.todoList, pos);
                document.querySelector("#formTitle").value = title;
                document.querySelector("#formDescription").value = description;
                document.querySelector("#formDate").value = dueDate;
                document.querySelector("#formPriority").checked = checked;
                setEditListeners();
            })
        });
    }

    const setEditListeners = () => {
        document.querySelector("#cancelEdit").addEventListener('click', function(){
            DOM.render(currentProject.todoList);
            setListeners();
        })
        
        document.querySelector("#confirmEdit").addEventListener('click', function(){
            let titleInput = document.querySelector("#formTitle");
            let newTodo = DOM.getTodoValues();
            console.table(newTodo);
            console.log(titleInput.value);
            currentProject.replace(currentProject.findPosition(titleInput.value),newTodo);
            DOM.render(currentProject.todoList);
            setListeners();
        })
    }

    const renderEdit = (element)=>{
        alert(element.parentNode.parentNode.querySelector(".title").innerHTML);
        document.querySelector("#list").innerHTML = "";
        DOM.inputForm();
    }
    
    const removeTodo = (position) =>{
        currentProject.remove(position);
        DOM.render(currentProject.todoList);
    }

    const toggleCompletion = (title) =>{
        let position = currentProject.findPosition(title);
        currentProject.todoList[position].completed = !currentProject.todoList[position].completed;
    }

    const togglePriority = (title)=>{
        let position = currentProject.findPosition(title);
        currentProject.todoList[position].priority = !currentProject.todoList[position].priority
    }

    const changeDescription = (title, description) =>{
        let position = currentProject.findPosition(title);
        currentProject.todoList[position].description = description;
    }

    const changeDueDate = (title, dueDate) =>{
        let position = currentProject.findPosition(title);
        currentProject.todoList[position].dueDate = dueDate;
    }

    return{setProject, createTodo, removeTodo, toggleCompletion, changeDescription, changeDueDate, togglePriority, getProject, setListeners, renderEdit, createProject}

})()

// document.querySelector('.project').addEventListener("click", function(e){
//     console.log(e.target.style.backgroundColor);
//     // let project = e.target.dataset.project;
//     list.setProject(second);
//     document.querySelector('body').style.backgroundColor = "lightsalmon";
//     // list.setProject(window[project]);
//     // console.log(list.getProject);
//     DOM.render(second.todoList);
//     list.setListeners();
// })

// document.querySelector('.projectt').addEventListener("click", function(e){
//     console.log(e.target.dataset.project);
//     // let project = e.target.dataset.project;
//     document.querySelector('body').style.backgroundColor = "lightyellow";
//     // list.setProject(initial)
//     // DOM.render(initial.todoList);
//     list.setListeners();
// })

// document.querySelectorAll(".project").forEach()

// const initial = Project("default", "yellow");
// const second = Project("default", "yellow");

list.createProject("default", "yellow")
list.setProject(0);
DOM.render(list.getProject().todoList);
list.setListeners();
DOM.toggleFormVisibility();


// console.log(document.querySelector('.project'));

export default list