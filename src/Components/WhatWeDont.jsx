import { motion } from "framer-motion";
export default function WhatWeDont() {
  return (
    <>
      <section className="-mt-80 flex justify-center pb-20 pl-10 xl:pl-0">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 pr-8 ">
          <div className="lg:translate-x-30 xl:translate-x-44  2xl:translate-x-[17.2rem]">
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "tween", duration: 0.4 }}
              className="card card-compact w-full lg:w-[470px] bg-zinc-900 shadow-xl rounded-3xl mb-16"
            >
              <figure>
                <img
                  className="w-full md:h-72 scale-100 hover:scale-110 cursor-pointer transition ease-in-out duration-700"
                  src="https://themewagon.github.io/klar/img/webp/abstract3.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="px-10 py-12">
                <h2 className="text-2xl md:text-4xl text-white">
                  Ipsum dolor est test
                </h2>
                <p className=" text-xl py-5 ">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat.
                </p>
                <div className="card-actions justify-start">
                  <button className="font-bold text-white underline underline-offset-8 text-xl pt-6">
                    Read more
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "tween", duration: 0.4 }}
              className="card card-compact w-full lg:w-[470px] bg-zinc-900 shadow-xl  rounded-3xl"
            >
              <figure>
                <img
                  className="w-full md:h-72 scale-100 hover:scale-110 cursor-pointer transition ease-in-out duration-700"
                  src="https://themewagon.github.io/klar/img/webp/abstract2.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="px-10 py-12">
                <h2 className="text-2xl md:text-4xl text-white">
                  Ipsum dolor est test2
                </h2>
                <p className=" text-xl py-5 ">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat.
                </p>
                <div className="card-actions justify-start">
                  <button className="font-bold text-white underline underline-offset-8 text-xl pt-6">
                    Read more
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
          <div className=" lg:w-96 t md:translate-y-12 xl:translate-x-6 ">
            <h2 className="xl:text-2xl font-thin">What we don´t know</h2>
            <p className="md:text-3xl xl:text-6xl text-white">
              There is a lot we don´t know. Here is a small sneak peek
            </p>
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "tween", duration: 0.4 }}
              className="card card-compact w-full lg:w-[470px] bg-zinc-900 shadow-xl mt-14 2xl:mt-32  rounded-3xl lg:mb-5"
            >
              <figure>
                <img
                  className="w-full md:h-72 scale-100 hover:scale-110 cursor-pointer transition ease-in-out duration-700"
                  src="https://themewagon.github.io/klar/img/webp/abstract17.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="px-10 py-12">
                <h2 className="text-2xl md:text-4xl text-white">
                  Ipsum dolor est
                </h2>
                <p className=" text-xl py-5 ">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat.
                </p>
                <div className="card-actions justify-start">
                  <button className="font-bold text-white underline underline-offset-8 text-xl pt-6">
                    Read more
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "tween", duration: 0.2 }}
              className="card card-compact w-full lg:w-[470px] bg-zinc-900 shadow-xl mt-16 rounded-3xl"
            >
              <figure>
                <img
                  className="w-full md:h-72 scale-100 hover:scale-110 cursor-pointer transition ease-in-out duration-700"
                  src="https://www.psdgraphics.com/file/colorful-triangles-background.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="px-10 py-12">
                <h2 className="text-2xl md:text-4xl text-white">
                  Ipsum dolor est
                </h2>
                <p className=" text-xl py-5 ">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat.
                </p>
                <div className="card-actions justify-start">
                  <button className="font-bold text-white underline underline-offset-8 text-xl pt-6">
                    Read more
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
