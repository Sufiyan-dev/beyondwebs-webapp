import './ProjectsWeBuild.css'

const projects = [
    {
        id: 1,
        name: "HiBear",
        thumbnail: "./images/ProjectsWeBuild/hi-bear.png",
        link: "#"
    },
    {
        id: 2,
        name: "Torch",
        thumbnail: "./images/ProjectsWeBuild/torch.png",
        link: "#"
    },
    {
        id: 3,
        name: "Raw Cereal",
        thumbnail: "./images/ProjectsWeBuild/raw-cereal.png",
        link: "#"
    }, {
        id: 4,
        name: "First Gen",
        thumbnail: "./images/ProjectsWeBuild/first-gen.png",
        link: "#"
    },
    {
        id: 5,
        name: "ZAZA THC",
        thumbnail: "./images/ProjectsWeBuild/zaza-thc.png",
        link: "#"
    },
    {
        id: 6,
        name: "Jivati",
        thumbnail: "./images/ProjectsWeBuild/jivati.png",
        link: "#"
    }
]

const ProjectsWeBuild = () => {
  return (
    <div className='projects-we-build-wrapper'>
        <div className='projects-we-build-main'>
            { projects.map((project) => (
                <div key={project.id} className='project-we-build-project'>
                    <h1><a href={project.link}>{project.name}</a></h1>
                    <img src={project.thumbnail}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProjectsWeBuild