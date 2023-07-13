import React from "react";
import aback from "../assets/aback.jpg";
const About = () => {
  return (
    <div className="w-full h-screen relative" id="about">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src={aback}
        alt=""
      />
      <div className="bg-black/50 absolute top-0 left-0 w-full h-screen" />

      <div className=" absolute  top-32 sm:top-12">
        <h1 className=" font-bold font-mono text-white text-5xl text-center md:text-6xl lg:text-8xl">
          About Us{" "}
        </h1>

        <p className="text-white text-justify text-xl mt-16 ml-12 mr-12 md:text-3xl lg:text-4xl ">
          At Cheffe Coffee, we're passionate about coffee and its unique power
          to connect people and cultures. Our mission is to bring you the best
          coffee from Ethiopia, the birthplace of coffee, with a focus on
          sustainability and ethical sourcing practices. We work directly with
          local farmers and cooperatives to ensure that our coffee is of the
          highest quality, while also supporting the communities that produce
          it. Whether you're a coffee enthusiast or just starting to explore the
          world of specialty coffee, we invite you to join us on this journey
          and experience the richness and diversity of Ethiopian coffee
        </p>

        <div className="flex justify-center">
          <button className="bg-[#D46800] text-white w-64 h-14 rounded-3xl text-2xl text-center sm:mb-9 mt-6 lg:mt-44">
            Tell Our Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
