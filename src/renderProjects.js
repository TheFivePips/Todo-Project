// import { projects } from "./index"
import createProjectHtml from './projectHtml'

export default function renderProjects(projects){

    projects.forEach(project => {
        const projectsFolder = document.querySelector('.projectsFolder')
        projectsFolder.appendChild(createProjectHtml(project))
    })
}