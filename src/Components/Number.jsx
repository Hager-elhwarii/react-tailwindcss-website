import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Number() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div
          className="hero md:h-[1090px] relative xl:w-[1280px] mx-auto  rounded-3xl mb-20"
          style={{
            backgroundImage: `url("https://10wallpaper.com/wallpaper/2560x1600/1610/Ocean_underwater_blu_rays-HD_Retina_Wallpaper_2560x1600.jpg")`,
          }}
        >
          <div className="absolute bg-transparent md:bg-black rounded-3xl">
            <section className="lg:mt-0 px-8 md:px-0 pt-12 rounded-3xl">
              <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-10 xl:py-5 x translate-y-60 md:translate-y-0 ">
                <div className="md:-translate-x-24 xl:translate-x-0 translate-y-64 md:translate-y-0 ">
                  <div className="md:translate-x-40 card card-compact w-full lg:w-[470px] bg-zinc-900 shadow-xl rounded-3xl mb-16 2xl:translate-x-20">
                    <figure>
                      <img
                        className="w-full  scale-100 hover:scale-110 cursor-pointer transition ease-in-out duration-700"
                        src="https://tenmania.com/wp-content/uploads/2019/09/ayo-ogunseinde-THIs-cpyebg-unsplash.jpg"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="lg:px-10  mx-auto  2xl-h-full">
                      <p className="text-[16px] md:text-2xl py-6 md:leading-9 px-4 2xl-px-16 text-center text-white font-normal">
                        "Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr, sed diam nonumy eirmod tempor invidunt ut labore
                        et dolore magna aliquyam erat, sed diam voluptua. At
                        vero eos et accusam et justo duo dolores et ea rebum.
                        Stet clita kasd gubergren, no sea takimata sanctus est
                        Lorem ipsum dolor sit amet."
                      </p>
                      <hr className="w-[200px] md:w-[310px] mx-auto " />
                      <span className="font-thin py-5 flex justify-center">
                        Jane Doe, CEO
                      </span>
                      <div className="card-actions justify-start"></div>
                    </div>
                  </div>
                </div>
                <div className="mx-auto  -order-1 md:order-none xl:pl-20 xl:w-[540px]  h-[560px] translate-y-[350px] md:translate-y-0">
                  <h2 className="text-2xl font-thin mb-2">The numbers</h2>
                  <p className="text-3xl md:text-5xl font-bold text-white pb-3">
                    +{" "}
                    {counterOn && (
                      <CountUp start={0} end={400} duration={2} delay={0} />
                    )}
                  </p>
                  <p className="md:text-3xl font-thin ">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                  <hr className="w-full lg:w-[350px] my-10 " />
                  <p className="text-3xl md:text-5xl font-bold text-white pb-3">
                    {counterOn && (
                      <CountUp start={0} end={78981} duration={2} delay={0} />
                    )}
                  </p>
                  <p className="md:text-3xl font-thin">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                  <hr className="w-full lg:w-[350px] my-10 " />
                  <p className=" text-3xl md:text-5xl font-bold text-white pb-3">
                    {counterOn && (
                      <CountUp start={0} end={98} duration={2} delay={0} />
                    )}
                    %
                  </p>
                  <p className="md:text-3xl font-thin ">
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
