import React from "react";
import { assets } from "../assets/data";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="max-padd-container">
      <div className="bg-[url('/src/assets/bg.png')] bg-cover bg-center bg-no-repeat h-[89vh] w-full mt-18 rounded-2xl relative">
        <div className="p-3">
          <div className="lg:w-3.5/4 md:w-2/3 ">
            <h1 className="h1 !font-[400] capitalize mt-2">
              Enhance Your
              <span className="font-bold"> Look</span> with
              <span className="font-bold"> Glam</span> Essentials
            </h1>
            <p>
              Discover premium beauty with our cosmetic collection, crafted to
              enhance your natural glow, boost confidence, and deliver flawless
              elegance every day with trusted, affordable products.
            </p>
            <div className="flex">
              <Link to={"/collection"} className=" bg-secondary text-white text-xs font-medium capitalize pl-5 rounded-full flexCenter gap-x-2 mt-7 group">
                check Our Modern Collections{" "}
                <img src={assets.forward}  alt="" className="bg-white rounded-full flexCenter p-1 m-1 group-hover:translate-x-3 transition-all duration-500 shadow-lg sm:text-[10px]" />
              </Link>
            </div>
          </div>
          <div className="max-w-65 mt-10 space-y-4 bg-white rounded-2xl p-2">
            <div >
              <img
                src={assets.hero}
                className="h-30 object-cover w-full rounded-2xl "
                alt=""
              />
            </div>
            <p className="">
              <b className="uppercase">Unloack</b>
              your best look, one click at a time, Your style upgrade starts
              here, shop today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
