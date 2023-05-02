import AdSense from "react-adsense";
import { useParams } from "react-router-dom";
import client from "../../lib/pocketbase";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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
        <div className="w-[100vw] px-10 flex flex-col items-center md:items-start justify-center">
            <div>
                <h2
                    className={`text-primary font-black md:text-[60px] sm:text-[50px] text-[28px]`}
                >
                    {blog.title}
                </h2>
            </div>
            <p className="mt-2 text-[16px] md:text-[18px] font-medium">
                By {blog.author}
            </p>
            <p className="mt-2  text-[14px] font-medium">{created}</p>
            <div class="inline-flex items-center justify-center w-full">
                <hr class="w-64 h-1 my-8 bg-green border-0 rounded " />
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10">
                <div className="col-span-2">
                    <ReactQuill
                        value={blog.content}
                        readOnly={true}
                        modules={{ toolbar: toolbarOptions }}
                        className="custom-rich-text-editor"
                    />
                </div>
                <div className="col-span-1 bg-primary p-4 h-[50%]">
                    <AdSense.Google
                        client={`${ads.client_id}`}
                        slot={`${ads.slot_id}`}
                        style={{ display: "block" }}
                        format="fluid"
                        responsive="true"
                    />
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
