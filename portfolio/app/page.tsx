"use client";
import Image from "next/image";
import { annotate } from "rough-notation";
import { useRef, useEffect } from "react";

import { createAnnotation } from "./utils";
import Banner from "./components/home/Banner";
import Nav from "./components/layout/Nav";

export default function Home() {
  const titleRef = useRef(null);
  const hireRef = useRef(null);
  const highlightRef = useRef(null);
  useEffect(() => {
    
    createAnnotation(highlightRef, "highlight", 5);
    createAnnotation(titleRef, "underline", 5);
    createAnnotation(hireRef, "circle", 6);

  }, []);
  return (
    <div className="">
      <div className="shade pb-5">
      <Banner />
      <Nav />
      <div className="flex lg:w-[75%] md:w-[85%] 2xs:w-[80%] sm:w-[95%]  m-auto pt-10    gap-10 justify-between ">
        <div className="md:w-[50%] sm:w-[55%] ">
          <h1 className="  text-[1.5rem] font-semibold mb-5  lg:text-[2rem]">
            Im Bryan
            <span className="md:inline   sm:hidden" ref={titleRef}>, A Full-Stack Software Engineer</span> .
          </h1>
          <p className=" lg:text-[1rem]  sm:text-[0.8rem] font-light">
            I'm a passionate Full-Stack Software Engineer and a proud graduate
            of{" "}
            <span className="font-medium">
              <a target='_blank' href="https://www.marcylabschool.org/">The Marcy Lab School</a>
            </span>
            , a fellowship program focused on software engineering.
          </p>
          <p className=" lg:text-[1rem] sm:text-[0.8rem] font-light mt-5">
            My expertise spans <span className="font-semibold">Front-end</span> and <span className="font-semibold">Back-end</span> development, as well as 
            <span className="font-semibold"> data engineering</span>. I love solving complex problems, and continuously
            learning new technologies.
          </p>

          <p className=" lg:text-[1rem] sm:text-[0.8rem] font-light mt-5">
            I am currently looking for a full-time software engineering role. If
            you are interested in working with me, feel free to{" "}
            <span ref={hireRef}>reach out.</span>
          </p>

          <div className="flex  gap-4 mt-5">
            <a target='_blank' href='https://www.linkedin.com/in/bryan-ramos-174826279/' ><button className=" flex  gap-2 bg-gray-900 lg:px-5 lg:py-2 px-3 py-2   lg:text-[1rem] md:text-[0.9rem] text-white rounded hover:opacity-90 duration-200">
              LinkedIn
              <Image  alt='linkedIn logo' className="w-1/4" src='/linkedin.png' width={25} height={20} />
            </button></a>
            <a target='_blank' href='https://github.com/bryanpow'><button className="  flex gap-2 bg-white border lg:text-[1rem] text-[0.9rem] lg:px-5 lg:py-2 px-3 py-2  text-gray-500   rounded hover:opacity-90 duration-200">
              GitHub
              <Image className="lg:w-1/4 md:w-1/4"   alt='linkedIn logo' src='/github.png' width={25} height={20} />
            </button></a>
            
          </div>
        </div>

        <div  className="2xs:hidden  border-white translate-y-[-2rem] sm:inline ">
          <Image
            src="/portrait.png"
            alt="Profile Picture"
            width={470}
            height={550}
            quality={100}
            className=""
          />
        </div>
      </div>
      <div className=" m-auto  pt-10 h-screen w-screen ">
        <div className="w-[75%] m-auto">
        <h1 className="text-[2rem]">Projects</h1>
        </div>
        
      </div>
      </div>
      

      
    </div>
  );
}
