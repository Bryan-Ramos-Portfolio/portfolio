interface ProjectProps {
    demo: string;
    logo: string;
    width: number;
  }
  
  function Project({ demo, logo, width }: ProjectProps) {
    return (
      <div className="w-[40rem] hover:bg-gray-100 duration-300 mb-10 overflow-hidden h-[30rem] bg-[#CCF9FF] group">
        <img className="pl-10 pt-[5rem]" style={{ width: `${width}rem` }} src={logo} alt="logo" />
        <img
          className="w-[35rem] mt-[5rem] m-auto transition-all duration-500 group-hover:mt-[4rem]"
          src={demo}
          alt="demo"
        />
      </div>
    );
  }
  
  export default Project;