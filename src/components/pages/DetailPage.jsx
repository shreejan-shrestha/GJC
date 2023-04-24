import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { styles } from "../../styles";
import { useParams } from "react-router-dom";
import client from "../../lib/pocketbase";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const DetailPage = ({ index }) => {
    const [list, setList] = useState();
    const [images, setImages] = useState([]);
    let { category, detailId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await client
                .collection(`${category}`)
                .getOne(`${detailId}`);
            if (response) {
                setList(response);
                setImages(response.image);
            }
        };
        fetchData();
    }, []);

    if (list) {
        return (
            <>
                <div>
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        className="h-full w-full"
                    >
                        {images.map((image, index) => (
                            <SwiperSlide
                                key={index}
                                className="text-center flex justify-center items-center mb-10"
                            >
                                <img
                                    src={client.getFileUrl(list, image)}
                                    alt="Housing images"
                                    className="block w-full h-[80vh] md:h-[70vh]  object-cover md:object-contain"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="flex justify-center items-center px-10">
                    <motion.div
                        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
                    >
                        <h2 className={`${styles.sectionHeadText}text-primary`}>
                            {list.title}
                        </h2>
                    </motion.div>
                </div>
            </>
        );
    } else {
        return null;
    }
};

export default DetailPage;
