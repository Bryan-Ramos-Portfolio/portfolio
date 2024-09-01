import Image from "next/image";
import Hero from "./components/layout/Hero";
import Nav from "./components/layout/Nav";
import TechSection from "./components/layout/TechSection";
import Projects from "./components/layout/Projects";

export default function Home() {
  return (
    <div className="bg-[#151515]  h-full  ">
      <Nav />

      <section className=" grad  m-auto">
        <Hero />
        
      </section>
      <div className='w-[80%] pt-10 m-auto'>
        <Projects />
      </div>
      <div className="absolute z-1001 top-0 left-0 w-full h-full pointer-events-none">
        <img
          src="/pattern-rings.png"
          alt="Background pattern"
          className="absolute top-[15%] left-[-10%] w-[600px] h-auto opacity-25"
        />
      </div>


     
      
      
      
      
    </div> 
  );
}
