import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import clw from "../assets/clw.png";
const Header = () => {
  const [nav, setNav] = useState(false);

  const handelNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" absolute w-full flex justify-between items-center max-w-[1240px]">
      <div className="mt-9 ml-24">
        <img className=" " src={logo} alt="/" />
      </div>

      <ul className="hidden md:flex flex justify-between gap-8 pr-48 font-bold text-xl ">
        <li>
          {" "}
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="products" smooth={true} duration={500}>
            Products
          </Link>
        </li>
        <li>
          {" "}
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          {" "}
          <Link to="gallery" smooth={true} duration={500}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="review" smooth={true} duration={500}>
            Review
          </Link>
        </li>
        <li>
          {" "}
          <Link to="contact" smooth={true} duration={500}>
            Contact Us
          </Link>
        </li>
      </ul>

      <div onClick={handelNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300"
            : "fixed left-[-100%]"
        }
      >
        <img src={clw} alt="" />
        <ul className="pt-24 uppercase p-4 gap-5 ">
          <li className="text-white">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="text-white">
            <Link to="products" smooth={true} duration={500}>
              Products
            </Link>
          </li>
          <li className="text-white">
            {" "}
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="text-white">
            {" "}
            <Link to="gallery" smooth={true} duration={500}>
              Gallery
            </Link>
          </li>
          <li className="text-white">
            <Link to="review" smooth={true} duration={500}>
              Review
            </Link>
          </li>
          <li className="text-white">
            {" "}
            <Link to="contact" smooth={true} duration={500}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
