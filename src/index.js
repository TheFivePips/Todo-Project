import './style.css'
import Logo from "./assets/StrykThru.png"
import {v4 as uuidv4} from 'uuid';
import Project from './NewProject'
import addTodoEvent from './eventListeners/addTodoEvent';
import addProjectEvent from './eventListeners/addProjectEvent';
import renderProjects from './renderProjects';
import setActive from './setActive';
import renderProjectTodos from './renderProjectTodos';


const logo = document.querySelector('.logo')
logo.src = Logo

export let projects = []


let data = JSON.parse(localStorage.getItem('data'))


if(data && data.length>0){
    projects = data
    renderProjects(projects)
    const defaultProjectBtn = document.querySelector('.projectsFolder > .project')
    setActive(defaultProjectBtn)
    renderProjectTodos(projects[0].id)
    
    
    // the big two major event handlers
    const addTodoBtn = document.querySelector('.addTodoBtn')
    addTodoBtn.addEventListener('click', addTodoEvent)
    
    
    const addProjectBtn = document.querySelector('.addProjectBtn')
    addProjectBtn.addEventListener('click', addProjectEvent)
}
else if(data === null){

    const defaultProject = new Project('Today', uuidv4())
    projects.push(defaultProject)
    renderProjects(projects)
    // set the default project to active by ....default
    const defaultProjectBtn = document.querySelector('.projectsFolder > .project')
    
    setActive(defaultProjectBtn)
    
    
    // the big two major event handlers
    const addTodoBtn = document.querySelector('.addTodoBtn')
    addTodoBtn.addEventListener('click', addTodoEvent)
    
    
    const addProjectBtn = document.querySelector('.addProjectBtn')
    addProjectBtn.addEventListener('click', addProjectEvent)
}

