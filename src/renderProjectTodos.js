import { projects } from "./index"
import { defaultProjectArr } from "./index"

export default function renderProjectTodos(projectId){
    
    // remove all todos from the current page
    const todoContainer = document.querySelector('.todoContainer')
    todoContainer.replaceChildren()
    

   
    // console.log(projects);
    // find the project with the matching id
    const selectedProject = projects.find(element => element.id === projectId)
    
    // if we cannot find the selected project then render the items from the default project array
    if(!selectedProject){
        defaultProjectArr.forEach(todo => {
            todoContainer.appendChild(todo.getTodoHTML())
        })
    }
    else{
        selectedProject.arr.forEach(todo => {
            todoContainer.appendChild(todo.getTodoHTML())
        });
    }
    // console.log(selectedProject.arr);
    // loop through its internal todo array and call the gettodohtml method


};