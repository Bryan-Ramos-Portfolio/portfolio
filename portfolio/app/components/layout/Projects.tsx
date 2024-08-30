import Project from "../ui/Project"

const projects = [
    {
      prefix: "rootlink",
      images: ["/rootlink_logo.png", "/rootlink_pic.png"],
      width: 15
    },
    {
      prefix: "datastream",
      images: ["/datastream_logo.png", "/datastream_pic.png"],
      width: 12
      
    },
    {
      prefix: "rentshift",
      images: ["/rentshift_logo.png", "/rentshift_pic.png"],
      width: 15

    },
    {
      prefix: "moviemetrics",
      images: ["/movie_logo.png", "/moviemetrics_pic.png"],
      width: 12

    }
  ];
  
function Projects() {
  return (
    <div>
        <h2 className="pb-10 font-semibold">Projects</h2>
        <div className='flex justify-between flex-wrap'>
        {
            projects.map((project, index) => (
                <Project  key={index} width={project.width} demo={project.images[1]} logo={project.images[0]} />
            ))
        }
        </div>
       
    </div>
  )
}

export default Projects