import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import AboutCard from "../cards/AboutCard";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionHeadText}`}>About us</p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-primary text-[17px] max-w-3xl leading-[30px]'
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus consequatur deserunt commodi quo similique nesciunt nostrum architecto officiis expedita adipisci magni nam molestiae sapiente obcaecati ipsam exercitationem, quod, ducimus officia.
      </motion.p>

      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <AboutCard key={service.title} index={index} {...service} />
        ))}
      </div>

      
    </>
  );
};

export default SectionWrapper(About, "about");
