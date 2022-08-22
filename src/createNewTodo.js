// import { format } from 'date-fns'

export default class Todo {
    constructor(title, date, priority, project) {
        this.title = title
        this.date = date
        this.priority = priority
        this.project = project
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
    
}