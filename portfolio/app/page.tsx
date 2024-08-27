import Image from "next/image";
export default function Home() {
  return (
    <div>
      <div className='flex gap-5 justify-center'>
        <h1>Bryan Ramos</h1>
        <div>
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
