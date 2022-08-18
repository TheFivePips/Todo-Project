// this is the base webstie with no todos or projects
// it needs to build the framework for the rest of the sites functionality
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

    // project folder should have an add-folder button of some sort

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