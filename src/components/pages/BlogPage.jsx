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
            <div className="px-10 flex flex-col items-center mb-10">
                <h2
                    className={`text-primary font-black md:text-[60px] sm:text-[50px] text-[24px]`}
                >
                    {blog.title}
                </h2>
                <div>By {blog.author}</div>
                <div>{created}</div>
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
            <div class="inline-flex items-center justify-center w-full">
                <hr class="w-64 h-1 my-8 bg-gjcgreen border-0 rounded " />
                <div class="hidden md:block absolute px-4 -translate-x-1/2 bg-transparent left-1/2 ">
                    <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-primary "
                        viewBox="0 0 24 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            </div>
            <div className="my-10">
                <div className="px-10 flex flex-col items-center">
                    <p className="w-full md:w-[70%]">{blog.content}</p>
                </div>
            </div>
        </>
    );
};

export default BlogPage;
