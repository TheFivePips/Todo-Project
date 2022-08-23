
export default function setActive(target){
    const projects = document.querySelectorAll('.projectBtn')
    projects.forEach(project => {
        if(project.classList.contains('active')){
            project.classList.remove('active')
        }

    });
    target.classList.add('active')
}