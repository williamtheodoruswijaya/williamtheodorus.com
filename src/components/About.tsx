"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from "react-icons/fa";
import { FaGolang, FaFlutter } from "react-icons/fa6"
import {SiNextdotjs, SiTensorflow, SiPostgresql, SiMongodb, SiFirebase } from "react-icons/si";

const skills = [
    { icon: <FaReact size={40} />, name: "React" },
    { icon: <SiNextdotjs size={40} />, name: "Next.js" },
    { icon: <FaFlutter size={40} />, name: "Flutter" },
    { icon: <FaNodeJs size={40} />, name: "Node.js" },
    { icon: <FaGolang size={40} />, name: "Golang" },
    { icon: <FaPython size={40} />, name: "Python" },
    { icon: <SiTensorflow size={40} />, name: "TensorFlow" },
    { icon: <FaAws size={40} />, name: "AWS" },
    { icon: <FaDocker size={40} />, name: "Docker" },
    { icon: <SiPostgresql size={40} />, name: "Postgresql" },
    { icon: <SiMongodb size={40} />, name: "Mongo DB" },
    { icon: <SiFirebase size={40} />, name: "Firebase" },
];

const About = () => {
    return (
        <section id="about" className="relative bg-black flex flex-col items-center justify-center gap-12 z-10 py-20 md:py-40 overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl -translate-x-1/2 -z-10"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl translate-x-1/2 -z-10"></div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9BF6FF] to-[#95F9C3]">
                About Me
            </motion.h1>

            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-48 h-48 md:w-60 md:h-60 relative"
                >
                    <Image
                        src="/assets/potrait.jpg"
                        alt="Foto Profil William Theodorus"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full border-4 border-cyan-400/50 shadow-lg"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="max-w-2xl text-center lg:text-left"
                >
                    <div className="text-gray-300 text-lg md:text-xl leading-relaxed text-justify">
                        <p>
                            Hello! I&apos;m William,
                        </p>
                        <p>
                            A developer based in Indonesia with a deep passion for both the analytical world of Data Science and the creative challenges of Software Engineering. My journey in tech is driven by the thrill of transforming complex data into understandable stories and building applications that are both functional and delightful to use.
                        </p>
                        <p>
                            Outside of coding, I enjoy exploring new technologies and collaborating with others to bring innovative ideas to life.
                        </p>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="mt-16 w-full max-w-4xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-bold text-center text-white mb-8">My Core Skills</h2>
                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                            {skill.icon}
                            <span className="font-medium">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default About;