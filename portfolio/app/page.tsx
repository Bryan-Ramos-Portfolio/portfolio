"use client";
import Image from "next/image";
import { annotate } from "rough-notation";
import { useRef, useEffect } from "react";

import { createAnnotation } from "./utils";

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
    <div className="w-[75%] m-auto pt-10">
      <div className="flex gap-10 justify-between ">
        <div className="w-[50%]">
          <h1 className="font-semibold mb-5  text-[2rem]">
            Im Bryan, A{" "}
            <span ref={titleRef}> Full-Stack Software Engineer</span> .
          </h1>
          <p className=" font-light">
            I'm a passionate Full-Stack Software Engineer and a proud graduate
            of{" "}
            <span className="font-medium">
              <a href="https://www.marcylabschool.org/">The Marcy Lab School</a>
            </span>
            , a fellowship program focused on software engineering.
          </p>
          <p className=" font-light mt-5">
            My expertise spans <span className="font-semibold">Front-end</span> and <span className="font-semibold">Back-end</span> development, as well as 
            <span className="font-semibold"> data engineering</span>. I love solving complex problems, and continuously
            learning new technologies.
          </p>

          <p className=" font-light mt-5">
            I am currently looking for a full-time software engineering role. If
            you are interested in working with me, please feel free to{" "}
            <span ref={hireRef}>reach out.</span>
          </p>

          <div className="flex gap-4 mt-5">
            <a target='_blank' href='https://www.linkedin.com/in/bryan-ramos-174826279/' ><button className=" flex gap-2 bg-gray-900 px-5 py-2 text-white rounded hover:opacity-90 duration-200">
              LinkedIn
              <Image  alt='linkedIn logo' src='/linkedin.png' width={25} height={20} />
            </button></a>
            <a target='_blank' href='https://github.com/bryanpow'><button className=" flex gap-2 bg-white border px-5 py-2 text-gray-500  rounded hover:opacity-90 duration-200">
              GitHub
              <Image  alt='linkedIn logo' src='/github.png' width={25} height={20} />
            </button></a>
            
          </div>
        </div>

        <div className="">
          <Image
            src="/portrait.jpg"
            alt="Profile Picture"
            width={450}
            height={500}
            quality={100}
            className="rounded-md shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
