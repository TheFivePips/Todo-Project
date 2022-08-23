import './style.css'
import Logo from "./assets/StrykThru.png"
import Todo from './createNewTodo'
import {v4 as uuidv4} from 'uuid';
import createNewProject from './createNewProject'


const logo = document.querySelector('.logo')
logo.src = Logo

let defaultProject = []

const projects = [defaultProject]

const main = document.querySelector('.main')

// probably gonna refactor these event listeners into their own modules
const addTodoBtn = document.querySelector('.addTodoBtn')
addTodoBtn.addEventListener('click', function(event){
    event.preventDefault()

    let todoTitle = document.querySelector('.todoTxtInput').value
    let todoDate = document.querySelector('.addTodoDate').value
    let todoPriority = document.querySelector('.addTodoPriority').value
    let defaultID = document.querySelector('.defaultProject').id
    
    
    // right now just do default project id and push all new todos to the default project arry of todo Objects
    const newTodo = new Todo(todoTitle, todoDate, todoPriority, defaultID, uuidv4())
    defaultProject.push(newTodo)
    
    main.appendChild(newTodo.getTodoHTML())
})

const projectFolder = document.querySelector('.projectsFolder')
const addProjectBtn = document.querySelector('.addProjectBtn')
addProjectBtn.addEventListener('click', function(event) {
    event.preventDefault()
    projectFolder.appendChild(createNewProject())

})