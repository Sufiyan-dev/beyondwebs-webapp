import './ProjectsWeBuild.css'

const projects = [
    {
        id: 1,
        name: "HiBear",
        thumbnail: "./images/ProjectsWeBuild/hi-bear.png"
    },
    {
        id: 2,
        name: "Torch",
        thumbnail: "./images/ProjectsWeBuild/torch.png"
    },
    {
        id: 3,
        name: "Raw Cereal",
        thumbnail: "./images/ProjectsWeBuild/raw-cereal.png"
    }, {
        id: 4,
        name: "First Gen",
        thumbnail: "./images/ProjectsWeBuild/first-gen.png"
    },
    {
        id: 5,
        name: "ZAZA THC",
        thumbnail: "./images/ProjectsWeBuild/zaza-thc.png"
    },
    {
        id: 6,
        name: "Jivati",
        thumbnail: "./images/ProjectsWeBuild/jivati.png"
    }
]

const ProjectsWeBuild = () => {
  return (
    <div className='projects-we-build-wrapper'>
        <div className='projects-we-build-main'>
            { projects.map((project) => (
                <div key={project.id} className='project-we-build-project'>
                    <h1>{project.name}</h1>
                    <img src={project.thumbnail}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProjectsWeBuild