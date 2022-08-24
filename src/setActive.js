
export default function setActive(projectHtml){
    const projects = document.querySelectorAll('.project')
    projects.forEach(project => {
        if(project.classList.contains('active')){
            project.classList.remove('active')
        }

    });
    projectHtml.classList.add('active')
}