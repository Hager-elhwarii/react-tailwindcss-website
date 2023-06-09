import { motion } from "framer-motion";
import RoundedRightArrow from "./RoundedRightArrow";

export default function WhatWeDo() {
  return (
    <>
      <section className=" bg-zinc-900 w- md:h-[1050px] h-[795px] min-[350px]:max-[475px]:h-[920px] -translate-y-[400px]  -z-20 md:pr-12  px-10 md:px-0  ">
        <div className="md:pl-32  lg:pl-0  w-full mt-52 md:mt-0 md:translate-y-[350px] translate-y-52 grid grid-cols-1 lg:grid-cols-2 min-[768px]:max-[792px]:grid-cols-1 mx-auto xl:translate-x-12 gap-10 ">
          <motion.div
            initial={{ x: -40, opacity: 0.1 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 2}}
            className=" text-left lg:text-right mt-12 md:mt-0   lg:ml-48  "
          >
            <h3 className="w-full font-thin text-3xl">what we do</h3>
            <p className="w-full sm:w-50 xl:w-full  md:text-2xl 2xl:text-6xl text-white ">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 40, opacity: 0.1 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 2 }}
            className=" md:ml-0 md:w-[400px] w-full md:translate-x-16  xl:translate-x-0 "
          >
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
                <a className="text-white md:text-2xl underline underline-offset-8 cursor-pointer hover:text-gray-400 transtion ease-in-out duration-500">
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
                <a className="text-white md:text-2xl underline cursor-pointer underline-offset-8 hover:text-gray-400 transtion ease-in-out duration-500 ">
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
