"use client";

import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { useState } from 'react';

type SlimeProps = {
    onLoad?: (splineApp: any) => void;
};

export const Slime = ({ onLoad }: SlimeProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const handleLoad = (splineApp: any) => {
        setIsLoaded(true);
        onLoad?.(splineApp); // fire parent callback
    };
    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 100 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/20">
                        <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin" />
                    </div>
                )}
                <Spline
                    className={"absolute xl:right-[-18%] right-0 top-[-20%] lg:top-0"}
                    scene="https://prod.spline.design/rrB9N51Eu3Z579z5/scene.splinecode"
                    onLoad={handleLoad}
                />
            </motion.div>
        </>
    )
}