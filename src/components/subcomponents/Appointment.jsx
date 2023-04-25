import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";

import { useParams } from "react-router-dom";

const Appointment = () => {
    const formRef = useRef();

    const { category, detailId } = useParams();

    const [form, setForm] = useState({
        fname: "",
        lname: "",
        number: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                "service_fngpcii",
                "template_3q92qjr",
                {
                    from_fname: form.fname,
                    from_lname: form.lname,
                    category: `${category}`,
                    id: `${detailId}`,
                    number: form.number,
                    to_name: "Ghar Jagga Clinic",
                    from_email: form.email,
                    to_email: "nepalirealtors@gmail.com",
                    message: form.message,
                },
                "H99TaCLb-EbmIlVmP"
            )
            .then(
                () => {
                    setLoading(false);
                    alert(
                        "Thank you. We will get back to you as soon as possible."
                    );

                    setForm({
                        fname: "",
                        lname: "",
                        number: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Something went wrong. Please try again.");
                }
            );
    };

    return (
        <div
            className={`xl:mt-12 flex xl:flex-row flex-col-reverse justify-center overflow-hidden`}
        >
            <motion.div
                variants={slideIn("left", "tween", 0, 1)}
                className="flex-[0.75] bg-slate-800 p-8 rounded-2xl"
            >
                <h3 className={styles.sectionAltHeadText}>Appointment.</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8"
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            First Name
                        </span>
                        <input
                            type="text"
                            name="fname"
                            value={form.fname}
                            onChange={handleChange}
                            placeholder="What's your first name?"
                            className="bg-primary py-4 px-6 placeholder:text-secondary placeholder:text-opacity-50 text-secondary rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Last Name
                        </span>
                        <input
                            type="text"
                            name="lname"
                            value={form.lname}
                            onChange={handleChange}
                            placeholder="What's your last name?"
                            className="bg-primary py-4 px-6 placeholder:text-secondary placeholder:text-opacity-50 text-secondary rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your number
                        </span>
                        <input
                            type="text"
                            name="number"
                            value={form.number}
                            onChange={handleChange}
                            placeholder="What's your phone number?"
                            className="bg-primary py-4 px-6 placeholder:text-secondary placeholder:text-opacity-50 text-secondary rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your email
                        </span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email address?"
                            className="bg-primary py-4 px-6 placeholder:text-secondary placeholder:text-opacity-50 text-secondary rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your Message
                        </span>
                        <textarea
                            rows={7}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What do you want to say?"
                            className="bg-primary py-4 px-6 placeholder:text-secondary placeholder:text-opacity-50 text-secondary rounded-lg outline-none border-none font-medium"
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-secondary py-3 px-8 rounded-xl outline-none w-fit text-primary font-bold shadow-md shadow-slate-800"
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Appointment, "appointment");
