import { styles } from "../../styles";
import { Link, useParams } from "react-router-dom";
import client from "../../lib/pocketbase";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const DetailPage = () => {
    const [list, setList] = useState();
    const [images, setImages] = useState([]);
    const [isLand, setIsLand] = useState(false);
    const [isCommercial, setIsCommercial] = useState(false);
    const { category, detailId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await client
                .collection(`${category}`)
                .getOne(`${detailId}`);
            if (response) {
                setList(response);
                setImages(response.image);
            }
            if (`${category}` == "land") {
                setIsLand(true);
            } else if (`${category}` == "commercial") {
                setIsCommercial(true);
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
                <div className="w-[100vw] px-10 flex flex-col items-center">
                    <div>
                        <h2
                            className={`text-primary font-black md:text-[60px] sm:text-[50px] text-[24px]`}
                        >
                            {list.title}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 my-10">
                        <div className="col-span-2">
                            <div
                                className={`text-primary font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px]`}
                            >
                                {list.location}, {list.district}
                            </div>
                            <div
                                className={`text-primary lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px]`}
                            >
                                {list.province}
                            </div>
                            <div
                                className={`text-primary lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px]`}
                            >
                                Ward no. {list.ward_no}
                            </div>
                            <hr className="my-5" />
                            {isLand ? (
                                <div className="grid grid-cols-2 gap-10">
                                    <div className="flex flex-col justify-center items-start col-span-2">
                                        <p className="mt-2 text-primary text-[20px] md:text-[24px]">
                                            {list.land_size}
                                        </p>
                                        <p className="mt-2 text-primary text-[16px]">
                                            Area
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-center items-start">
                                        <p className="mt-2 text-primary text-[20px] md:text-[24px]">
                                            {list.facing_direction}
                                        </p>
                                        <p className="mt-2 text-primary text-[14px]">
                                            Facing
                                        </p>
                                        <p className="mt-2 text-primary text-[14px]">
                                            Direction
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-center items-start">
                                        <p className="mt-2 text-primary text-[20px] md:text-[24px]">
                                            {list.road_size}
                                        </p>
                                        <p className="mt-2 text-primary text-[14px]">
                                            Road
                                        </p>
                                    </div>
                                </div>
                            ) : isCommercial ? (
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="mt-2 text-primary text-[20px] md:text-[24px]">
                                            {list.room}
                                        </p>
                                        <p className="mt-2 text-primary text-[14px]">
                                            Rooms
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="mt-2 text-primary text-[20px] md:text-[24px]">
                                            {list.kitchen}
                                        </p>
                                        <p className="mt-2 text-primary text-[14px]">
                                            Kitchen
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="mt-2 text-primary text-[20px] md:text-[24px]">
                                            {list.bathroom}
                                        </p>
                                        <p className="mt-2 text-primary text-[14px]">
                                            Bathroom
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="mt-2 text-primary text-[20px] md:text-[24px]">
                                            {list.facing_direction}
                                        </p>
                                        <p className="mt-2 text-primary text-[14px]">
                                            Facing
                                        </p>
                                        <p className="mt-2 text-primary text-[14px]">
                                            Direction
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="mt-2 text-primary text-[20px] md:text-[24px]">
                                            {list.road_size}
                                        </p>
                                        <p className="mt-2 text-primary text-[14px]">
                                            Road
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="mt-2 text-primary text-[20px] md:text-[24px]">
                                            {list.bedroom}
                                        </p>
                                        <p className="mt-2 text-primary text-[14px]">
                                            Bedroom
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="mt-2 text-primary text-[20px] md:text-[24px]">
                                            {list.living_room}
                                        </p>
                                        <p className="mt-2 text-primary text-[14px]">
                                            Hall
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="mt-2 text-primary text-[20px] md:text-[24px]">
                                            {list.kitchen}
                                        </p>
                                        <p className="mt-2 text-primary text-[14px]">
                                            Kitchen
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="mt-2 text-primary text-[20px] md:text-[24px]">
                                            {list.bathroom}
                                        </p>
                                        <p className="mt-2 text-primary text-[14px]">
                                            Bathroom
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="mt-2 text-primary text-[20px] md:text-[24px]">
                                            {list.facing_direction}
                                        </p>
                                        <p className="mt-2 text-primary text-[14px]">
                                            Facing
                                        </p>
                                        <p className="mt-2 text-primary text-[14px]">
                                            Direction
                                        </p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <p className="mt-2 text-primary text-[20px] md:text-[24px]">
                                            {list.road_size}
                                        </p>
                                        <p className="mt-2 text-primary text-[14px]">
                                            Road
                                        </p>
                                    </div>
                                </div>
                            )}

                            <hr className="my-5" />
                            <div className="mt-10">
                                <h1 className="text-[20px] font-medium md:text-[24px]">
                                    Description
                                </h1>
                                <p className="my-4">{list.description}</p>
                            </div>
                            <div className="mt-10">
                                <h1 className="text-[20px] font-medium sm:text-[24px]">
                                    Parking Description
                                </h1>
                                <p className="my-4">
                                    {list.parking_description}
                                </p>
                            </div>
                            <div className="bg-white md:h-[50vh] h-[30vh] md:w-auto w-[100%] mt-10">
                                <iframe
                                    src={list.map}
                                    width="100%"
                                    height="100%"
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div
                                className={`${styles.heroSubText}text-primary`}
                            >
                                Rs.{list.price}
                            </div>
                            <div
                                className={`${styles.heroSubText}text-primary`}
                            >
                                +977 {list.contact_number}
                            </div>
                            <hr className="my-5" />
                            <Link to={`/appointment/${category}/${detailId}`}>
                                <div className="inset-0 flex">
                                    <div className=" hover:bg-green bg-primary hover:text-primary text-secondary w-auto h-10 p-4 rounded-full flex justify-center items-center transition cursor-pointer">
                                        <div className="object-contain">
                                            Contact us
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return null;
    }
};

export default DetailPage;
