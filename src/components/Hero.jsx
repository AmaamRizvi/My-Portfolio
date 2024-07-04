import { HERO_CONTENT } from "../constants/index";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="full flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="pb-6 text-6xl font-thin tracking-tight lg:mt-1 lg:text-6xl"
            >
              Amaam Rizvi
            </motion.h1>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-[5vh] tracking-tight text-transparent"
            >
              Web Developer
            </motion.span>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-20">
          <div className="flex justify-center -mt-4">
            <motion.img
              className="rounded-2xl"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src="https://b1286009.smushcdn.com/1286009/wp-content/uploads/2023/03/shutterstock_1536573392_ceb9ca05b899bf6c89effe999489c2f6_2000-1024x682.jpg?lossy=1&strip=1&webp=1"
              alt="Kevin Rush"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
