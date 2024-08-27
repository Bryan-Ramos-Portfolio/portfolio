import Image from "next/image";
export default function Home() {
  return (
    <div>
      <div className='flex gap-5 justify-center'>
        <h1>Bryan Ramos</h1>
        <div className="">
          <Image
            src="/portrait.jpg"
            alt="Profile Picture"
            width={400}
            height={400}
            quality={100}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
