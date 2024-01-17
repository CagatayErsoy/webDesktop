// EnergyStarLogo.tsx
import React from 'react';
import { AiOutlineStar } from "react-icons/ai";
import { Alex_Brush} from 'next/font/google'
const brush=Alex_Brush({
    subsets: ['latin'],
    weight: '400'
})
const EnergyStarLogo: React.FC = () => {
   
    return (
        <div className="absolute top-0 right-0 m-10">
           
            <div className={`text-yellow text-[7rem] border-t-4 border-yellow rounded-full`  }>
            <div className='flex items-center justify-center'>  <span className={ brush.className}>energy </span> 
                <AiOutlineStar /> </div>
               
                <div className="text-lg text-center text-green-600  border-t border-green-600">ERSOY SOFTWARE DEVELOPMENT</div>
            </div>
        </div>
    );
};

export default EnergyStarLogo;
