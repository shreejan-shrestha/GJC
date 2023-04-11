
import { styles } from "../styles";
import { HouseCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex justify-center gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Ghar Jagga <span className='text-green font-black'>Clinic</span>
          </h1>
          <p className={`${styles.heroSubText} text-primary`}>
            Doctors of Real Estate!
          </p>
        </div>
      </div>

      <HouseCanvas />
      
    </section>
  );
};

export default Hero;
