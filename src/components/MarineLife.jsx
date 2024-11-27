import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const MarineLife = () => {
  return (
    <div>
      <section className="w-full bg-gradient-to-b from-[#3d9194] via-blue-600 to-blue-800 text-white py-16">
        <div className="max-md:max-w-[90%] max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Explore Marine Life</h2>
          <p className="mb-8">
            Dive into an underwater world filled with vibrant marine creatures.
            Here’s a glimpse of the ocean's wonders waiting for you!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              data-aos="zoom-out-left"
              className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(0,255,255,0.6)]"
            >
              <div className="h-[180px] max-sm:h-[230px] max-md:h-[230px] mb-3 object-contain">
                <img
                  src="https://www.thesprucepets.com/thmb/wDeRwAdKFebaZByN_uLVLX45n9Y=/2542x0/filters:no_upscale():strip_icc()/GettyImages-1134104736-97ebbc8333b3490ea4674eb0b3ef85d0.jpg"
                  alt="Clownfish"
                  className="w-full h-full object-cover rounded-md mb-4"
                />
              </div>

              <h3 className="text-lg font-semibold mb-2">Clownfish</h3>
              <p>
                Swim alongside playful clownfish in their vibrant coral homes.
              </p>
            </div>
            <div
              data-aos="zoom-out-bottom"
              className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(0,255,255,0.6)]"
            >
              <div className="h-[180px] max-sm:h-[230px] max-md:h-[230px] mb-3 object-contain">
                <img
                  src="https://marinesanctuary.org/wp-content/uploads/2021/11/FKNMS-GreenSeaTurtle-Diver-OliviaWilliamson-scaled.jpg"
                  alt="Sea Turtle"
                  className="w-full h-full object-cover rounded-md mb-4"
                />
              </div>

              <h3 className="text-lg font-semibold mb-2">Sea Turtle</h3>
              <p>
                Spot majestic sea turtles gracefully gliding through the waters.
              </p>
            </div>
            <div
              data-aos="zoom-out-right"
              className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(0,255,255,0.6)]"
            >
              <div className="h-[180px] max-sm:h-[230px] max-md:h-[230px] mb-3 object-contain">
                <img
                  src="https://www.dolphinsandyou.com/wp-content/uploads/DolphinStories.png"
                  alt="Dolphins"
                  className="w-full h-full object-cover rounded-md mb-4"
                />
              </div>

              <h3 className="text-lg font-semibold mb-2">Dolphins</h3>
              <p>Witness pods of dolphins playing in the ocean currents.</p>
            </div>
            <div
              data-aos="zoom-out-left"
              className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(0,255,255,0.6)]"
            >
              <div className="h-[180px] max-sm:h-[230px] max-md:h-[230px] mb-3 object-contain">
                <img
                  src="https://cdn-fhofj.nitrocdn.com/YLARnxovRxHnoSTcLUnkvhePKVxPqkls/assets/images/optimized/rev-82a9287/www.ecowatch.com/wp-content/uploads/2024/02/coral-reef-colorful.jpg"
                  alt="Coral Reef"
                  className="w-full h-full object-cover rounded-md mb-4"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">Coral Reef</h3>
              <p>
                Explore colorful coral reefs teeming with diverse marine life.
              </p>
            </div>
            <div
              data-aos="zoom-out-up"
              className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(0,255,255,0.6)]"
            >
              <div className="h-[180px] max-sm:h-[230px] max-md:h-[230px] mb-3 object-contain">
                <img
                  src="https://friendofthesea.org/wp-content/uploads/whale-shark-snorkelling-fos-sustainable-certification-medium-1.jpg"
                  alt="Whale Shark"
                  className="w-full h-full object-cover rounded-md mb-4"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">Whale Shark</h3>
              <p>
                Swim alongside the gentle giants of the sea, the whale sharks.
              </p>
            </div>
            <div
              data-aos="zoom-out-right"
              className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105 hover:shadow-[0_4px_20px_rgba(0,255,255,0.6)]"
            >
              <div className="h-[180px] max-sm:h-[230px] max-md:h-[230px] mb-3 object-contain">
                <img
                  src="https://www.techexplorist.com/wp-content/uploads/2024/03/jellyfish.jpg"
                  alt="Jellyfish"
                  className="w-full h-full object-cover rounded-md mb-4"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">Jellyfish</h3>
              <p>
                Marvel at the hypnotic movements of luminous jellyfish in the
                deep.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarineLife;
