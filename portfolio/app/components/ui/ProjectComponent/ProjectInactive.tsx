'use client'
import  { useRef, useEffect, useState } from 'react';

interface ProjectInactiveProps {
  demo: string;
  logo: string;
  width: number;
  tech: string[];
  onExpand: () => void;
  isExpanded: boolean;
  targetRef: React.RefObject<HTMLDivElement>;
}

function ProjectInactive({ demo, logo, width, tech, onExpand, isExpanded, targetRef }: ProjectInactiveProps) {
    const [clear, setClear] = useState(false);

    useEffect(() => {
        if (!isExpanded) {
            setClear(false);
        } else {
            setTimeout(() => {
                setClear(true);
            }, 50);
        }
    })
    
  return (
    <div className="w-[35rem] mb-20 h-[25rem]">
      <div
        ref={targetRef}
        className={`w-[35rem] h-[25rem] mb-10 ${clear ? 'opacity-0' : 'opacity-100'} overflow-hidden bg-gradient-to-b from-[#ffffff] to-[#CCF9FF] via-[#CCF9FF] hover:bg-gray-100 group`}
        onClick={onExpand}
      >
        <div className="pl-10">
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
        <img
          className="w-[30rem] mt-[3rem] m-auto transition-all duration-300 group-hover:mt-[2rem]"
          src={demo}
          alt="demo"
        />
      </div>
    </div>
  );
}

export default ProjectInactive;