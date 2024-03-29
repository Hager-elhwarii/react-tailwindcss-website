import { motion } from "framer-motion";
export default function DoYouLike() {
  return (
    <>
      <section className="bg-zinc-900 w-full lg:mt-0 px-8 md:px-0 pt-12">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 xl:py-5 ">
          <motion.div
            initial={{ x: -100, opacity: 0.1 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 1 }}
            className="md:ml-52"
          >
            <img
              className="w-full object-cover h-96 rounded-3xl brightness-75 hover:brightness-100 transition-all ease-in duration-500 cursor-pointer"
              src="https://avatars.mds.yandex.net/i?id=d87bb45f979a825573ce18834fb5ddada18cf4a1_l-9106738-images-thumbs&ref=rim&n=13&w=800&h=800"
            />
            <img
              className="mt-12 xl:mt-0 w-full object-cover h-96 rounded-3xl md:-z-0 xl:-translate-y-14 xl:translate-x-10 mb-10 lg:mb-0 brightness-75 hover:brightness-100 transition-all ease-in duration-500 cursor-pointer"
              src="https://www.wallofcelebrities.com/celebrity/darien-willardson/pictures/original/darien-willardson_2959442.jpg"
            />
          </motion.div>
          <div className="md:mt-40 md:w-72 -order-1 md:-order-none">
            <h2 className="text-lg md:text-2xl font-thin">
              Do you like faces?
            </h2>
            <p className="text-2xl md:text-5xl text-white">
              We constantly adding new images to our website. Does it make
              sense? No!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
