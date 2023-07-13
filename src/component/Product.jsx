import React from "react";
import r1 from "../assets/r1.jpg";
import r3 from "../assets/r3.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import rback from "../assets/Rback.png";
import rec from "../assets/Rec.jpg";
import da from '../assets/da.svg'

const Product = () => {
  return (
    <div id='products'>
      <div className="flex flex-col justify-center items-center pt-20">
        <h1 className="text-2xl text-[#432C1F] font-bold font-serif md:text-3xl lg:text-4xl">
          OUR ROAST PROFILES
        </h1>
        <span className="font-bold text-[#432C1f] text-opacity-70 text-sm mt-2 md:text-sm lg:text-sm">
          Discover the Diffrence of Our Sustinable-Sourced Coffee
        </span>
      </div>

      <div>
        <img src={icon2} alt="" />
      </div>

      <div className="grid justify-center ml-8 mr-8 gap-9 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* 1 */}
        <div className=" w-68">
          <div className="relative ml-10">
            <img src={rback} alt="" />
            <div className=" absolute top-5 left-12">
              <img src={r1} alt="" />
            </div>
          </div>
          <div className="relative ml-10">
            <img src={rec} alt="" />
            <div className="absolute top-0  left-2 flex ">
              <p className="font-bold">Ligh Rosted</p>
              <p className="absolute ml-44 font-bold">$250</p>
            </div>
            <div className="absolute top-0 ">
              <p className=" mt-6 ml-2 font-bold text-[#432C1f] text-opacity-70 text-[12px] ">
                Lighty roasted to retain the unique
                <br />
                flavours and charaterstic coffee
              </p>
            </div>
            <div className="flex justify-center">
                <img src={da} alt="" />
            </div>
          </div>
        </div>

        {/* 2 */}
        <div>
          <div className="relative ml-10">
            <img src={rback} alt="" />
            <div className=" absolute top-5 left-12">
              <img src={r3} alt="" />
            </div>
          </div>
          <div className="relative ml-10">
            <img src={rec} alt="" />
            <div className="absolute top-0  left-2 flex ">
              <p className="font-bold">Ligh Rosted</p>
              <p className="absolute ml-44 font-bold">$250</p>
            </div>
            <div className="absolute top-0 ">
              <p className=" mt-6 ml-2 font-bold text-[#432C1f] text-opacity-70 text-[12px] ">
                Lighty roasted to retain the unique
                <br />
                flavours and charaterstic coffee
              </p>
            </div>
            <div className="flex justify-center">
                <img src={da} alt="" />
            </div>
          </div>
        </div>

        {/* 3 */}

        <div>
          <div className="relative ml-10">
            <img src={rback} alt="" />
            <div className=" absolute top-5 left-12">
              <img src={r1} alt="" />
            </div>
          </div>
          <div className="relative ml-10">
            <img src={rec} alt="" />
            <div className="absolute top-0  left-2 flex ">
              <p className="font-bold">Ligh Rosted</p>
              <p className="absolute ml-44 font-bold">$250</p>
            </div>
            <div className="absolute top-0 ">
              <p className=" mt-6 ml-2 font-bold text-[#432C1f] text-opacity-70 text-[12px] ">
                Lighty roasted to retain the unique
                <br />
                flavours and charaterstic coffee
              </p>
            </div>
            <div className="flex justify-center">
                <img src={da} alt="" />
            </div>
          </div>
        </div>
        {/* 4 */}

        <div>
          <div className="relative ml-10">
            <img src={rback} alt="" />
            <div className=" absolute top-5 left-12">
              <img src={r3} alt="" />
            </div>
          </div>
          <div className="relative ml-10">
            <img src={rec} alt="" />
            <div className="absolute top-0  left-2 flex ">
              <p className="font-bold">Ligh Rosted</p>
              <p className="absolute ml-44 font-bold">$250</p>
            </div>
            <div className="absolute top-0 ">
              <p className=" mt-6 ml-2 font-bold text-[#432C1f] text-opacity-70 text-[12px] ">
                Lighty roasted to retain the unique
                <br />
                flavours and charaterstic coffee
              </p>
            </div>
            <div className="flex justify-center">
                <img src={da} alt="" />
            </div>
          </div>
        </div>

      </div>

      <div className="relative flex justify-end bottom-28">
            <img src={icon1} alt="" />
        </div>
    </div>
  );
};

export default Product;
