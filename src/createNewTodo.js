// import { format } from 'date-fns'

export default class Todo {
    constructor(title, date, priority, projectId, id) {
        this.title = title
        this.date = date
        this.priority = priority
        this.projectId = projectId
        this.id = id
    }
    getTodoTitle() {
        return this.title
    }
    setTodoTitle(title){
        this.title = title
    }
    getTodoDate(){
        return this.date
    }
    setTodoDate(date){
        this.date = date
    }
    getTodoPriority(){
        return this.priority
    }
    setTodoPriority(priority){
        this.priority = priority
    }
    getTodoProjectId(){
        return this.projectId
    }
    getTodoHTML(){

        const todoElement = document.createElement('div')
        todoElement.classList.add('todo')
        todoElement.setAttribute('id', this.id)

        const checkBox = document.createElement('input')
        checkBox.setAttribute('type', 'checkbox')

        const todoTitle = document.createElement('p')
        todoTitle.classList.add('todoTitle')
        todoTitle.textContent= this.title

        const todoDate = document.createElement('p')
        todoDate.textContent = this.date
        
        const todoPriority = document.createElement('p')
        todoPriority.textContent = this.priority

        const editTodoBtn = document.createElement('button')
        editTodoBtn.setAttribute('type', 'submit')
        editTodoBtn.classList.add('editTodoBtn')
        editTodoBtn.textContent = "Edit"
    //    editTodoBtn.addEventListener

        const deleteTodoBtn = document.createElement('button')
        deleteTodoBtn.classList.add('deleteTodoBtn')
        deleteTodoBtn.setAttribute('type', 'submit')
        deleteTodoBtn.textContent = "Delete"
        // deleteTodoBtn.addEventListener

        todoElement.appendChild(checkBox)
        todoElement.appendChild(todoTitle)
        todoElement.appendChild(todoDate)
        todoElement.appendChild(todoPriority)
        todoElement.appendChild(editTodoBtn)
        todoElement.appendChild(deleteTodoBtn)

        return todoElement
    }

    
}