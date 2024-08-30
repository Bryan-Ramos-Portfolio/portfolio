
function Cycle({imgs} : {imgs: string[]}) {
    

  return (
    <div className="relative overflow-hidden h-24">
      <div className="flex animate-marquee">
        {[...imgs, ...imgs].map((img, index) => (
          <div key={index} className="flex-shrink-0 mx-4">
            <img
              src={img}
              alt={`Technology ${index}`}
              className="grayscale w-auto h-6 transition-all duration-500 ease-in-out "
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cycle