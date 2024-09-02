import Project from "../ui/ProjectComponent/Project";
import { projects } from "./data";


function Projects() {
  return (
    <div className="relative">
      <h2 className="pb-10 z-[95] font-semibold">Projects</h2>
      <div className="flex justify-between flex-wrap">
        {projects.map((project, index) => (
          <Project
          pics={project.pics}
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
      <div className="absolute z-[1002] w-full top-[85%] left-[80%] pointer-events-none">
    <img
      src="/pattern-rings.png"
      alt="Background pattern"
      className="w-[600px] h-auto opacity-25"
    />
  </div>
    </div>
  );
}

export default Projects;
