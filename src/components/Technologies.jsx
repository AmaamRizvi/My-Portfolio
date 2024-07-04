import { RiReactjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { PiFigmaLogoFill } from "react-icons/pi";
import { FaWordpress } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { motion } from "framer-motion";

const iconVariants = (duration, direction) => ({
  initial: { [direction]: -3 },
  animate: {
    [direction]: [3, -3],
    transition: {
      duration: 1.5,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center items-center gap-4"
      >
        <motion.div
          variants={iconVariants(5, "y")}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(5, "x")}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoJavascript className="text-5xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(6, "y")}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-5xl text-blue-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(4, "x")}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaHtml5 className="text-5xl text-orange-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(7, "y")}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNode className="text-5xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(6, "x")}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-5xl text-green-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(7, "y")}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <PiFigmaLogoFill className="text-5xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4, "x")}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaWordpress className="text-5xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(6, "y")}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoFirebase className="text-5xl text-yellow-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
