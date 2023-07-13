import React from "react";
import heroback from "../assets/heroback.jpg";



const Hero = () => {
  return (
    <div className="w-full h-screen" id="home">
      <img
        className="top-0 left-0 w-full h-screen object-fill"
        src={heroback}
        alt="/"
      />
      <div className=" absolute flex-col justify-center top-[40%] ml-24">
        <h1 className="text-3xl text-[#432C1F] font-bold font-serif md:text-4xl lg:text-6xl ">
          From Farm To Cup{" "}
        </h1>
        <p className="font-bold text-[#432C1f] text-opacity-70 mt-2 sm:text-xl  md:text-2xl lg:text-4xl">
          Discover the Diffrence of Our <br /> Sustinable-Sourced Coffe
        </p>
        <button className="bg-[#D46800] text-white w-36 h-10 rounded-3xl text-2xl mt-6">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
