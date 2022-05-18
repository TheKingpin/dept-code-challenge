import React from "react";

const HeroImage = () => {
  return (
    <div className="container max-w-full w-full">
      <div className="flex relative z-10">
        <div className="absolute top-0 left-0 w-full h-full grid grid-rows-3">
          <div className="flex row-span-2">
            <h2 className="font-sans uppercase text-[40vw] pl-4">
              Work
            </h2>
          </div>
          <div className="flex row-span-1 p-4">
            <div className=" bg-[#C4C4C4] w-full h-full"></div>
          </div>
        </div>
        <img src="/images/hero-image.jpg" alt="Hero Image" />
      </div>
      <div className="container mx-auto">
        <div className="bg-[#0C0C0C] m-4 flex items-center justify-center h-14">
          <h3 className="text-white font-body uppercase font-bold">
            View Case
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
