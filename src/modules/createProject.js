// this function needs to grab the user input from the new project form and return a new project button that we can then add to the dom
// it may also need to have an event listener that removes all current shown todos and then diplsyas on that project's todos
const projects = []

export default function createNewProject(){
    // remove the active class on all project btns? maybe add this later
    let projectTodos = []
    
    const newProject = document.createElement('button')
    newProject.classList.add('project')
    // dynamically assign an id using uuid?
    newProject.textContent = document.getElementById('newProjectName').value
    projects.push(newProject)
    return newProject
    
    // set the active class to this newly created project
}