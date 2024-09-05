import React from 'react';
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="body-font lg:pt-20 bg-black text-green-500">
      <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
        <div className="flex flex-col w-full mb-2 text-left md:text-center ">
          <h1 className="mb-2 text-6xl font-bold tracking-tighter text-green-500 lg:text-8xl md:text-7xl">
            <span>Why ever software is unsafe? </span>
            <br className="hidden lg:block"></br>
            Hacking and Programming articles
          </h1>
        </div>
      </div>
      <section className="text-gray-600 body-font">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="title-font font-medium sm:text-5xl text-3xl text-green-500">
                  <CountUp end={940} redraw={true}>
                  </CountUp>
                </h2>
                <p className="leading-relaxed">Users</p>
              </div>
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="title-font font-medium sm:text-5xl text-3xl text-green-500">
                  <CountUp end={740} redraw={true}>
                  </CountUp>
                </h2>
                <p className="leading-relaxed">Subscribes</p>
              </div>
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-green-500">
                  <CountUp end={315} redraw={true}>
                  </CountUp>
                </h2>
                <p className="leading-relaxed">Downloads</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  )
};

export default Hero;