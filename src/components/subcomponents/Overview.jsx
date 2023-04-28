import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { textVariant, fadeIn } from "../../utils/motion";

import OverviewCard from "../cards/OverviewCard";

import client from "../../lib/pocketbase";

const Overview = () => {
    const [housing, setHousing] = useState([]);
    const [apartments, setApartments] = useState([]);
    const [land, setLand] = useState([]);

    useEffect(() => {
        client
            .collection("housing")
            .getFullList({
                filter: 'premium = true && status = "Sale"',
            })
            .then((data) => {
                setHousing(data);
            });
    }, []);

    useEffect(() => {
        client
            .collection("apartments")
            .getFullList({
                filter: 'premium = true && status = "Sale"',
            })
            .then((data) => {
                setApartments(data);
            });
    }, []);

    useEffect(() => {
        client
            .collection("land")
            .getFullList({
                filter: 'premium = true && status = "Sale"',
            })
            .then((data) => {
                setLand(data);
            });
    }, []);

    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={`${styles.sectionHeadText}`}>
                    Find Your Dream House
                </h2>
            </motion.div>

            <motion.div
                variants={fadeIn("up", "spring", 0.5, 0.75)}
                className="mt-20 flex flex-wrap gap-7"
            >
                {housing.map((housing, index) => (
                    <OverviewCard
                        key={`housing-${index}`}
                        index={index}
                        id={housing.id}
                        title={housing.title}
                        location={housing.location}
                        district={housing.district}
                        price={housing.price}
                        image={client.getFileUrl(housing, housing.image)}
                        status={housing.status}
                        bedroom={housing.bedroom}
                        livingRoom={housing.living_room}
                        kitchen={housing.kitchen}
                        bathroom={housing.bathroom}
                        contact={housing.contact_number}
                        category="housing"
                    />
                ))}
            </motion.div>

            <motion.div variants={textVariant(1)}>
                <h2 className={`${styles.sectionHeadText} mt-20`}>
                    Or Your Dream Apartment
                </h2>
            </motion.div>

            <motion.div
                variants={fadeIn("up", "spring", 1.5, 0.75)}
                className="mt-20 flex flex-wrap gap-7"
            >
                {apartments.map((apartments, index) => (
                    <OverviewCard
                        key={`apartments-${index}`}
                        index={index}
                        id={apartments.id}
                        title={apartments.title}
                        location={apartments.location}
                        district={apartments.district}
                        price={apartments.price}
                        image={client.getFileUrl(apartments, apartments.image)}
                        status={apartments.status}
                        bedroom={apartments.bedroom}
                        livingRoom={apartments.living_room}
                        kitchen={apartments.kitchen}
                        bathroom={apartments.bathroom}
                        contact={apartments.contact_number}
                        category="apartments"
                    />
                ))}
            </motion.div>

            <motion.div variants={textVariant(2)}>
                <h2 className={`${styles.sectionHeadText} mt-20`}>
                    Or Your Dream Land
                </h2>
            </motion.div>

            <motion.div
                variants={fadeIn("up", "spring", 3, 0.75)}
                className="mt-20 flex flex-wrap gap-7"
            >
                {land.map((land, index) => (
                    <OverviewCard
                        key={`land-${index}`}
                        index={index}
                        id={land.id}
                        title={land.title}
                        location={land.location}
                        district={land.district}
                        price={land.price}
                        image={client.getFileUrl(land, land.image[0])}
                        status={land.status}
                        isLand={true}
                        landSize={land.land_size}
                        contact={land.contact_number}
                        category="land"
                    />
                ))}
            </motion.div>
        </>
    );
};

export default SectionWrapper(Overview);
