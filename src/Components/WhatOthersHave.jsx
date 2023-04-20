import Rating from "./Rating";
import RatingTwo from "./RatingTwo";

export default function WhatOthersHave() {
  return (
    <>
      <section className="mt-16 flex justify-center pb-20 pl-10 xl:pl-0 pt-20 bg-zinc-900">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 pr-8 ">
          <div className="lg:translate-x-30 xl:translate-x-44  2xl:translate-x-[18.5rem]">
            <div className="card card-compact w-full lg:w-[470px] bg-black shadow-xl rounded-3xl mb-16">
              <div className="px-10 py-12">
                <h2 className="text-2xl md:text-4xl text-white">
                  <Rating />
                </h2>
                <p className=" text-[29px] py-5 font-thin ">
                  "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                  labore et dolore magna aliqua ullamco laboris nisi ut aliquip
                  ex ea commodo consequat."
                </p>
                <hr className="my-4" />
                <div className="flex items-center gap-4 mt-6">
                  <div className="avatar ">
                    <div className="w-20 rounded-full">
                      <img src="https://i.pinimg.com/736x/4f/1e/ec/4f1eec519f1b4d3abb6ed28d1c021dd7.jpg" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xl text-white capitalize font-medium">
                      Jane Doemunsky
                    </p>
                    <p className="text-lg font-thin"> CEO, The Boo Corp.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-compact w-full lg:w-[470px] bg-black shadow-xl  rounded-3xl">
              <div className="px-10 py-12">
                <h2 className="text-2xl md:text-4xl text-white">
                  <RatingTwo />
                </h2>
                <p className=" text-[29px] py-5 font-thin ">
                  "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                  labore et dolore magna aliqua ullamco laboris nisi ut aliquip
                  ex ea commodo consequat."
                </p>
                <hr className="my-4" />
                <div className="flex items-center gap-4 mt-6">
                  <div className="avatar ">
                    <div className="w-20 rounded-full">
                      <img src="https://www.bloovi.be/frontend/files/blog/images/source/lieven-scheire-de-bestrijding-van-de-pandemie-is-momenteel-belangrijker-dan-onze-privacy.jpg" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xl text-white capitalize font-medium">
                      Jane Doemunsky
                    </p>
                    <p className="text-lg font-thin"> COO, The Boo Corp.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:w-96 t md:translate-y-12 xl:translate-x-16 ">
            <h2 className="xl:text-2xl font-thin">What others have to say</h2>
            <p className="md:text-3xl xl:text-6xl text-white">
              Invidunt ut labore et dolore magna aliquyam erat.
            </p>
            <div className="card card-compact w-full lg:w-[470px] bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 shadow-xl mt-14 2xl:mt-32  rounded-3xl lg:mb-5 ">
            
              <div className="px-10 py-12 ">
                <h2 className="text-2xl md:text-4xl text-white">
                  <Rating />
                </h2>
                <p className=" text-[29px] py-5 font-thin text-white">
                  "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                  labore et dolore magna aliqua ullamco laboris nisi ut aliquip
                  ex ea commodo consequat."
                </p>
                <hr className="my-4" />
                <div className="flex items-center gap-4 mt-6">
                  <div className="avatar ">
                    <div className="w-20 rounded-full">
                      <img src="https://cdn.thenewstack.io/media/2020/04/51aeae82-spectro_cloud_tina_nolte.jpg" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xl text-white capitalize font-medium">
                      Jane Doemunsky
                    </p>
                    <p className="text-lg font-thin text-white"> CEO, The Boo Corp.</p>
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
