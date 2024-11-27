import React from 'react';
import Cards from './Cards';
import WaveBackground from './WaveBackground';
import MarineLife from './MarineLife';
import WhyChoose from './WhyChoose';

const Home = () => {
  return (
    <>
      <div className="relative pb-7 pt-7">
        <Cards></Cards>
        <div className="absolute inset-0 -z-10 flex justify-center items-center">
          <WaveBackground />
        </div>
      </div>
      <MarineLife></MarineLife>
      <WhyChoose></WhyChoose>
    </>
  );
};

export default Home;