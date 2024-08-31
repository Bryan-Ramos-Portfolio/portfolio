import Project from "../ui/ProjectComponent/Project";
import { projects } from "./data";


function Projects() {
  return (
    <div>
      <h2 className="pb-10 z-[95] font-semibold">Projects</h2>
      <div className="flex justify-between flex-wrap">
        {projects.map((project, index) => (
          <Project
            title={project.title}
            body={project.body}
            techimgs={project.techimgs}
            tech={project.tech}
            key={index}
            width={project.width}
            demo={project.images[1]}
            logo={project.images[0]}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
