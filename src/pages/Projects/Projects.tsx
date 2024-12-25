import StartProject from "../Home/StartProject/StartProject"
import Main from "./Main/Main"
import "./Projects.css"
import ProjectsWeBuild from "./ProjectsWeBuild/ProjectsWeBuild"

const Projects = () => {
  return (
    <div className="project-wrapper">
      <Main/>
      <ProjectsWeBuild/>
      <StartProject/>
    </div>
  )
}

export default Projects