import About from "../subcomponents/About";
import Contact from "../subcomponents/Contact";
import Hero from "../subcomponents/Hero";
import Overview from "../subcomponents/Overview";
import { StarsCanvas } from "../canvas";
import React, { useState, useEffect } from "react";

const Home = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    if (!loaded) {
        return (
            <>
                <div className="absolute w-full h-full bg-dark"></div>
            </>
        );
    }

    return (
        <>
            <div className="absolute w-full dark:bg-dark">
                <div className="relative z-0 ">
                    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center relative z-0">
                        <Hero />
                        <StarsCanvas />
                    </div>
                </div>
                <div>
                    <About />
                    <Overview />
                    <Contact />
                </div>
            </div>
        </>
    );
};

export default Home;
