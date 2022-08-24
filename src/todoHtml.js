import { projects } from "./index"

// this will create todo html and set the logic for its checkbox and delete buttons
export default function getTodoHTML(newTodo){

    const todoElement = document.createElement('div')
    todoElement.classList.add('todo')
    todoElement.setAttribute('id', newTodo.id)

    const checkBox = document.createElement('input')
    checkBox.setAttribute('type', 'checkbox')
    checkBox.addEventListener('click', function(){
        if(checkBox.checked){
            todoTitle.style.textDecoration = "line-through"
        }
        else{
            todoTitle.style.textDecoration = "none"
        }
    })

    const todoTitle = document.createElement('p')
    todoTitle.classList.add('todoTitle')
    todoTitle.textContent= newTodo.title

    const todoDate = document.createElement('p')
    todoDate.textContent = newTodo.date
    
    const todoPriority = document.createElement('p')
    todoPriority.textContent = newTodo.priority

    const deleteTodoBtn = document.createElement('button')
    deleteTodoBtn.classList.add('deleteTodoBtn')
    deleteTodoBtn.setAttribute('type', 'submit')
    deleteTodoBtn.textContent = "Delete"
    

    deleteTodoBtn.addEventListener('click', function(e, projectid = newTodo.projectId){
        e.preventDefault()
        
        const Dproject = projects.find(project => project.id === projectid)
        const todoId = e.target.parentElement.id
        Dproject.arr.forEach(todo => {
            if(todo.id === todoId){
               let todoIndex = Dproject.arr.indexOf(todo)
               Dproject.arr.splice(todoIndex,1)
            }
        });
        const todoContainer = document.querySelector('.todoContainer')
        todoContainer.removeChild(e.target.parentElement)
        
    })

    todoElement.appendChild(checkBox)
    todoElement.appendChild(todoTitle)
    todoElement.appendChild(todoDate)
    todoElement.appendChild(todoPriority)
    todoElement.appendChild(deleteTodoBtn)

    return todoElement
}
