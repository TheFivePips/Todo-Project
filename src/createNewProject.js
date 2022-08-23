// make the new project btn work
// 	-create an html element that has:
// 		-title
// 		-edit btn
// 		-delete btn
// 	-when you click the project, todos currently on the page should dissappear and todos from that projects todo array should populate
import { projects } from "./index"
import setActive from "./setActive"
import renderProjectTodos  from "./renderProjectTodos"


export default class Project {
    constructor(name, id){
        this.name = name
        this.id = id
        this.arr = []
    }
    getProjectId(){
        return this.id
    }
   
    getProjectArr(){
        return this.arr
    }
    addToProjectArr(newTodo){
        this.arr.push(newTodo)
    }
    createProjectHtml(){
        const project = document.createElement('div')
        project.classList.add('project')
        project.setAttribute('id', this.id)
        
        const projectBtn = document.createElement('button')
        projectBtn.classList.add('projectBtn')
        projectBtn.textContent = this.name
    
        projectBtn.addEventListener('click', function(event){
            
            setActive(event.target)
            renderProjectTodos(event.target.parentElement.id)
        })
    
        const editProjectBtn = document.createElement('button')
        editProjectBtn.classList.add('editProjectBtn')
        // maybe replace with an icon?
        editProjectBtn.textContent = "Edit"
        editProjectBtn.addEventListener('click', function(event) {
            event.preventDefault()
            let editProjectName = prompt("What would you like the project to be called?")
            projectBtn.textContent = editProjectName

        })
    
        const deleteProjectBtn = document.createElement('button')
        deleteProjectBtn.classList.add('deleteProjectBtn')
        // replace with an icon?
        deleteProjectBtn.textContent = "Delete"
        deleteProjectBtn.addEventListener('click', function(event){
            event.preventDefault()
            let targetId = event.target.parentElement.id
            // look through the projects array and fine the project with the id that matched the target id then remove it from the array and remove the html
            // console.log(projects);
            projects.forEach((project) => {
                if(project.id === targetId){
                   let projectIndex = projects.indexOf(project)
                   projects.splice(projectIndex,1)
                   
                   const projectsFolder = document.querySelector('.projectsFolder')
                   projectsFolder.removeChild(event.target.parentElement)

                }
            })
            // console.log(event.target);
        })
    
        project.appendChild(projectBtn)
        project.appendChild(editProjectBtn)
        project.appendChild(deleteProjectBtn)
    
        return project
    }

}
    