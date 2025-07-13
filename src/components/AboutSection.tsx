"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <section className="h-screen relative overflow-auto bg-gradient-to-b from-black to-sky-600">
            <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold sm:mb-16 text-center text-white"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    About Me
                </motion.h1>
            </div>

            <motion.div
                className="absolute lg:bottom-[-20rem] md:bottom-[-10rem] bottom-[-20rem] left-0 w-full flex md:flex-row flex-col justify-between lg:px-24 px-5 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <motion.h3
                    className="text-sm md:text-2xl font-bold text-cyan-200 z-50 lg:max-w-[45rem] max-w-[27rem] tracking-wider md:mt-20 sm:mt-[-40rem] mt-[-32rem]"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    Hello! I&apos;m William,
                    <br/>a Computer Science undergraduate who enjoys crafting intuitive digital
                    experiences and solving real-world problems through code. I&apos;m experienced in front-end development
                    with React and Next.js, and have also worked with Golang and Node.js for building efficient back-end services.
                    My passion extends to data science, where I’ve built machine learning models using TensorFlow, Keras, and scikit-learn
                    to develop AI-driven applications that extract insights and support decision-making.
                    I thrive in full-stack environments, love building side projects, and am always exploring new technologies to sharpen my skills.
                </motion.h3>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <Image
                        src={"/assets/potrait.jpg"}
                        alt={"Self Potrait"}
                        width={500}
                        height={1000}
                        className="lg:h-[40rem] md:h-[25rem] h-[20rem] mix-blend-lighten rounded-xl"
                        objectFit={"fit"}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutSection;