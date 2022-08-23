
export default function setActive(){
    const projects = document.querySelectorAll('.projectBtn')
    projects.forEach(project => {
        if(project.classList.contains('active')){
            project.classList.remove('active')
        }

    });
    this.classList.add('active')
}