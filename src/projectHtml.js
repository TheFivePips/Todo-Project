import setActive from "./setActive"
import renderProjectTodos from "./renderProjectTodos"
import { projects } from "./index"

// this will export a project Html to be rendered to the DOM
// it will set itself to active and render its todos if there are any
// it will also set the logic for the project edit and delete buttons
export default function createProjectHtml(newProject){
    const project = document.createElement('div')
    project.classList.add('project')
    
    project.setAttribute('id', newProject.id)
    
    const projectBtn = document.createElement('button')
    projectBtn.classList.add('projectBtn')
    projectBtn.textContent = newProject.name

    projectBtn.addEventListener('click', function(event){
        event.preventDefault()
        setActive(project)
        renderProjectTodos(event.target.parentElement.id)
    })

    const editProjectBtn = document.createElement('button')
    editProjectBtn.classList.add('editProjectBtn')
    // maybe replace with an icon?
    editProjectBtn.textContent = "Edit"
    editProjectBtn.addEventListener('click', function(event) {
        event.preventDefault()
        
        let editProjectName = prompt("What would you like the project to be called?")
        projects.forEach((project) => {
            if(event.target.parentElement.id === project.id){
                project.name = editProjectName
            }
            
        })
        localStorage.setItem('data', JSON.stringify(projects))
        

        projectBtn.textContent = editProjectName

    })

    const deleteProjectBtn = document.createElement('button')
    deleteProjectBtn.classList.add('deleteProjectBtn')
    // replace with an icon?
    deleteProjectBtn.textContent = "Delete"
    deleteProjectBtn.addEventListener('click', function(event){
        event.preventDefault()
        if(projects.length === 1){
            alert("You must have at least one Project open")
            return
        }else{

            let targetId = event.target.parentElement.id
          
            projects.forEach((project) => {
                if(project.id === targetId){
                   let projectIndex = projects.indexOf(project)
                   projects.splice(projectIndex,1)
                   
                   const projectsFolder = document.querySelector('.projectsFolder')
                   projectsFolder.removeChild(event.target.parentElement)
                   
                }
            })
        localStorage.setItem('data', JSON.stringify(projects))
            
        }
        
    })

    project.appendChild(projectBtn)
    project.appendChild(editProjectBtn)
    project.appendChild(deleteProjectBtn)

    return project
}

