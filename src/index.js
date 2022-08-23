import './style.css'
import Logo from "./assets/StrykThru.png"
import Todo from './createNewTodo'
import {v4 as uuidv4} from 'uuid';
import Project from './createNewProject'
import createProjectHtml from './createProjectHtml';
import setActive from './setActive';


const logo = document.querySelector('.logo')
logo.src = Logo

let defaultProjectArr = []

export const projects = [defaultProjectArr]

const main = document.querySelector('.main')
const defaultProject = document.querySelector('.defaultProject')
defaultProject.addEventListener('click', setActive)

// probably gonna refactor these event listeners into their own modules
const addTodoBtn = document.querySelector('.addTodoBtn')
addTodoBtn.addEventListener('click', function(event){
    event.preventDefault()

    let todoTitle = document.querySelector('.todoTxtInput').value
    let todoDate = document.querySelector('.addTodoDate').value
    let todoPriority = document.querySelector('.addTodoPriority').value

    // if there are more than one project in the projects array, use the new project id. otherwise use the default id
    if(projects.length === 1){
        let projectID = document.querySelector('.defaultProject').id
    }else {
        let projectID = newProject.getProjectId()
    }
    
    
    const newTodo = new Todo(todoTitle, todoDate, todoPriority, projectID, uuidv4())
    // if default project is the only project, push to that array. if not push to the currently active array
    if(projects.length === 1){
        defaultProjectArr.push(newTodo)
    }
    
    
    main.appendChild(newTodo.getTodoHTML())
})

const projectFolder = document.querySelector('.projectsFolder')
const addProjectBtn = document.querySelector('.addProjectBtn')
addProjectBtn.addEventListener('click', function(event) {

    event.preventDefault()

    let projectName = document.getElementById('newProjectName').value
    let projectId = uuidv4()

    const newProject = new Project(projectName, projectId)

    projects.push(newProject)
    console.log(projects);

    projectFolder.appendChild(newProject.createProjectHtml())

    const newProjectInput = document.getElementById('newProjectName')
    newProjectInput.value = ''
    

})