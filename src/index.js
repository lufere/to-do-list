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

    return {title, color, todoList, add, remove, findPosition}
}

const list = (()=>{
    let currentProject;
    const setProject = (project) =>{
        currentProject = project;
        console.log(currentProject);
    }

    const createTodo = (todo) =>{
        let title = todo.title;
        let description = todo.description;
        let dueDate = todo.date;
        let priority = todo.priority;
        var test = Todo(title, description, dueDate, priority);
        currentProject.add(test);
        DOM.render(initial.todoList);
        document.querySelector("#createTodo").addEventListener('click',() => list.createTodo(DOM.getTodoValues()));
    }
    
    const removeTodo = (position) =>{
        currentProject.remove(position);
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

    return{setProject, createTodo,removeTodo,toggleCompletion, changeDescription, changeDueDate, togglePriority}

})()

const initial = Project("default", "yellow");
list.setProject(initial);
// list.createTodo("Walk the dog", "Take the dog for a walk", "tomorrow", true);
// list.createTodo("Walk the dog2", "Take the dog for a walk", "tomorrow", false);
// console.table(initial.todoList);
// list.togglePriority("Walk the dog");
// list.changeDescription("Walk the dog", "Don't walk him anymore he's a bad boi");
// list.changeDueDate("Walk the dog", "NEVER")
// console.table(initial.todoList);

function test(e){
    classTest = this.querySelector(".title");
    //console.log (classTest.innerHTML);
    console.log(initial.findPosition(classTest.innerHTML));
}
var testObject ={
    title : "Dog Walk v3",
    description : "Now generated dynamically",
    dueDate : "Tomorrow",
    priority: true
};

var testObject2 ={
    title : "Dog Walk v3",
    description : "Now generated dynamically"
};
DOM.createTodo(testObject);
DOM.render(initial.todoList);
document.querySelector("#createTodo").addEventListener('click',() => list.createTodo(DOM.getTodoValues()));
document.querySelector("#cancel").addEventListener('click',() => DOM.toggleFormVisibility());
document.querySelector("#addFormButton").addEventListener('click',() => DOM.toggleFormVisibility());
DOM.toggleFormVisibility();