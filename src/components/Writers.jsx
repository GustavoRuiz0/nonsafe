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
                        src="https://raw.githubusercontent.com/GustavoRuiz0/nonsafe_normal_images/main/team/master.jpeg?token=GHSAT0AAAAAACT3CJFP7IM4KMLXSD3MMUPEZW2IULA"
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
                        src="https://raw.githubusercontent.com/GustavoRuiz0/nonsafe_normal_images/main/team/neginho.jpeg?token=GHSAT0AAAAAACT3CJFOF2RCULRDJXX5PBWOZW2IUYA"
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
                        src="https://raw.githubusercontent.com/GustavoRuiz0/nonsafe_normal_images/main/team/mohamed.jpeg?token=GHSAT0AAAAAACT3CJFPZFYFAQA3RMKPADEUZW2IVCQ"
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
                        src="https://raw.githubusercontent.com/GustavoRuiz0/nonsafe_normal_images/main/team/ericko.jpeg?token=GHSAT0AAAAAACT3CJFOMWSI3FPIKG5AGQ5WZW2ITXQ"
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