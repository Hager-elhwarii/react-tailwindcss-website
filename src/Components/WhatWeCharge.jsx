import { motion } from "framer-motion";
import RightArrow from "./RightArrow";

export default function WhatWeCharge() {
  return (
    <>
    <section>
      <div className=" grid grid-cols-1 lg:grid-cols-2 my-24 md:-translate-x-32 lg:gap-5 xl:gap-8 px-10">
        <motion.div
          initial={0}
          whileInView={{ x:[-100,0], opacity: [0.1, 1] }}
          transition={{ type: "tween", duration: 1}}
         className="text-left lg:text-right -mt-12 md:mt-16 md:ml-52 lg:ml-[300px] 2xl:ml-[380px] mb-12 sm:mb-8  ">
          <h3 className="font-thin text-3xl">What we charge</h3>
          <p className="md:text-4xl xl:text-6xl text-white leading-3 ">
            You get all our knowledge for one simple price
          </p>
        </motion.div>
        <motion.div
          initial={0}
          whileInView={{ x:[100,0], opacity: [0.1, 1] }}
          transition={{ type: "tween", duration: 1}}
         className="md:w-[490px] xl:w-[630px] bg-zinc-900 rounded-3xl text-center py-12 px-[45px] min-[768px]:max-[990px]:ml-52">
          <h2 className="text-2xl text-white pb-4 md:pb-14">
            $
            <span className="text-6xl font-bold underline underline-offset-8">
              499
            </span>
            /day
          </h2>
          <p className="text-xl md:text-[1.8rem] font-thin leading-10 mb-6 text-gray-350">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="bg-white px-4 md:px-[60px] md:py-4 text-sm md:text-xl rounded-full text-gray-800 ">
            <div className="flex items-center">
              <div>Sign up</div>
              <div>
                {" "}
                <RightArrow />
              </div>
            </div>
          </button>
        </motion.div>
      </div>
      </section>
    </>
  );
}
