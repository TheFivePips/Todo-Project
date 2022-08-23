import './style.css'
import Logo from "./assets/StrykThru.png"
import Todo from './createNewTodo'
import {v4 as uuidv4} from 'uuid';
import Project from './createNewProject'
// import createProjectHtml from './createProjectHtml';
import setActive from './setActive';


const logo = document.querySelector('.logo')
logo.src = Logo

let defaultProjectArr = []

export const projects = [defaultProjectArr]

const main = document.querySelector('.main')
const defaultProject = document.querySelector('.defaultProject')
defaultProject.setAttribute('id', uuidv4())
defaultProject.addEventListener('click', function(event){
    setActive(event.target)
})

// probably gonna refactor these event listeners into their own modules
const addTodoBtn = document.querySelector('.addTodoBtn')
addTodoBtn.addEventListener('click', function(event){
    event.preventDefault()

    console.log(projects);
    let todoTitle = document.querySelector('.todoTxtInput').value
    let todoDate = document.querySelector('.addTodoDate').value
    let todoPriority = document.querySelector('.addTodoPriority').value

    // whichever project has the active class, its id will be passed to the new todo
    let projectID = defaultProject.classList.contains('active') ?  document.querySelector('.defaultProject').id : document.querySelector('.active').parentElement.id
    


    const newTodo = new Todo(todoTitle, todoDate, todoPriority, projectID, uuidv4())

    // look through the projects array and find the project with the matching projectID then use that projects internal addToProjectArray function  to add the newTodo
    projects.forEach((project)=>{
        if(project.id === projectID){
            project.addToProjectArray()
        }

    })

    main.appendChild(newTodo.getTodoHTML())
    document.querySelector('.todoTxtInput').value = ''
})

const projectFolder = document.querySelector('.projectsFolder')
const addProjectBtn = document.querySelector('.addProjectBtn')
addProjectBtn.addEventListener('click', function(event) {

    event.preventDefault()

    let projectName = document.getElementById('newProjectName').value
    let projectId = uuidv4()

    const newProject = new Project(projectName, projectId)

    projects.push(newProject)
    // console.log(projects);

    projectFolder.appendChild(newProject.createProjectHtml())

    const newProjectInput = document.getElementById('newProjectName')
    newProjectInput.value = ''
    

})