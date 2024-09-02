"use client";

import { useState, useEffect } from "react";

interface ProjectActiveProps {
  demo: string;
  logo: string;
  width: number;
  tech: string[];
  techimgs: string[];
  title: string;
  body: string[];
  isExpanded: boolean;
  position: { top: number; left: number };
  onCollapse: () => void;
  pics: string[];
}

function ProjectActive({
  demo,
  logo,
  width,
  tech,
  isExpanded,
  position,
  onCollapse,
  body,
  title,
  techimgs,
  pics,
}: ProjectActiveProps) {
  const [isVisible, setIsVisible] = useState(isExpanded);


  
  useEffect(() => {
    if (isExpanded) {
      setIsVisible(true); // Make the component visible when expanding
    } else {
      setTimeout(() => {
        setIsVisible(false);
      }, 200);
    }
  }, [isExpanded]);

  return (
    <div
      className={`fixed z-[95] mb-10 transition-all  duration-[500ms] ease-in-out overflow-hidden bg-gradient-to-b from-[#ffffff] to-[#CCF9FF] via-[#CCF9FF] hover:bg-gray-100 group ${
        isExpanded ? "w-screen h-screen" : "w-[35rem] h-[25rem]"
      }`}
      style={{
        top: isExpanded ? "50%" : `${position.top}px`,
        left: isExpanded
          ? position.left < window.innerWidth / 2
            ? "0%" // Move to the left side
            : "100%" // Move to the right side
          : `${position.left}px`,
        transform: isExpanded
          ? position.left < window.innerWidth / 2
            ? "translateX(0%) translateY(-50%) scale(1)" // Move left and center vertically
            : "translateX(-100%) translateY(-50%) scale(1)" // Move right and center vertically
          : "translate3d(0, 0, 0) scale(1)",
        transformOrigin:
          position.top < window.innerHeight / 2 ? "top" : "bottom",
        visibility: isExpanded ? "visible" : "hidden",
      }}
    >
      <div
        className={`pl-10 transition-all duration-[500ms] ${
          isExpanded ? "translate-y-[-10rem] opacity-0" : "invisible"
        }`}
      >
        <img
          className="pt-[4rem]"
          style={{ width: `${width}rem` }}
          src={logo}
          alt="logo"
        />
        <div className="flex pt-6">
          {tech.map((item, index) => (
            <p
              key={index}
              className="border-[1px] border-gray-200 px-2 text-[0.8rem] font-medium bg-white text-gray-300"
            >
              {item.toUpperCase()}
            </p>
          ))}
        </div>
      </div>
      {isVisible && (
        <div className="m-auto absolute inset-0 flex gap-10   w-[50rem] ">
            <div>
            <div className="pt-[5rem]">
            <div
              className="p-2 w-[45px] h-auto  hover:invert rounded-full duration-300 hover:bg-white flex items-center justify-center "
              onClick={onCollapse}
            >
              <img
                src="/arrow.png "
                className="animate-fade-in2 "
                style={{ width: "100%", height: "100%" }}
                alt="Arrow"
              />
            </div>

            <div
              className={`${
                isExpanded ? "animate-slide-in" : "animate-slide-out"
              }`}
            >
              <img
                className="pt-5"
                style={{ width: `${width / 2}rem` }}
                src={logo}
                alt="logo"
              />
              <h2 className="text-black  hover:underline text-[2rem] pt-2  w-[50%] font-extrabold">
                {title} 
              </h2>

              <p className="text-black font-bold text-[0.8rem] pt-10">
                Technologies Used
              </p>
              <div className="flex w-[40%] flex-wrap gap-5 pt-5">
                {techimgs.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    className="w-auto h-5 "
                    alt="tech"
                  />
                ))}
              </div>
            </div>
          </div>

          <div
            className={` transition-all duration-[200ms] ${
              isExpanded ? "opacity-100 " : " opacity-0"
            } w-[50%]  absolute top-[15%] left-[50%] text-black leading-[0.5rem] text-[0.8rem]`}
          >
            <p className=" animate-fade-in text-black">{body[0]}</p>
            <p className=" animate-fade-in text-black">{body[1]}</p>
          </div>
          <div className={` ${isExpanded? "animate-slide-in-up" : 'animate-slide-out-down'}`}>
          <h3 className={` text-black ${logo === '/movies_logo'?  'mt-[10%]' : 'mt-[8%]'} mb-5`}>Images</h3>
          <div className={`flex gap-10   `}>
          
                    {pics?.map((pic, index) => {
                        return (
                            <img
                                key={index}
                                src={pic}
                                className="w-[33%] h-[auto] "
                                alt="pic"
                            />
                        );
                    })}
                </div>
             </div>
         
                </div>

                
          
        </div>
      )}
      <img
        className={`w-[30rem] mt-[3rem] m-auto transition-all  duration-[500ms]  ${
          isExpanded
            ? "  translate-x-[80vw] opacity-0 group-hover:mt-[2rem] "
            : "invisible"
        }`}
        src={demo}
        alt="demo"
      />
    </div>
  );
}

export default ProjectActive;
