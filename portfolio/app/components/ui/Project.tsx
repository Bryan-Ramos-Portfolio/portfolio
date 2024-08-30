'use client';
import { useState, useEffect,useRef } from "react";

interface ProjectProps {
  demo: string;
  logo: string;
  width: number;
  tech: string[];
}

function Project({ demo, logo, width, tech }: ProjectProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const targetRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const updatePosition = () => {
    const rect = targetRef.current.getBoundingClientRect();
    setPosition({ top: rect.top, left: rect.left });
  };

  useEffect(() => {
    updatePosition();
    window.addEventListener('scroll', updatePosition);
    window.addEventListener('resize', updatePosition);
    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, []);
  return (
    <div className=" w-[35rem]   mb-20 h-[25rem]">
      <div
      ref={targetRef}
        className={`w-[35rem] h-[25rem] mb-10  ${isExpanded && 'opacity-0'}  ease-in-out overflow-hidden bg-gradient-to-b from-[#ffffff] to-[#CCF9FF] via-[#CCF9FF] hover:bg-gray-100 group`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="pl-10">
          <img
            className="pt-[4rem]"
            style={{ width: `${width}rem` }}
            src={logo}
            alt="logo"
          />
          <div className="flex pt-6 space-x-2">
            {tech.map((item, index) => (
              <p
                key={index}
                className="border-[1px] border-gray-200 px-2 text-[0.8rem] font-medium bg-white text-gray-300 rounded"
              >
                {item.toUpperCase()}
              </p>
            ))}
          </div>
        </div>

        <img
          className="w-[30rem] mt-[3rem] m-auto transition-all duration-500 group-hover:mt-[2rem]"
          src={demo}
          alt="demo"
        />
      </div>


      <div
  className={`fixed z-[95] mb-10 transition-all duration-500 ease overflow-hidden bg-gradient-to-b from-[#ffffff] to-[#CCF9FF] via-[#CCF9FF] hover:bg-gray-100 group ${
    isExpanded ? 'w-screen h-screen visible' : 'w-[35rem] invisible h-[25rem]'
  }`}
  onClick={() => setIsExpanded(!isExpanded)}
  style={{
    top: isExpanded ? '50%' : `${position.top}px`,
    left: isExpanded
      ? position.left < window.innerWidth / 2
        ? '0%'  // Move to the left side
        : '100%' // Move to the right side
      : `${position.left}px`,
    transform: isExpanded
      ? position.left < window.innerWidth / 2
        ? 'translateX(0%) translateY(-50%) scale(1)' // Move left and center vertically
        : 'translateX(-100%) translateY(-50%) scale(1)' // Move right and center vertically
      : 'translate3d(0, 0, 0) scale(1)',
    transformOrigin: position.top < window.innerHeight / 2 ? 'top' : 'bottom',
  }}
>

        <div className="pl-10">
          <img
            className="pt-[4rem]"
            style={{ width: `${width}rem` }}
            src={logo}
            alt="logo"
          />
          <div className="flex pt-6 space-x-2">
            {tech.map((item, index) => (
              <p
                key={index}
                className="border-[1px] border-gray-200 px-2 text-[0.8rem] font-medium bg-white text-gray-300 rounded"
              >
                {item.toUpperCase()}
              </p>
            ))}
          </div>
        </div>

        <img
          className="w-[30rem] mt-[3rem] m-auto transition-all duration-500 group-hover:mt-[2rem]"
          src={demo}
          alt="demo"
        />
      </div>
    </div>
  );
}

export default Project;