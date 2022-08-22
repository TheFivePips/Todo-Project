// this function needs to grab the user input from the new project form and return a new project button that we can then add to the dom
// it may also need to have an event listener that removes all current shown todos and then diplsyas on that project's todos
export const projects = []

export default function createNewProject(){
    // remove the active class on all project btns? maybe add this later
    let projectTodos = []
    
    const newProject = document.createElement('button')
    newProject.classList.add('project')
    // dynamically assign an id using uuid?
    newProject.textContent = document.getElementById('newProjectName').value
    projects.push(newProject)

    // each project needs an event listener that will clear the current todos from the main page and render the todos in the projectTodos array

    return newProject
    
    // set the active class to this newly created project
}