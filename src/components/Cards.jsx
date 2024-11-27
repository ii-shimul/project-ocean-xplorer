import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CardContext } from "../provider/Contexts";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();


const Cards = () => {
  const {cards} = useContext(CardContext);
  return (
    <div id="cards" className="text-white">
      <h1 className="text-center text-4xl font-semibold mb-7 max-sm:text-2xl">
        Explore our adventures
      </h1>
      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1  gap-4 lg:max-w-[85%] max-md:max-w-[90%] mx-auto my-7">
        {cards.map((card) => {
          const { title, id, image, ecoFriendlyFeatures } = card;
          return (
            <div
              data-aos="zoom-in-up"
              class="group relative flex flex-col text-white glass shadow-sm border border-slate-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div class="relative h-[300px] max-sm:h-[250px] object-contain m-2.5 overflow-hidden  rounded-md">
                <img
                  class="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] h-full object-cover w-full transform group-hover:scale-110"
                  src={image}
                  alt="picture-of-the-adventure"
                />
              </div>
              <div class="p-4 max-sm:pt-2">
                <h6 class="mb-2 text-2xl font-semibold">{title}</h6>
                <div class="leading-normal font-light">
                  {ecoFriendlyFeatures.map((feature) => {
                    return <p>{feature}</p>;
                  })}
                </div>
              </div>
              <div class="px-4 pb-4 pt-0 mt-2">
                <Link
                  to={`/details/${id}`}
                  class="btn rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
