import React from "react";
import set1 from "../assets/set1.png";
import set2 from "../assets/set2.png";
import set3 from "../assets/set3.png";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";
const Gallary = () => {
  return (
    <div id="gallery">
      <div className="flex flex-col justify-between items-center mt-[10%]">
        <h1 className="text-3xl text-[#432C1F] font-bold font-serif md:text-4xl lg:text-6xl">
          Gallery
        </h1>
        <p className="font-bold text-[#432C1f] text-opacity-70 mt-2 sm:text-lg  md:text-xl lg:text-2xl">
          Our Roastery in Pictures
        </p>
      </div>
      <div>
        <img src={set2} alt="" />
      </div>

      <div className="grid gap-6  mb-6 sm:grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 pl-[10%] pr-[10%]">
        <div className="grid grid-rows-2 gap-5">
          <img src={g1} alt="" />
          <img src={g2} alt="" />
        </div>
        <div>
          <img src={g3} alt="" />
        </div>
        <div className="grid grid-rows-2">
          <img src={g4} alt="" />

          <img className="lg:mt-[-75px]" src={g5} alt="" />
        </div>
      </div>

      <div className="flex flex-col justify-between items-center lg:mt-[-10%] ">
        <div className="w-[300px] h-0.5 bg-black border-solid border-black"></div>
        <p className=" text-[#D46800] font-bold">
          <span className="text-black">+</span> Load More
        </p>
        <div className="w-[300px] h-0.5 bg-black border-solid border-black"></div>
      </div>

      <div className="relative flex justify-end bottom-10">
        <img src={set3} alt="" />
      </div>
    </div>
  );
};

export default Gallary;
