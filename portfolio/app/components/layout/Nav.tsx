import Image from "next/image";

type Media = {
  src: string;
  href: string;
};

function Nav() {
  const media: Media[] = [
    { src: "/github.png", href: "https://github.com/bryanpow" },
    { src: "/linkedin.png", href: "https://www.linkedin.com/in/bryan-ramos-174826279/" },
    { src: "/email.png", href: "mailto:ramosbusiness544@gmail.com" },
  ];

  return (
    <nav className="absolute z-[1000] top-0 left-0 w-full pt-10">
      <div className="w-[80%] flex justify-between m-auto">
        <Image
          quality={100}
          src="/portfolio_logo.png"
          width={65}
          height={65}
          alt="logo"
        />

        <div className="flex gap-5">
          {media.map((item, index) => (
            <a target="_blank" href={item.href} key={index}>
              <Image src={item.src} quality={100} width={25} height={30} alt="media" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Nav;

