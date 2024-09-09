import React from "react";

// import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";

const TechCard = ({ index, title, list }) => (

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
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        <p>{list.join(', ')}</p>

      </div>
    </motion.div>
  </Tilt>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Technologies I Know
        </p>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10 h-screen items-center justify-center'>
      {Object.entries(technologies).map(([category, techList], index) => (
          <TechCard title={category} list = {techList} index= {index}/>
        ))
        }
      </div>
  
    </>
  );
};

export default SectionWrapper(Tech, "");
