import './style.css'
import Logo from "./assets/StrykThru.png"
import Todo from './createNewTodo'
import {v4 as uuidv4} from 'uuid';
import Project from './createNewProject'
// import createProjectHtml from './createProjectHtml';
import setActive from './setActive';
import renderProjectTodos from './renderProjectTodos';
import addTodoEvent from './eventListeners/addTodoEvent';
import addProjectEvent from './eventListeners/addProjectEvent';


const logo = document.querySelector('.logo')
logo.src = Logo

export const defaultProjectArr = []

export const projects = [defaultProjectArr]

// const todoContainer = document.querySelector('.todoContainer')
const defaultProject = document.querySelector('.defaultProject')
defaultProject.setAttribute('id', uuidv4())
defaultProject.addEventListener('click', function(event){
    setActive(event.target)
    renderProjectTodos(defaultProject.id)
})

// probably gonna refactor these event listeners into their own modules
const addTodoBtn = document.querySelector('.addTodoBtn')
addTodoBtn.addEventListener('click', addTodoEvent)

// const projectFolder = document.querySelector('.projectsFolder')
const addProjectBtn = document.querySelector('.addProjectBtn')
addProjectBtn.addEventListener('click', addProjectEvent)