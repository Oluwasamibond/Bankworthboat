import React from "react";
import Boat from "../assets/jaruco-boat.jpg";

const Hero = () => {
  return (
    <section name='home'>
      <div>
        <img
          className="w-full top-0 left-0 object-cover h-screen"
          src={Boat}
          alt=""
        />
        <div className="bg-black/40 absolute top-0 left-0 w-full h-screen" />
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-tertiary ">
          <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
            <h1 className="font-bold text-5xl md:7xl drop-shadow-2xl">
              BankWorth Boats & Engine
            </h1>
            <p className="max-w-[600px] drop-shadow-2 py-2 text-xl">
              A leading provider of boats, ships, yatchs, and engines.
            </p>
            <button className="bg-secondary py-2 mt-2 px-4 font-semibold rounded-md hover:scale-105 transition duration-300 ease-in-out">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
