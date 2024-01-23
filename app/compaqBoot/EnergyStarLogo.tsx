// EnergyStarLogo.tsx
import React from 'react';
import { AiOutlineStar } from "react-icons/ai";
import { Alex_Brush} from 'next/font/google'
import { motion } from 'framer-motion';
const brush=Alex_Brush({
    subsets: ['latin'],
    weight: '400'
})
const EnergyStarLogo: React.FC = () => {
   
    return (
        <motion.div className="absolute top-0 right-0 m-10"
        initial={{ opacity: 0, }}
    animate={{ opacity: 1,  }}
    transition={{ duration: 1 }}>
           
            <div className={`text-yellow text-[7rem] border-t-4 border-yellow rounded-full`  }>
            <div className='flex items-center justify-center'>  <span className={ brush.className}>energy </span> 
                <AiOutlineStar /> </div>
               
                <div className="text-lg text-center text-green-600  border-t border-green-600">ERSOY SOFTWARE DEVELOPMENT LLC</div>
            </div>
        </motion.div>
    );
};

export default EnergyStarLogo;
