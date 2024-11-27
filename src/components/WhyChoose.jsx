import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const WhyChoose = () => {
  return (
    <div>
      <section className="bg-gradient-to-b from-teal-900 via-teal-700 to-teal-500 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-600"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">
            Why Choose Us?
          </h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            <div
              data-aos="flip-left"
              className="bg-white/20 backdrop-blur-md rounded-lg shadow-lg p-6 hover:scale-105 hover:shadow-[0_4px_20px_rgba(0,255,255,0.6)] transition-transform text-center"
            >
              <div className="bg-teal-300 bg-opacity-40 text-white w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl font-bold mb-4">
                🌍
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Eco-Friendly Practices
              </h3>
              <p className="text-gray-300">
                We’re committed to preserving the ocean while providing
                unforgettable adventures.
              </p>
            </div>

            <div
              data-aos="flip-up"
              className="bg-white/20 backdrop-blur-md rounded-lg shadow-lg p-6 hover:scale-105 hover:shadow-[0_4px_20px_rgba(0,255,255,0.6)] transition-transform text-center"
            >
              <div className="bg-teal-300 bg-opacity-40 text-white w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl font-bold mb-4">
                🛡️
              </div>
              <h3 className="text-lg font-semibold mb-2">Safety First</h3>
              <p className="text-gray-300">
                Your safety is our priority, with professional guides and
                top-notch equipment.
              </p>
            </div>

            <div
              data-aos="flip-right"
              className="bg-white/20 backdrop-blur-md rounded-lg shadow-lg p-6 hover:scale-105 hover:shadow-[0_4px_20px_rgba(0,255,255,0.6)] transition-transform text-center"
            >
              <div className="bg-teal-300 bg-opacity-40 text-white w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl font-bold mb-4">
                🌊
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Unmatched Experiences
              </h3>
              <p className="text-gray-300">
                Discover unique diving spots and create memories that last a
                lifetime.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl mb-5">
              Join us for a journey to explore the depths of the ocean and make
              unforgettable memories.
            </p>
            <a
              href="#cards"
              className="btn bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
            >
              Book Your Adventure Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChoose;
