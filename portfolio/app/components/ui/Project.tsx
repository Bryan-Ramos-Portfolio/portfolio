interface ProjectProps {
  demo: string;
  logo: string;
  width: number;
  tech: string[];
}

function Project({ demo, logo, width, tech }: ProjectProps) {
  return (
    <div className="w-[40rem] hover:bg-gray-100 duration-300 mb-10 overflow-hidden h-[30rem] bg-[#CCF9FF] group">
      <div className="pl-10">
      
        <img
          className="pt-[4rem] "
          style={{ width: `${width}rem` }}
          src={logo}
          alt="logo"
        />
        <div className='flex    pt-6'>
          {tech.map((item, index) => (
            <p key={index} className=" border-r border-gray-200 px-2 font-medium bg-white text-gray-400">
              {item.toUpperCase()}
            </p>
          ))}
        </div>
      </div>

      <img
        className="w-[35rem] mt-[5rem] m-auto transition-all duration-500 group-hover:mt-[4rem]"
        src={demo}
        alt="demo"
      />
    </div>
  );
}

export default Project;
