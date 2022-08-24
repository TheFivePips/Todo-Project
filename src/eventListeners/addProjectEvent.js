import { projects } from '../index'
import Project from '../NewProject'
import {v4 as uuidv4} from 'uuid';
import createProjectHtml from '../projectHtml';
import setActive from '../setActive';
import renderProjectTodos from '../renderProjectTodos';


export default function addProjectEvent (event) {
    event.preventDefault()
    const projectFolder = document.querySelector('.projectsFolder')


    let projectName = document.getElementById('newProjectName').value
    let projectId = uuidv4()
    

    const newProject = new Project(projectName, projectId)

    projects.push(newProject)
    localStorage.setItem('data', JSON.stringify(projects))
  
    const newProjectHtml = createProjectHtml(newProject)
    setActive(newProjectHtml)
    projectFolder.appendChild(newProjectHtml)
    renderProjectTodos(newProject.id)

    const newProjectInput = document.getElementById('newProjectName')
    newProjectInput.value = ''
    

}