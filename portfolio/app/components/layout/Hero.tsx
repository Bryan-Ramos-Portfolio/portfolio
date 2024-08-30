import Image from "next/image";
import ActionButton from "../ui/ActionButton";
import TechSection from "./TechSection";
function Hero() {
  return (
    <div className="border-b w-[80%] m-auto">
                <div className="flex   m-auto  pb-[4rem] justify-between">
      <div className="pt-[10rem] w-[60%]">
        <h1>Nice to meet you!</h1>
        <h1>
          Im{" "}
          <span className="border-b-[0.5rem]  border-[#CCF9FF]  ">
            Bryan Ramos.
          </span>
        </h1>

        <p className="pt-14 font-thin w-[50%]">
          I'm a Software Engineer specializing in both <span className="font-bold text-[#CCF9FF]">front-end</span>  and
          <span className='font-bold text-[#CCF9FF]'> back-end development</span>, as well as <span className="font-bold text-[#CCF9FF]">data engineering</span>.
        </p>
        <div className="pt-14">
          <ActionButton text="contact me" href="/" />
        </div>

        
      </div>

      <div className="relative overflow-hidden w-[450px] h-[600px]">
  <img
    src="/portrait.png"
    alt="me"
    className="absolute grayscale hover:grayscale-0 transition-all duration-500  w-full h-full object-cover animate-moveWithin"
  />
</div>

    </div>
    <TechSection />
    </div>
    
  );
}

export default Hero;
