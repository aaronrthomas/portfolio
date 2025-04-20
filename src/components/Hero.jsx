import image from "/public/DP.webp";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        {/* Hero Image */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={image}
            alt="Portrait of Aaron R Thomas"
            className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"
          />
        </motion.div>

        {/* Hero Text */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl">
            Aaron R Thomas
          </h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl">
            Web Developer & Graphic Designer
          </h3>
          <p className="text-sm text-gray-300 md:text-base">
          I’m a dedicated web developer and graphic designer with a passion for crafting dynamic, user-centric digital experiences. With a strong foundation in modern front-end technologies such as <b>React, Tailwind CSS, Bootstrap, HTML, and CSS,</b> I build responsive and visually engaging websites that perform seamlessly across devices.
Complementing my front-end expertise, I also specialize in backend development using *Python* and *Django*, allowing me to create robust, scalable, and secure web applications from end to end.

What sets me apart is my ability to blend technical precision with creative design. I bring ideas to life not only through code but also through compelling visuals, using tools like <b>Figma</b> to ensure that every interface is as intuitive as it is aesthetically pleasing.

Whether you're a business looking to establish a strong online presence or need a custom web solution tailored to your goals, I’m here to help turn your vision into reality—with quality, reliability, and a keen eye detail.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
