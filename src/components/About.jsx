import React from "react";
import Img from "../assets/Boat.jpg";

const About = () => {
  return (
    <section name='about' className="bg-tertiary">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        <div className="flex justify-center items-center">
          <img
            src={Img}
            alt="dank image"
            className="w-[400px] md:max-w-[400px] h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px] md:ml-10">
            <h1 className="text-3xl lg:text-3xl font-semibold uppercase text-secondary inline border-b-4 border-primary">
              About
            </h1>
            <p>
              Our company, Bankworth Boats & Engines, is a leading provider of
              boatss, ships, yachts, and engines. With over 20 years of
              experience in the marine industry, we have built a reputation for
              excellence in quality and customer services. Our extensive
              inventory includes a wide range of vessels and engines to suit
              every need and budget. Whether you're looking for a small fishing
              boat or a luxurious yacht, we have the perfect option for you.
              <br />
              <br />
              Our team of knowledgeable sales professionals is dedicated to
              helping our customers find the right vessel and engine to meet
              their specific requirements. We work closely with top
              manufacturers to inspire that our inventory is always up-to-date
              with the latest models and technology. We pride ourselves on
              providing not only top-quality products but also exceptional
              after-sales support and maintenance services. When you choose us
              as a marine supplier, you can be rest assured that you're getting
              the best in the industry
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
