import React from 'react';

const Writers = () => {
    return(
      <>
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto">
            <div className="text-center mb-20">
              <h2 className="sm:text-5xl">
                <div className="font-medium title-font mb-4
                bg-gradient-to-r text-[#7950f2]  text-transparent bg-clip-text animate-gradient">
                  Our Prefered Writers
                </div>
              </h2>

              <div className="container px-5 py-16 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <div className="p-4 lg:w-1/4 md:w-1/2">
                    <div className="h-full flex flex-col items-center text-center">
                      <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                        src="src/assets/team/master.jpeg"
                      ></img>
                      <div className="w-full">
                        <h2 className="title-font font-medium text-lg text-green-500">
                          Gustavo Ruiz  (Founder)
                        </h2>
                        <h3 className="text-gray-500 mb-3">Software and Security Engineer</h3>
                        <p className="mb-4">
                          Linux Crazy, Rubyst and like a good coffee like Java
                        </p>
                        <span className="inline-flex">
                      </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 lg:w-1/4 md:w-1/2">
                    <div className="h-full flex flex-col items-center text-center">
                      <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                        src="src/assets/team/neginho.jpeg"
                      ></img>
                      <div className="w-full">
                        <h2 className="title-font font-medium text-lg text-green-500">
                          Gabriel Santos
                        </h2>
                        <h3 className="text-gray-500 mb-3">Web Developer and SCADA/Sage Engineer</h3>
                        <p className="mb-4">
                          Master of react and any think with JS
                        </p>
                        <span className="inline-flex">
                      </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 lg:w-1/4 md:w-1/2">
                    <div className="h-full flex flex-col items-center text-center">
                      <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                        src="src/assets/team/mohamed.jpeg"
                      ></img>
                      <div className="w-full">
                        <h2 className="title-font font-medium text-lg text-green-500">
                          Malcolm Lima
                        </h2>
                        <h3 className="text-gray-500 mb-3">Web Engineer</h3>
                        <p className="mb-4">
                          .NET Evangilist/Advocate and write a good code, like ever indian
                        </p>
                        <span className="inline-flex">
                      </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 lg:w-1/4 md:w-1/2">
                    <div className="h-full flex flex-col items-center text-center">
                      <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                        src="src/assets/team/ericko.jpeg"
                      ></img>
                      <div className="w-full">
                        <h2 className="title-font font-medium text-lg text-green-500">
                          Erick Santos (Change Photo)
                        </h2>
                        <h3 className="text-gray-500 mb-3">The low level guy</h3>
                        <p className="mb-4">
                          Erick love low level thinks, any older language he knows very good
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
}

export default Writers;