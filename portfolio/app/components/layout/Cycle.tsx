import Marquee from "react-fast-marquee";
function Cycle({imgs} : {imgs: string[]}) {
    

  return (
    <div className="relative overflow-hidden h-24">
      <Marquee gradient={true} gradientColor="rgba(255, 255, 255, 0.03)" gradientWidth={50}  pauseOnHover={true} className="">
        {[...imgs, ...imgs].map((img, index) => (
          <div key={index} className="flex-shrink-0 mx-4">
            <img
              src={img}
              alt={`img ${index}`}
              className="grayscale w-auto h-6 transition-all duration-500 ease-in-out "
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Cycle