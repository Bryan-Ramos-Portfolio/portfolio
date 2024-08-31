'use client';

import { useState, useEffect } from 'react';

interface ProjectActiveProps {
  demo: string;
  logo: string;
  width: number;
  tech: string[];
  isExpanded: boolean;
  position: { top: number; left: number };
  onCollapse: () => void;
}

function ProjectActive({ demo, logo, width, tech, isExpanded, position, onCollapse }: ProjectActiveProps) {
  const [isVisible, setIsVisible] = useState(isExpanded);

  useEffect(() => {
    if (isExpanded) {
      setIsVisible(true); // Make the component visible when expanding
    } else {
      // Delay hiding the component until after the collapse animation completes
      setIsVisible(false);
    
    }
  }, [isExpanded]);

  return (
    <div
      className={`fixed z-[95] mb-10 transition-all duration-500 ease overflow-hidden bg-gradient-to-b from-[#ffffff] to-[#CCF9FF] via-[#CCF9FF] hover:bg-gray-100 group ${
        isExpanded ? 'w-screen h-screen' : 'w-[35rem] h-[25rem]'
      }`}
      onClick={onCollapse}
      style={{
        top: isExpanded ? '50%' : `${position.top}px`,
        left: isExpanded
          ? position.left < window.innerWidth / 2
            ? '0%' // Move to the left side
            : '100%' // Move to the right side
          : `${position.left}px`,
        transform: isExpanded
          ? position.left < window.innerWidth / 2
            ? 'translateX(0%) translateY(-50%) scale(1)' // Move left and center vertically
            : 'translateX(-100%) translateY(-50%) scale(1)' // Move right and center vertically
          : 'translate3d(0, 0, 0) scale(1)',
        transformOrigin: position.top < window.innerHeight / 2 ? 'top' : 'bottom',
        visibility: isVisible ? 'visible' : 'hidden',
      
      }}
    >
      <div className={`pl-10 transition-all duration-[500ms] ${isExpanded ? 'translate-y-[-50rem]' : 'invisible'}`}>
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
        className={`w-[30rem] mt-[3rem] m-auto transition-all duration-500 ${isExpanded? 'group-hover:mt-[2rem]' : 'invisible'}`}
        src={demo}
        alt="demo"
      />
    </div>
  );
}

export default ProjectActive;
