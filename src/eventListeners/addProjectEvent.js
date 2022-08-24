import { projects } from '../index'
import Project from '../createNewProject'
import {v4 as uuidv4} from 'uuid';


export default function addProjectEvent (event) {
    const projectFolder = document.querySelector('.projectsFolder')

    event.preventDefault()

    let projectName = document.getElementById('newProjectName').value
    let projectId = uuidv4()
    

    const newProject = new Project(projectName, projectId)

    projects.push(newProject)
    // console.log(projects);

    projectFolder.appendChild(newProject.createProjectHtml())

    const newProjectInput = document.getElementById('newProjectName')
    newProjectInput.value = ''
    

}