import './style.css'
import Logo from "./assets/StrykThru.png"
import {v4 as uuidv4} from 'uuid';
import Project from './NewProject'
import addTodoEvent from './eventListeners/addTodoEvent';
import addProjectEvent from './eventListeners/addProjectEvent';
import renderProjects from './renderProjects';
import setActive from './setActive';


const logo = document.querySelector('.logo')
logo.src = Logo


// check local storage for project data. if it exists overwrite the projects array?
// if it doesnt exist, do nothing
// this is the array where all of the projects and their todos will be saved
// next must do local storage
export const projects = []


const defaultProject = new Project('Today', uuidv4())
projects.push(defaultProject)
renderProjects(projects)
// set the default project to active by ....default
const defaultProjectBtn = document.querySelector('.projectsFolder > .project')
setActive(defaultProjectBtn)


// two major event handlers
const addTodoBtn = document.querySelector('.addTodoBtn')
addTodoBtn.addEventListener('click', addTodoEvent)


const addProjectBtn = document.querySelector('.addProjectBtn')
addProjectBtn.addEventListener('click', addProjectEvent)