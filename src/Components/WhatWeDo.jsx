import { motion } from "framer-motion";
import RoundedRightArrow from "./RoundedRightArrow";

export default function WhatWeDo() {
  return (
    <>
      <section

       className="bg-transparent lg:bg-zinc-900 w- md:h-[1050px] h-[795px] min-[350px]:max-[475px]:h-[920px] -translate-y-[400px]  -z-20 md:pr-12  px-10 md:px-0 ">
        <div className="w-full mt-52 md:mt-0 md:translate-y-[350px] translate-y-52 grid grid-cols-1 lg:grid-cols-2 min-[768px]:max-[792px]:grid-cols-1 mx-auto xl:translate-x-12 gap-10 ">
          <motion.div
           initial={0}
           whileInView={{ x:[-100,0], opacity: [0.1, 1] }}
           transition={{ type: "tween", duration: 2}}
           className=" text-left lg:text-right mt-12 md:mt-0  md:ml-48 md:-translate-x-32 lg:-translate-x-0 ">
            <h3 className="w-full font-thin text-3xl">what we do</h3>
            <p className="w-full  md:text-2xl 2xl:text-6xl text-white ">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </motion.div>
          <motion.div 
            initial={0}
            whileInView={{ x:[100,0], opacity: [0.1, 1] }}
            transition={{ type: "tween", duration: 2}}
          className="md:w-[400px] w-full md:translate-x-16 lg:translate-x-0 ">
            <h2 className="text-xl lg:text-4xl  text-white mb-4">
              Product Design & Strategy
            </h2>
            <p className="md:text-xl">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <div className="flex items-center">
              <div>
                {" "}
                <a className="text-white md:text-2xl underline underline-offset-8">
                  Tell me more
                </a>
              </div>
              <div>
                {" "}
                <RoundedRightArrow />
              </div>
            </div>
            <hr className="my-8 md:my-12 sm:w-20 xl:w-full" />
            <h2 className="text-xl lg:text-4xl  text-white  mb-4">
              Development & Engineering
            </h2>
            <p className="md:text-xl">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <div className="flex items-center">
              <div>
                {" "}
                <a className="text-white md:text-2xl underline underline-offset-8">
                  Tell me more
                </a>
              </div>
              <div>
                {" "}
                <RoundedRightArrow />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
