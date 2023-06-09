import { motion } from "framer-motion";
import RightArrow from "./RightArrow";
export default function OurMission() {
  return (
    <>
      <motion.div
        animate={{ y: 200, scale: 1 }}
        initial={{ scale: 0 }}
        transition={{ type: "tween", duration: 0.7 }}
        className="container w-full md:w-[700px] text-center mx-auto px-auto flex flex-col translate-y-44 gap-3 mb-72 "
      >
        <p className="text-lg md:text-2xl text-gray-400 capitalize font-thin">
          our mission
        </p>
        <p className="font-bold text-2xl md:text-6xl text-white">
          We do ordinary stuff for cool people
        </p>
        <p className="text-[19px]  md:text-[32px] text-gray-400 font-thin px-4 md:px-0">
          We are some sort of DAO working with AI, NFT´s, web 4.0 and the so
          called blockchain...in the Metaverse. You don´t understand a word? No
          problem, we neither!
        </p>
        <p>
          <button className="border border-outline bg-white hover:bg-black hover:text-white hover:border px-4 md:px-[60px] md:py-4 text-sm md:text-xl rounded-full text-gray-900 transtion ease-in-out duration-500">
            <div className="flex items-center">
              <div>Join us </div>
              <div>
                {" "}
                <RightArrow />
              </div>
            </div>
          </button>
        </p>
      </motion.div>
    </>
  );
}
