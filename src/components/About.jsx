import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { profile } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row'>
        <motion.div variants={textVariant()} className='md:mr-8 md:mb-8'>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          {/* I'm a skilled software developer with experience in C# and
          TypeScript, and expertise in frameworks like .NET, Nest.js, and
          Java Spring Boot. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life! */}
          Experienced Software Engineer, I am proficient in C# and Java, with a strong command of frameworks like .NET and Java Spring Boot.
          I am adept at rapid learning and thrive in close client collaboration, ensuring we craft efficient, scalable, and user-friendly solutions.
          <br />
          Let's team up, and together, <br />
          <b>transform your ideas into reality</b>!
        </motion.p>
        <motion.img
          src={profile}  // Replace with the actual URL of your picture
          alt="Taleh"
          className='w-[450px] h-[450px] object-cover green-pink-gradient p-[10px] rounded-[30px] shadow-card mt-4 md:mt-0'  // Extra-large size
          variants={fadeIn("", "", 0.1, 1)}
        />

      </div>

      <div className='mt-20 flex flex-wrap gap-10 justify-center items-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(About, "about");
