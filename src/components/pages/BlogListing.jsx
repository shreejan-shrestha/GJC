import client from "../../lib/pocketbase";
import { useState, useEffect } from "react";
import BlogCard from "../cards/BlogCard";
import { styles } from "../../styles";

const BlogListing = () => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        const loadResponse = async () => {
            const response = await client.collection("blogs").getFullList({
                sort: "-created",
            });
            if (response) {
            }
            setBlog(response);
        };
        loadResponse();
    }, []);

    return (
        <>
            <div className="flex flex-col justify-center items-center p-10">
                <h2 className={`${styles.sectionHeadText}`}>GJC Blog</h2>

                <div className="flex flex-wrap justify-center gap-7 px-2">
                    {blog.map((blog, index) => (
                        <BlogCard
                            key={`blog-${index}`}
                            index={index}
                            id={blog.id}
                            title={blog.title}
                            content={blog.content}
                            tagline={blog.tagline}
                            image={client.getFileUrl(blog, blog.image)}
                            author={blog.author}
                            created={blog.created.slice(0, 10)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default BlogListing;
