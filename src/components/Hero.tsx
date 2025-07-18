"use client";

import dynamic from 'next/dynamic';
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";
import {useCallback, useState} from "react";
import {Loader} from "@/elements/Loader/Loader";

const Slime = dynamic(() => import('@/components/Slime').then(mod => mod.Slime), {
    ssr: false,
});

const Hero = () => {
    const [loading, setLoading] = useState(true);
    const handleSplineLoad = useCallback(() => {
        setLoading(false);
    }, []);
    return (
        <section className={"h-screen bg-gradient-to-b from-sky-600 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-4 relative overflow-hidden"}>
            {loading && (
                <motion.div
                    className="fixed inset-0 z-[999] bg-black flex items-center justify-center"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <Loader/>
                </motion.div>
            )}

            {/* Left Section */}
            <div className={"flex flex-col gap-4 lg:gap-8 z-40 xl:mb-0 mb-[20%]"}>
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 40,
                        damping: 25,
                        delay: 1.3,
                        duration: 1.5,
                    }}
                    className={"text-5xl md:text-6xl lg:text-[72px] leading-none font-bold"}>
                    Hi, I&apos;m{' '}
                    <span style={{ animation: 'pulse 5s ease infinite alternate' }}>
                        <Typewriter
                            options={{
                                strings: ['William Theodorus', 'ウィリアム テオドラス'],
                                loop: true,
                                autoStart: true,
                            }}
                        />
                    </span>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 40,
                        damping: 25,
                        delay: 1.8,
                        duration: 1.5,
                    }}
                    className="text-xl md:text-1xl lg:text-2xl max-w-2xl">
                    a passionate{' '}
                    <i className="font-bold">Data Scientist</i>
                    {' '}and{' '}
                    <i className="font-bold">Software Engineer</i>
                    {' '}with a strong interest in turning data into meaningful insights and building impactful, scalable software solutions.
                </motion.p>
            </div>

            <Slime onLoad={handleSplineLoad}/>
        </section>
    );
};

export default Hero;
