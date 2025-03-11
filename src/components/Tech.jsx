import {
  BiLogoBootstrap,
  BiLogoCss3,
  BiLogoDjango,
  BiLogoHtml5,
  BiLogoPython,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { motion } from "framer-motion";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32]"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Technologies
      </motion.h1>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-10 p-5"
        initial="hidden"
        whileInView="visible"
        variants={variants}
        transition={{ duration: 0.6, delayChildren: 0.3, staggerChildren: 0.2 }}
      >
        {/* React Icon */}
        <motion.div>
          <BiLogoReact
            className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
            aria-label="React Logo"
          />
        </motion.div>

        {/* HTML5 Icon */}
        <motion.div>
          <BiLogoHtml5
            className="cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
            aria-label="HTML5 Logo"
          />
        </motion.div>

        {/* CSS3 Icon */}
        <motion.div>
          <BiLogoCss3
            className="cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
            aria-label="CSS3 Logo"
          />
        </motion.div>

        {/* Bootstrap Icon */}
        <motion.div>
          <BiLogoBootstrap
            className="cursor-pointer text-[80px] text-purple-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
            aria-label="Bootstrap Logo"
          />
        </motion.div>

        {/* Python Icon */}
        <motion.div>
          <BiLogoPython
            className="cursor-pointer text-[80px] text-green-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
            aria-label="Python Logo"
          />
        </motion.div>

        {/* Django Icon */}
        <motion.div>
          <BiLogoDjango
            className="cursor-pointer text-[80px] text-green-700 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
            aria-label="Django Logo"
          />
        </motion.div>

        {/* Tailwind CSS Icon */}
        <motion.div>
          <BiLogoTailwindCss
            className="cursor-pointer text-[80px] text-blue-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"
            aria-label="Tailwind CSS Logo"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tech;
