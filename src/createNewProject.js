// make the new project btn work
// 	-create an html element that has:
// 		-title
// 		-edit btn
// 		-delete btn
// 	-when you click the project, todos currently on the page should dissappear and todos from that projects todo array should populate
import { projects } from "./index"


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
    
        projectBtn.addEventListener('click', function() {
            // add class of active and remove from all other projects
            defaultProject = document.querySelector('.defaultProject')
            defaultProject.classList.remove('active')
            const projects = document.querySelectorAll('.project')
            projects.forEach(project => {
                if(project.classList.contains('active')){
                    project.classList.remove('active')
                }

            });
            project.classList.add('active')
        })
    
        const editProjectBtn = document.createElement('button')
        editProjectBtn.classList.add('editProjectBtn')
        // maybe replace with an icon?
        editProjectBtn.textContent = "Edit"
    
        const deleteProjectBtn = document.createElement('button')
        deleteProjectBtn.classList.add('deleteProjectBtn')
        // replace with an icon?
        deleteProjectBtn.textContent = "Delete"
    
        project.appendChild(projectBtn)
        project.appendChild(editProjectBtn)
        project.appendChild(deleteProjectBtn)
    
        return project
    }

}
    