import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";

import OverviewCard from "../cards/OverviewCard";

import client from '../../lib/pocketbase';

const Overview = () => {
  const [housing, setHousing] = useState([]);
  const [apartments, setApartments] = useState([]);
  const [land, setLand] = useState([]);


  useEffect(() => {
      client.collection('housing').getFullList({
        filter: 'premium = true && status = "On Sale"',
      }).then((data) => setHousing(data)),

      client.collection('apartments').getFullList({
        filter: 'premium = true && status = "On Sale"',
      }).then((data) => setApartments(data)),
      
      client.collection('land').getFullList({
        filter: 'premium = true && status = "On Sale"',
      }).then((data) => setLand(data))
  });

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Find Your Dream House</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {housing.map((housing, index) => (
          <OverviewCard key={`housing-${index}`} index={index} title = {housing.title} location = {housing.location} district = {housing.district} price = {housing.price} image = {client.getFileUrl(housing, housing.image)} status = {housing.status}/>
        ))}
      </div>

      <motion.div variants={textVariant(1)}>
        <h2 className={`${styles.sectionHeadText} mt-20`}>Or Your Dream Apartment</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {apartments.map((apartments, index) => (
          <OverviewCard key={`apartments-${index}`} index={index} title = {apartments.title} location = {apartments.location} district = {apartments.district} price = {apartments.price} image = {client.getFileUrl(apartments, apartments.image)} status = {apartments.status}/>
        ))}
      </div>

      <motion.div variants={textVariant(2)}>
        <h2 className={`${styles.sectionHeadText} mt-20`}>Or Your Dream Land</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {land.map((land, index) => (
          <OverviewCard key={`land-${index}`} index={index} title = {land.title} location = {land.location} district = {land.district} price = {land.price} image = {client.getFileUrl(land, land.image)} status = {land.status} isLand={true}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Overview);
