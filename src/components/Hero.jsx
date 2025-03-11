import image from "/public/DP.jpg";
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
            I am a passionate web developer and graphic designer with expertise
            in creating dynamic and visually appealing web applications. I
            specialize in using modern technologies like React, Tailwind CSS,
            HTML, CSS, and Bootstrap to craft responsive and user-friendly
            websites. Additionally, I have experience in backend development
            with Python and Django, enabling me to build robust and scalable
            applications. Beyond coding, I have a creative flair for graphic
            design and enjoy bringing ideas to life through tools like Figma,
            ensuring my designs are both functional and aesthetically pleasing.
            With a blend of technical skills and artistic vision, I strive to
            deliver exceptional digital experiences.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
