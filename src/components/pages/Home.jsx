import About from "../subcomponents/About";
import Contact from "../subcomponents/Contact";
import Hero from "../subcomponents/Hero";
import Overview from "../subcomponents/Overview";
import { StarsCanvas } from "../canvas";

const Home = () => {
    return (
        <>
            <div className="relative z-0">
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
        </>
    );
};

export default Home;
