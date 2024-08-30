import Image from "next/image";
import Hero from "./components/layout/Hero";
import Nav from "./components/layout/Nav";

export default function Home() {
  return (
    <div className="bg-[#151515]  h-screen">
      <Nav />

      <section className=" grad  m-auto">
        <Hero />
      </section>
       {/* Left Side Image */}
       <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <img
          src="/pattern-rings.png"
          alt="Background pattern left"
          className="absolute top-[20%] left-[-10%] w-[600px] h-auto opacity-25"
        />
      </div>

     
      
      
    </div> 
  );
}
