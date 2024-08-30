interface ProjectProps {
  demo: string;
  logo: string;
  width: number;
  tech: string[];
}

function Project({ demo, logo, width, tech }: ProjectProps) {
  return (
    <div className="w-[40rem] hover:bg-gray-100 duration-300 mb-10 overflow-hidden h-[30rem] blue-grad group">
      <div className="pl-10">
      
        <img
          className="pt-[4rem] "
          style={{ width: `${width}rem` }}
          src={logo}
          alt="logo"
        />
        <div className='flex    pt-6'>
          {tech.map((item, index) => (
            <p key={index} className=" border-[1px] border-gray-200 px-2 py-1 font-medium bg-white text-gray-300">
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
