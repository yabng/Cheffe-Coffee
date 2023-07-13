import React from "react";
import bc from "../assets/bc.jpg";
import clw from "../assets/clw.png";
import { FaMapPin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { BsFillTelephoneFill, BsTelegram } from "react-icons/bs";

import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

const Contact = () => {
  return (
    <div className=" relative text-white" id="contact">
      <img
        className="top-0 left-0 w-full h-screen object-cover md:h-[480px] sm:h-[300px] lg:h-[300px]"
        src={bc}
        alt=""
      />

      <div className=" absolute w-full h-full top-0">
        <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-[10%] mr-[10%]">
          <div className=" flex flex-col items-center mt-3  ">
            <img src={clw} alt="" />
            <div className="flex mt-3">
              <FaMapPin size={25} />
              <p>Bole Medhanialem, Addis Ababa, Ethiopia</p>
            </div>
            <div className="flex mt-3">
              <GrMail size={25} />
              <p>Cheffecoffe@gmail.com</p>
            </div>

            <div className="flex mt-3">
              <BsFillTelephoneFill size={25} />
              <p>+251-9-73-66-22-45</p>
            </div>
          </div>
          <div className="text-center font-sans1 font-bold  mt-6">
            <h1 className="text-3xl font-montserrat">Information</h1>
            <ul className=" flex flex-col gap-4 font-bold mt-4">
              <li>Coffee beans</li>
              <li>contact Us</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className=" mt-6">
            <h1 className=" text-center font-sans1 font-bold text-2xl">
              Follow US
            </h1>
            <p className="font-bold text-center mt-4"> Let's Get Social</p>

            <div className="flex gap-4 justify-center mt-6">
              <AiFillTwitterSquare size={30} />
              <AiFillFacebook size={30} />
              <BsTelegram size={30} />
              <AiOutlineInstagram size={30} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between items-center lg:mt-[-3%] ">
        <div className="w-[80%] h-0.5 bg-white border-solid border-white"></div>
        <p className=" text-white ">
          Copyright © 2023 Cheffe Coffee. All rights reserved Presented By the
          Designer
        </p>
      </div>
    </div>
  );
};

export default Contact;
