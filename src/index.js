import './style.css'
import Logo from "./assets/StrykThru.png"
import Todo from './createNewTodo'
import {v4 as uuidv4} from 'uuid';


const logo = document.querySelector('.logo')
logo.src = Logo

const projects = []

const main = document.querySelector('.main')

const addTodoBtn = document.querySelector('.addTodoBtn')
addTodoBtn.addEventListener('click', function(event){
    let todoTitle = document.querySelector('.todoTxtInput').value
    let todoDate = document.querySelector('.addTodoDate').value
    let todoPriority = document.querySelector('.addTodoPriority').value
    let defaultID = document.querySelector('.defaultProject').id
    
    
    // right now just do default project id
    event.preventDefault()
    const newTodo = new Todo(todoTitle, todoDate, todoPriority, defaultID, uuidv4())
    main.appendChild(newTodo.getTodoHTML())
})