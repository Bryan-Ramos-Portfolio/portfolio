import Image from "next/image";
import ActionButton from "../ui/ActionButton";
function Hero() {
  return (
    <div className="flex border-b w-[80%] m-auto  pb-[3rem] justify-between">
      <div className="pt-[12rem] w-[60%]">
        <h1>Nice to meet you!</h1>
        <h1>
          Im{" "}
          <span className="border-b-[0.5rem]  border-[#CCF9FF]">
            Bryan Ramos.
          </span>
        </h1>

        <p className='pt-14 w-[50%]'>
          I'm a Full-Stack Software Engineer specializing in front-end and back-end development, as
          well as data engineering. 
          </p>
        <div className='pt-14'>
        <ActionButton text='contact me' href='/' />
        </div>
          
      </div>

      <div className="">
        <Image
          className="grayscale hover:grayscale-0 transition-all duration-300"
          src="/portrait.png"
          quality={100}
          width={450}
          height={200}
          alt="me"
        ></Image>
      </div>
    </div>
  );
}

export default Hero;
