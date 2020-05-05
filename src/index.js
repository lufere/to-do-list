const Todo = (title, description, dueDate, priority) =>{
    let completed = false;
    return{title, description, dueDate, priority, completed}
}

const Project = (title, color) =>{
    let todoList = [];
    const add = (todo)=>{
        todoList.push(todo);
    }
    return {title, color, todoList, add}
}

const initial = Project("default", "yellow");
const test = Todo ("Walk the dog", "Take the dog for a walk", "tomorrow", 1, initial);
initial.add(test);
console.table(initial.todoList);