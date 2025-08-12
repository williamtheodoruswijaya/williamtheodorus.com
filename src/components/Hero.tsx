"use client";

import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";
import {Download, Mail} from "lucide-react";
import Image from "next/image";

const Hero = () => {
    return (
        <section className={"h-screen bg-gradient-to-b from-sky-600 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-4 relative overflow-hidden"}>
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
                <motion.div
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2, duration: 1 }}
                >
                    <a
                        href={"/CV.pdf"}
                        download
                        className="flex items-center gap-2 px-6 py-3 bg-white text-sky-700 font-semibold rounded-xl shadow-md hover:bg-sky-100 transition"
                    >
                        <Download size={18} /> Download CV
                    </a>
                    <a
                        href={"#contact"}
                        className="flex items-center gap-2 px-6 py-3 border border-white text-white font-semibold rounded-xl hover:bg-white hover:text-sky-700 transition"
                    >
                        <Mail size={18} /> Contact Me
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 50, delay: 0.5 }}
                className="hidden xl:flex items-center justify-center z-30"
            >
                <div className="relative w-[350px] h-[450px] rounded-[18px] overflow-hidden border-4 border-cyan-400/30 shadow-2xl shadow-cyan-500/20">
                    <Image
                        src="/assets/self-potrait.jpg"
                        alt="Foto Profil William Theodorus"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-transparent"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
