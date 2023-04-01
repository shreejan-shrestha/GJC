import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { fadeIn } from "../../utils/motion";

const AboutCard = ({ index, title, icon }) => (
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
        className='bg-white rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <span>
            <h3 className='text-primary text-[20px] font-bold text-center'>
              {title}
            </h3>
        </span>
        
      </div>
    </motion.div>
  </Tilt>
);

export default AboutCard;