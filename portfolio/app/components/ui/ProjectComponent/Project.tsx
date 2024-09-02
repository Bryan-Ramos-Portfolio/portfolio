'use client'
import { useState, useEffect, useRef } from "react";
import ProjectInactive from "./ProjectInactive";
import ProjectActive from "./ProjectActive";
import ActionButton from "../ActionButton";

interface ProjectProps {
  demo: string;
  logo: string;
  width: number;
  tech: string[];
  title: string;
  body: string[];
  techimgs: string[];
  pics: string[];
}

function Project({
  demo,
  logo,
  width,
  tech,
  title,
  body,
  techimgs,
  pics,
}: ProjectProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);

  const updatePosition = () => {
    if (!isTransitioning) {
      const rect = targetRef.current!.getBoundingClientRect();
      setPosition({ top: rect.top, left: rect.left });
    }
  };

  useEffect(() => {
    updatePosition();
    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [isTransitioning]);

  useEffect(() => {
    if (isExpanded) {
      setIsTransitioning(true);
    } else {
      setIsTransitioning(true);
      const timeoutId = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [isExpanded]);

  return (
    <div className='mb-[4rem]'>
      <ProjectInactive
        demo={demo}
    
        logo={logo}
        width={width}
        tech={tech}
        onExpand={() => setIsExpanded(true)}
        isExpanded={isExpanded || isTransitioning}
        targetRef={targetRef}
      />
      <ProjectActive
        pics={pics}
        title={title}
        body={body}
        techimgs={techimgs}
        demo={demo}
        logo={logo}
        width={width}
        tech={tech}
        isExpanded={isExpanded}
        position={position}
        onCollapse={() => setIsExpanded(false)}
      />
     
      
    </div>
  );
}

export default Project;
