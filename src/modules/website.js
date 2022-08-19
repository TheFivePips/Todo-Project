// this is the base webstie with no todos or dynamically created projects
// it is the framework for the rest of the sites functionality
// it will export an initializeWebsite fucntion at the end that will be imported by index.js and ran from there
import Logo from '../assets/StrykThru.png'


function createHeader(){
    const header = document.createElement('header')
    header.classList.add('header')

    const icon = new Image()
    icon.src = Logo
    icon.classList.add('logo')

    const title = document.createElement('h3')
    title.textContent = "StrykThru"
    title.classList.add('title')

    header.appendChild(icon)
    header.appendChild(title)

    return header
}


function createSideBar(){
    const sideBar = document.createElement('div')
    sideBar.classList.add('sidebar')

    const projectTitle = document.createElement('h2')
    projectTitle.textContent = "Projects"
    projectTitle.classList.add('project-title')

    const projectFolder = document.createElement('div')
    projectFolder.classList.add('project-folder')

    // defualt project
    const defualtProject = document.createElement('button')
    defualtProject.classList.add('defaultProject')
    defualtProject.textContent = 'Project 1'
    defualtProject.classList.add('active')

    
    const addProjectForm = document.createElement('form')
    addProjectForm.classList.add('projectForm')

    const projectInput = document.createElement('input')
    projectInput.setAttribute.type = 'text'

    
    const addProjectBtn = document.createElement('button')
    addProjectBtn.classList.add('addprojectbtn')
    addProjectBtn.setAttribute('type', 'submit')
    addProjectBtn.setAttribute('value', 'submit')

    addProjectBtn.textContent = "+"
    addProjectBtn.addEventListener("click", function() {
        // this should call the create a new project fucntion and return a btn that we can then add to the dom. this should also create an empty array that we will use to store the todo objects for that project. maybe use uuid?
    })
    
    addProjectForm.appendChild(projectInput)
    addProjectForm.appendChild(addProjectBtn)

    projectFolder.appendChild(defualtProject)

    projectFolder.appendChild(addProjectForm)

   

    sideBar.appendChild(projectTitle)
    sideBar.appendChild(projectFolder)

    // this is where different projects will populate


    return sideBar
}

function createMain() {
    const main = document.createElement('div')
    main.classList.add('main')

    // this is where the todos will populate for a given project
    // main needs a button that will create new todos
    const addTodoForm = document.createElement('form')
    addTodoForm.classList.add('addtodoform')

    const addTodoInput = document.createElement('input')
    addTodoInput.setAttribute('type', 'text')
    
    const addTodoDate = document.createElement('input')
    addTodoDate.classList.add('addtododate')
    addTodoDate.setAttribute('type', 'date')
    
    
    const addTodoBtn = document.createElement('button')
    addTodoBtn.classList.add('addtodobtn')
    addTodoBtn.textContent = "+"
    addTodoBtn.setAttribute('type', 'submit')
    // this button needs to populate a form that when submitted is rendered to the page before the button
    
    addTodoForm.appendChild(addTodoInput)
    addTodoForm.appendChild(addTodoDate)
    addTodoForm.appendChild(addTodoBtn)

    main.appendChild(addTodoForm)
    return main
}

function createFooter(){
    const footer = document.createElement('footer')
    footer.classList.add('footer')


    return footer
}

function createContent(){
    const content = document.createElement('div')
    content.classList.add('content')

    content.appendChild(createSideBar())
    content.appendChild(createMain())

    return content
}

function initializeWebsite(){
    const container = document.getElementById('container')

    container.appendChild(createHeader())
    container.appendChild(createContent())
    container.appendChild(createFooter())
    
    return container
}

export default initializeWebsite