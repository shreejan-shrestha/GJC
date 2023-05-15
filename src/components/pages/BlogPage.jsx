import AdSense from "react-adsense";
import { useParams } from "react-router-dom";
import client from "../../lib/pocketbase";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const BlogPage = () => {
    const [blog, setBlog] = useState([]);
    const [ads, setAds] = useState([]);
    const [created, setCreated] = useState();
    const { detailId } = useParams();

    const toolbarOptions = [
        [{ header: [1, 2, 3, 4, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["clean"],
    ];

    useEffect(() => {
        const fetchData = async () => {
            const response = await client
                .collection("blogs")
                .getOne(`${detailId}`);
            if (response) {
                setBlog(response);
                let slicedCreated = response.created.slice(0, 10);
                setCreated(slicedCreated);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await client
                .collection("ads")
                .getOne("camtx8w81qnnsoy");
            if (response) {
                setAds(response);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="absolute w-full bg-white dark:bg-dark">
                <div className="px-10 flex flex-col items-center mb-10">
                    <h2
                        className={`text-secondary dark:text-primary font-black md:text-[60px] sm:text-[50px] text-[24px]`}
                    >
                        {blog.title}
                    </h2>
                    <div className="text-secondary dark:text-primary flex flex-col justify-center items-center">
                        <div>By {blog.author}</div>
                        <div>{created}</div>
                    </div>
                </div>
                <div>
                    <Swiper navigation={false} className="h-full w-full my-5">
                        <SwiperSlide
                            key={1}
                            className="text-center flex justify-center items-center my-[-50px]"
                        >
                            <img
                                src={client.getFileUrl(blog, blog.image)}
                                alt="Blog images"
                                className="block h-[80vh] md:h-[70vh] object-cover md:object-contain"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-64 h-1 my-8 bg-secondary dark:bg-gjcgreen border-0 rounded " />
                </div>
                <div className="my-10">
                    <div className="px-10 flex flex-col items-center text-secondary dark:text-primary">
                        <p className="w-full md:w-[70%]">{blog.content}</p>
                    </div>
                </div>
                <div className="flex justify-center items-center my-20 object-contain">
                    <div className="grid grid-cols-3 gap-8">
                        <div className="bg-white w-96 h-96">
                            <AdSense.Google
                                client="ca-pub-7292810486004926"
                                slot="7806394673"
                                style={{ width: "100%", height: "100%" }}
                                format=""
                            />
                        </div>
                        <div className="bg-white w-96 h-96"></div>
                        <div className="bg-white w-96 h-96"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPage;
