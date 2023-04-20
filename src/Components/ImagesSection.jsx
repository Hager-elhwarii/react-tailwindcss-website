import { motion } from "framer-motion";

export default function ImagesSection() {
  return (
    <>
      <div className="w-full container flex flex-wrap mx-auto gap-5 my-32 min-[1280px]:max-[1535px]:justify-center justify-evenly z-40 relative px-12 md:px-0">
        <motion.div
        initial={0}
        whileInView={{ y:[200,0], opacity: [0.1, 1] }}
        transition={{ type: "tween", duration: 1}}
        viewport={{ once: true }}
       
      // initial={{ y:200 }}
      // whileInView={{ y:-3, opacity: [0.6, 1]}}
      // transition={{ duration: 4, ease: "easeInOut" }}

      // transition={{ type: "spring", duration: 4 }}

          // whileInView={{ y:-3, opacity: [0.1, 1] }}
          // animate={{ y: [200, -3,0], }}
        >
          <img
            className="md:h-[480px] w-full md:w-[700px] rounded-3xl"
            src="https://themewagon.github.io/klar/img/webp/abstract18.webp"
            alt=""
          />
        </motion.div>
        <motion.div
        initial={0}
        whileInView={{ y:[200,0], opacity: [0.1, 1] }}
        transition={{ type: "tween", duration: 1}}
        viewport={{ once: true }}
       
        >
          <img
            className="md:h-[400px] w-full md:w-[300px] rounded-3xl md:translate-x-1 translate-y-10"
            src="https://themewagon.github.io/klar/img/webp/abstract6.webp"
            alt=""
          />
        </motion.div>
        <motion.div
        initial={0}
        whileInView={{ y:[200,0], opacity: [0.1, 1] }}
        transition={{ type: "tween", duration: 1}}
        viewport={{ once: true }}
        
        className="flex md:items-center">
          <img
            className="mt-20 md:mt-0 md:h-[200px] w-full md:w-[300px] rounded-3xl  "
            src="https://themewagon.github.io/klar/img/webp/abstract9.webp"
            alt=""
          />
        </motion.div>
      </div>
    </>
  );
}
