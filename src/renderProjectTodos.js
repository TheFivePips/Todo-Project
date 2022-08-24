import { projects } from "./index"
import getTodoHTML from "./todoHtml";


export default function renderProjectTodos(projectId){
    
    // remove all todos from the current page
    const todoContainer = document.querySelector('.todoContainer')
    todoContainer.replaceChildren()
    
    
    // find the project with the matching id and append its todo to page
    const selectedProject = projects.find(element => element.id === projectId)
    
   selectedProject.arr.forEach(todo => {
        
        todoContainer.appendChild(getTodoHTML(todo))
   });

};