import React from 'react';

const Writers = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="text-center mb-5">
            <h2 className="sm:text-5xl">
              <div className="font-medium title-font mb-4 text-green-500">
                Our Starter Writers
              </div>
            </h2>

            <div className="px-5 py-16 mx-auto">
              <div className="flex flex-wrap -m-4 justify-center">
                <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
                  <div className="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center mb-4"
                      src="https://raw.githubusercontent.com/GustavoRuiz0/nonsafe_normal_images/main/team/master.jpeg?raw=true"
                    ></img>
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-green-500">
                        Gustavo Ruiz (Founder)
                      </h2>
                      <h3 className="text-gray-500 mb-3">Software and Security Engineer</h3>
                      <p className="mb-4">
                        Linux Crazy, Rubyst and like a good coffee like Java
                      </p>
                      <span className="inline-flex"></span>
                    </div>
                  </div>
                </div>

                <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
                  <div className="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center mb-4"
                      src="https://raw.githubusercontent.com/GustavoRuiz0/nonsafe_normal_images/main/team/neginho.jpeg?raw=true"
                    ></img>
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-green-500">
                        Gabriel Santos
                      </h2>
                      <h3 className="text-gray-500 mb-3">Web Developer and SCADA/Sage Engineer</h3>
                      <p className="mb-4">
                        Master of React and any think with JS/TS
                      </p>
                      <span className="inline-flex"></span>
                    </div>
                  </div>
                </div>

                <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
                  <div className="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center mb-4"
                      src="https://raw.githubusercontent.com/GustavoRuiz0/nonsafe_normal_images/main/team/mohamed.jpeg?raw=true"
                    ></img>
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-green-500">
                        Malcolm Lima
                      </h2>
                      <h3 className="text-gray-500 mb-3">Web Engineer</h3>
                      <p className="mb-4">
                        .NET Evangelist/Advocate and write a good code, like ever indian working on a big tech
                      </p>
                      <span className="inline-flex"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Writers;
