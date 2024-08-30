import Project from "../ui/Project"

const projects = [
    {
      prefix: "rootlink",
      images: ["/rootlink_logo.png", "/rootlink_pic.png"],
      width: 15,
      tech: ["TypeScript", "React.js", 'express.js', "Python", "SciKitLearn",  "Flask"]
    },
    {
      prefix: "datastream",
      images: ["/datastream_logo.png", "/datastream_pic.png"],
      width: 12,
      tech: ['SQL', 'Snowflake', 'DBT', 'fivetran', 'google sheets']
      
    },
    {
      prefix: "rentshift",
      images: ["/rentshift_logo.png", "/rentshift_pic.png"],
      width: 15,
      tech: ['React.js', 'hmtl', 'css', 'javascript']

    },
    {
      prefix: "moviemetrics",
      images: ["/movie_logo.png", "/moviemetrics_pic.png"],
      width: 12,
        tech: ['React.js', 'html', 'css', 'javascript']

    }
  ];
  
function Projects() {
  return (
    <div>
        <h2 className="pb-10 font-semibold">Projects</h2>
        <div className='flex justify-between flex-wrap'>
        {
            projects.map((project, index) => (
                <Project  tech={project.tech} key={index} width={project.width} demo={project.images[1]} logo={project.images[0]} />
            ))
        }
        </div>
       
    </div>
  )
}

export default Projects