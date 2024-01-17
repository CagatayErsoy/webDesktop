"use client"
import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../Context/appcontext';
const CompaqBoot:React.FC = () => {
    const {setIsLoading}=useGlobalContext()
    const [loadingStep, setLoadingStep] = useState(0);
    const steps = ['Loading RAM...', 'Initializing GPU...', 'Booting System...'];

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingStep((prevStep) => (prevStep < steps.length - 1 ? prevStep + 1 : prevStep));
        }, 2000); // Change the speed as needed
        const timeout=setTimeout(() => {
            setIsLoading(false)
        }, 6000);
        
        return () => {clearInterval(interval)
        clearTimeout(timeout)
        };
       
    }, []);

    return (
        <div className="w-full h-screen bg-black flex justify-center items-center text-white font-mono">
            {loadingStep < steps.length ? (
                <p>{steps[loadingStep]}</p>
            ) : (
                <p>System Ready</p>
            )}
        </div>
    );
};

export default CompaqBoot;