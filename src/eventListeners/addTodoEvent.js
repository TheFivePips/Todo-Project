import Todo from '../createNewTodo'
import {v4 as uuidv4} from 'uuid';
import { projects, defaultProjectArr } from '../index'



export default function addTodoEvent(event){
    event.preventDefault()
    const todoContainer = document.querySelector('.todoContainer')

    const defaultProject = document.querySelector('.defaultProject')

    // console.log(projects);
    let todoTitle = document.querySelector('.todoTxtInput').value
    let todoDate = document.querySelector('.addTodoDate').value
    let todoPriority = document.querySelector('.addTodoPriority').value

    // whichever project has the active class, its id will be passed to the new todo
    let projectID = defaultProject.classList.contains('active') ?  document.querySelector('.defaultProject').id : document.querySelector('.active').parentElement.id
    


    const newTodo = new Todo(todoTitle, todoDate, todoPriority, projectID, uuidv4())

    // find the project in the project arry whos id matches the project id on the todo object then push the new todo to its internal array
    
    let currentProject = projects.find(element => element.id === projectID)
    // console.log(currentProject);
    if(!currentProject){
        defaultProjectArr.push(newTodo)
    }
    else{
        currentProject.arr.push(newTodo)
    }

    todoContainer.appendChild(newTodo.getTodoHTML())
    document.querySelector('.todoTxtInput').value = ''
}