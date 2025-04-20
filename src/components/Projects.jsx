import PropTypes from "prop-types";
import { motion } from "framer-motion";
import image1 from "/public/er.webp";
import image2 from "/public/cp.webp";
import image3 from "/public/cw.webp";
import image4 from "/public/is.webp";
import image5 from "/public/ei.webp";

const projectsData = [
  {
    image: image1,
    title: "Electronic Repairing",
    description: "A web platform for managing electronic repair services, tracking repair orders, and maintaining customer service records.",
    technologies: ["NEXT", "CSS", "JavaScript", "MySQL","React"],
    link: "https://electronic-technicians.vercel.app/"
  },
  {
    image: image2,
    title: "College Canteen Website",
    description: "A web application for managing college canteen services, including menu management and order tracking.",
    technologies: ["TypeScript", "Next.js", "Tailwind", "PostgreSQL"],
    link: "https://v0-new-project-ggu3ohmnnzi-szly5q.vercel.app/"
  },
  {
    image: image3,
    title: "Crowd Management System",
    description: "A web application for managing crowd control and safety measures at events.",
    technologies: ["TypeScript", "React", "Tailwind", "Supabase"],
    link: "https://crowd-management-system.vercel.app/"
  },
  {
    image: image4,
    title: "Inspiration Station",
    description: "A web application for sharing and discovering inspirational content.",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
    link: "https://canteenapp.vercel.app/"
  },
  {
    image: image5,
    title: "Emotional Intelligence",
    description: "A web application for assessing and improving emotional intelligence.",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
    link: "https://emotional-intelligence-xi.vercel.app/"
  },
];

const ScrollReveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    {children}
  </motion.div>
);

ScrollReveal.propTypes = {
  children: PropTypes.node.isRequired,
};

const ProjectCard = ({ project }) => (
  <ScrollReveal>
    <motion.div
      className="flex flex-col items-center gap-8 md:flex-row md:gap-24"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img
          src={project.image}
          alt={project.title}
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />
      </a>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-gray-400">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-5">
          {project.technologies.map((tech, index) => (
            <span
              key={`${project.title}-tech-${index}`}
              className="rounded-lg bg-black px-4 py-2 text-sm text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  </ScrollReveal>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

const Projects = () => (
  <ScrollReveal>
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.length > 0 ? (
          projectsData.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))
        ) : (
          <p className="text-center text-gray-500">
            No projects to display at the moment.
          </p>
        )}
      </div>
    </div>
  </ScrollReveal>
);

export default Projects;
