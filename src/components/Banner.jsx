import "animate.css";

const Banner = () => {
  return (
    <div className="carousel w-full max-h-screen max-sm:min-h-[290px] shadow-2xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1682687981922-7b55dbb30892?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full object-cover"
        />

        <div class="absolute flex flex-col text-white items-center text-center justify-center max-sm:justify-end max-sm:pb-10 h-full w-full bg-black bg-opacity-50">
          <h1 class="animate__animated animate__backInRight text-6xl mb-4 max-sm:text-4xl max-sm:mb-2 max-md:text-5xl max-md:mb-3">
            Discover the Depths
          </h1>
          <p>
            <span className="text-xl opacity-70 max-sm:text-lg">
              "Uncover Hidden Worlds Beneath the Waves"
            </span>
            <br />
            <span className="text-sm opacity-50 max-sm:text-xs">
              Experience the thrill of exploring vibrant coral reefs and ancient
              shipwrecks.
            </span>
          </p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between max-sm:left-2 max-sm:right-2">
          <a href="#slide4" className="btn btn-circle glass max-sm:btn-xs">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle glass max-sm:btn-xs">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full object-cover"
        />

        <div class="absolute flex flex-col text-white items-center text-center justify-center max-sm:justify-end max-sm:pb-10 h-full w-full bg-black bg-opacity-50">
          <h1 class="animate__animated animate__bounce text-6xl mb-4 max-sm:text-4xl max-sm:mb-2 max-md:text-5xl max-md:mb-3">
            Breathe the Ocean
          </h1>
          <p>
            <span className="text-xl opacity-70 max-sm:text-lg">
              "Find Serenity Below the Surface"
            </span>
            <br />
            <span className="text-sm opacity-50 max-sm:text-xs">
              Let the calm embrace of the ocean rejuvenate your soul.
            </span>
          </p>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between max-sm:left-2 max-sm:right-2">
          <a href="#slide1" className="btn btn-circle glass max-sm:btn-xs">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle glass max-sm:btn-xs">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1519327567471-ae47752b8089?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full"
        />
        <div class="absolute flex flex-col text-white items-center text-center justify-center max-sm:justify-end max-sm:pb-10 h-full w-full bg-black bg-opacity-50">
          <h1 class="text-6xl mb-4 max-sm:text-4xl max-sm:mb-2 max-md:text-5xl max-md:mb-3">
            Dive Into Adventure
          </h1>
          <p>
            <span className="text-xl opacity-70 max-sm:text-lg">
              "Plunge Into an Ocean of Possibilities"
            </span>
            <br />
            <span className="text-sm opacity-50 max-sm:text-xs">
              Swim alongside majestic marine life and discover uncharted
              underwater beauty.
            </span>
          </p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between max-sm:left-2 max-sm:right-2">
          <a href="#slide2" className="btn btn-circle glass max-sm:btn-xs">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle glass max-sm:btn-xs">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1588443980446-c66dabfb278f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full object-cover"
        />
        <div class="absolute flex flex-col text-white items-center text-center justify-center max-sm:justify-end max-sm:pb-10 h-full w-full bg-black bg-opacity-50">
          <h1 class="text-6xl mb-4 max-sm:text-4xl max-sm:mb-2 max-md:text-5xl max-md:mb-3">
            Eco-Friendly
          </h1>
          <p>
            <span className="text-xl opacity-70 max-sm:text-lg">
              "Protect What You Love"
            </span>
            <br />
            <span className="text-sm opacity-50 max-sm:text-xs">
              Join us in eco-conscious diving adventures that preserve the
              beauty of our oceans.
            </span>
          </p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between max-sm:left-2 max-sm:right-2">
          <a href="#slide3" className="btn btn-circle glass max-sm:btn-xs">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle glass max-sm:btn-xs">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
