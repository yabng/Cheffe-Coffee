import React from "react";
import set1 from "../assets/set1.png";
import set4 from "../assets/set4.png";
import re1 from "../assets/re1.jpg";
import e1 from "../assets/e.png";
import oc from "../assets/oc.svg";
import cc from "../assets/cc.svg";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
const Reviews = () => {
  return (
    <div id="review">
      <div>
        <div className="flex flex-col justify-between items-center mt-[-7%]">
          <h1 className="text-3xl text-[#432C1F] font-bold font-serif md:text-4xl lg:text-6xl">
            Reviews
          </h1>
        </div>

        <div className=" relative mt-[-7%]">
          <img src={set1} alt="" />
        </div>
      </div>

      <div className="grid ml-[16%] mr-[16%] lg:mt-[-5%] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <img src={re1} alt="" />
        </div>
        <div className=" bg-[#D9D9D9]">
          <div className="flex justify-center">
            <img className="mt-12" src={e1} alt="" />
          </div>

          <div className="relative top-[10%] right-[-5%]">
            <img src={oc} alt="" />
          </div>

          <p className="text-md font-sans1 text-justify ml-[10%] mr-[10%] mt-[5%]">
            I recently tried Cheffe Coffee's medium roast blend and was blown
            away by the smooth and rich flavor. As a coffee enthusiast, I
            appreciate the attention to detail and quality ingredients used in
            each cup.
          </p>
          <div className="relative flex justify-end bottom-[5%] lg:left-[-57%]">
            <img src={cc} alt="" />
          </div>

          <div className="flex gap-2 justify-center">
            <FaTwitterSquare size={25} />{" "}
            <p className="font-bold">Eyob Abreha</p>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            <AiFillStar size={25} color="#D46800" />
            <AiFillStar size={25} color="#D46800" />
            <AiFillStar size={25} color="#D46800" />
            <AiFillStar size={25} color="#D46800" />
            <AiFillStar size={25} color="#D46800" />
          </div>
        </div>
      </div>

      <div className="relative flex justify-end left-3">
        <img src={set4} alt="" />
      </div>
    </div>
  );
};

export default Reviews;
