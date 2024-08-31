'use client'
import { useState, useEffect, useRef } from 'react';
import ProjectInactive from './ProjectInactive';
import ProjectActive from './ProjectActive';

interface ProjectProps {
  demo: string;
  logo: string;
  width: number;
  tech: string[];
}

function Project({ demo, logo, width, tech }: ProjectProps) {
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
    window.addEventListener('scroll', updatePosition);
    window.addEventListener('resize', updatePosition);
    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isTransitioning]); // Dependency on isTransitioning
  
  useEffect(() => {
    if (!isExpanded) {
      // When collapsing, set transitioning to true and delay position update
      setIsTransitioning(true);
      const timeoutId = setTimeout(() => {
        setIsTransitioning(false);
      }, 400); // Adjust the delay to match your animation duration
  
      return () => clearTimeout(timeoutId); // Cleanup timeout if component unmounts or state changes
    } else {
      setIsTransitioning(true);
    }
  }, [isExpanded]);

  return (
    <>
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
        demo={demo}
        logo={logo}
        width={width}
        tech={tech}
        isExpanded={isExpanded}
        position={position}
        onCollapse={() => setIsExpanded(false)}
      />
    </>
  );
}

export default Project;
