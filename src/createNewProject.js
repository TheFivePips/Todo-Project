// make the new project btn work
// 	-create an html element that has:
// 		-title
// 		-edit btn
// 		-delete btn
// 	-when you click the project, todos currently on the page should dissappear and todos from that projects todo array should populate
export default function createNewProject(){
    const project = document.createElement('div')
    project.classList.add('project')
    
    const projectBtn = document.createElement('button')
    projectBtn.classList.add('projectBtn')
    projectBtn.textContent = document.getElementById('newProjectName').value
    projectBtn.addEventListener('click', function() {
        console.log("hi");
    })

    const editProjectBtn = document.createElement('button')
    editProjectBtn.classList.add('editProjectBtn')
    // maybe replace with an icon?
    editProjectBtn.textContent = "Edit"

    const deleteProjectBtn = document.createElement('button')
    deleteProjectBtn.classList.add('deleteProjectBtn')
    // replace with an icon?
    deleteProjectBtn.textContent = "Delete"

    project.appendChild(projectBtn)
    project.appendChild(editProjectBtn)
    project.appendChild(deleteProjectBtn)

    return project

}