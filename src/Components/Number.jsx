import { useState } from "react";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


export default function Number() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div
          className="hero h-[1130px] relative xl:w-[1280px] mx-auto rounded-3xl  "
          style={{
            backgroundImage: `url("https://10wallpaper.com/wallpaper/2560x1600/1610/Ocean_underwater_blu_rays-HD_Retina_Wallpaper_2560x1600.jpg")`,
          }}
        >
          <div className="absolute bg-black rounded-3xl ">
            <section className=" lg:mt-0 px-8 md:px-0 pt-12 rounded-3xl">
              <div className="mx-auto grid grid-cols-1 md:grid-cols-2 g xl:py-5 ">
                <div>
                  <div className="card card-compact w-full lg:w-[470px] bg-zinc-900 shadow-xl rounded-3xl mb-16 2xl:translate-x-20">
                    <figure>
                      <img
                        className="w-full  scale-100 hover:scale-110 cursor-pointer transition ease-in-out duration-700"
                        src="https://i.imgur.com/eYAKRCB.jpeg"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="px-10  mx-auto  2xl-h-full">
                      <p className="text-2xl py-10 leading-9 px-0 2xl-px-16 text-center text-white font-normal">
                        "Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr, sed diam nonumy eirmod tempor invidunt ut labore
                        et dolore magna aliquyam erat, sed diam voluptua. At
                        vero eos et accusam et justo duo dolores et ea rebum.
                        Stet clita kasd gubergren, no sea takimata sanctus est
                        Lorem ipsum dolor sit amet."
                        <hr className="w-[310px] mx-auto my-6" />
                        <span className="font-thin">Jane Doe, CEO</span>
                      </p>
                      <div className="card-actions justify-start"></div>
                    </div>
                  </div>
                </div>
                <div className=" pl-20 w-[540px] translate-y-24 h-[560px]">
                  <h2 className="text-2xl font-thin mb-2">The numbers</h2>
                  <p className="text-5xl font-bold text-white pb-3">
                  + {counterOn && <CountUp start={0} end={400} duration={2} delay={0} />}
                  </p>
                  <p className="text-3xl font-thin ">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                  <hr className="w-[350px] my-10 " />
                  <p className="text-5xl font-bold text-white pb-3">
                  {counterOn && <CountUp start={0} end={78981} duration={2} delay={0} />}
                  </p>
                  <p className="text-3xl font-thin">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                  <hr className="w-[350px] my-10 " />
                  <p className="text-5xl font-bold text-white pb-3">
                  {counterOn && <CountUp start={0} end={98} duration={2} delay={0} />}%
                  </p>
                  <p className="text-3xl font-thin ">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
}
