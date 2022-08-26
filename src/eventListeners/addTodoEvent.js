import Todo from '../NewTodo'
import {v4 as uuidv4} from 'uuid';
import { projects } from '../index'
import getTodoHTML from '../todoHtml';



export default function addTodoEvent(event){
    event.preventDefault()
    if(projects.length < 1){
        alert("There must be a Project to make new Todos")
    }
    const todoContainer = document.querySelector('.todoContainer')

    let todoTitle = document.querySelector('.todoTxtInput')
    let todoDate = document.querySelector('.addTodoDate')
    let todoPriority = document.querySelector('.addTodoPriority')
    let projectID = document.querySelector('.active').id
    
    if(todoTitle.checkValidity()) {
        const newTodo = new Todo(todoTitle.value, todoDate.value, todoPriority.value, projectID, uuidv4())
     
        let currentProject = projects.find(element => element.id === projectID)
        currentProject.arr.push(newTodo)
    
        localStorage.setItem('data', JSON.stringify(projects))
        
        
       
        todoContainer.appendChild(getTodoHTML(newTodo))
        document.querySelector('.todoTxtInput').value = ''

    }
    else{
        alert(todoTitle.validationMessage)
    }


}