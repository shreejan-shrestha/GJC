import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const OverviewCard = ({
    index,
    title,
    location,
    district,
    price,
    image,
    status,
    isLand
  }) => {
    
    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='w-full green-pink-gradient p-[2px] rounded-2xl shadow-card'
        >
          <div className='bg-white p-5 rounded-2xl sm:w-[360px] w-full'>

          
          <div className='relative w-full h-[230px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div className=' bg-slatecolor text-secondary w-20 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                <div className='object-contain'>{status}</div>
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <h3 className='text-primary font-bold text-[24px]'>{title}</h3>
            <p className='mt-2 text-primary text-[14px]'>{location}, {district}</p>
            {isLand ? 
            <p className='mt-2 text-primary text-[14px]'>Rs. {price}/Aana</p>
            : <p className='mt-2 text-primary text-[14px]'>Rs. {price}</p>
            }
            
            
          </div>
          </div>
        </Tilt>
      </motion.div>
    );
  };

  export default OverviewCard;