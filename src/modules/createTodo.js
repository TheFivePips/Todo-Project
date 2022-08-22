// Your ‘todos’ are going to be objects that you’ll want to dynamically create, which means either using factories or constructors/classes to generate them.
// At a minimum they should have a title, dueDate and priority. You might also want to include notes or even a checklist

// this function needs to take the from input information and create a new todo object. it needs to save that object to the relevant project array and return a todo html element we can then use to display to the dom
export default function createNewTodo(){
    const todo = document.createElement('div')
    todo.classList.add('todo')

    const todoTitle = document.createElement('h4')
    todoTitle.textContent = document.querySelector('.todotxtinput').value

    const todoDate = document.createElement('p')
    todoDate.textContent = document.querySelector('.addtododate').value

    const todoPriority = document.createElement('p')
    todoPriority.textContent = document.querySelector('.addtodopriority').value

    const todoCheckBox = document.createElement('input')
    todoCheckBox.setAttribute('type', 'checkbox')
    todoCheckBox.setAttribute('value', 'checked')

    const todoEditBtn = document.createElement('button')
    todoEditBtn.textContent = "Edit"
    todoEditBtn.classList.add('editbtn')
    // add an event listener to this button

    const todoDeleteBtn = document.createElement('button')
    todoDeleteBtn.textContent = "Delete"
    todoDeleteBtn.classList.add('deletebtn')
    // add an event listener here

    // also needs an edit btn, a delecte btn, and and completed btn

    todo.appendChild(todoCheckBox)
    todo.appendChild(todoTitle)
    todo.appendChild(todoDate)
    todo.appendChild(todoPriority)
    todo.appendChild(todoEditBtn)
    todo.appendChild(todoDeleteBtn)

    return todo

    
}