"use client";

import { ExperienceCard } from "@/elements/Card/Card";
import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {EXPERIENCES} from "@/constant/experiences";

const EXPERIENCES_PER_PAGE = 3;

const Experiences = () => {
    const [visibleCount, setVisibleCount] = useState(EXPERIENCES_PER_PAGE);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + EXPERIENCES_PER_PAGE);
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
        exit: { y: -20, opacity: 0 },
    };

    return (
        <section id="experiences" className="flex flex-col items-center justify-center gap-6 z-10 py-20 md:py-40">
            <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9BF6FF] to-[#95F9C3]">
                My Experiences
            </motion.h1>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 gap-[40px] z-10 mt-8 w-full px-4 md:px-0 md:max-w-[700px]"
            >
                <AnimatePresence>
                    {EXPERIENCES.slice().reverse().slice(0, visibleCount).map((experience) => (
                        <motion.div key={experience.name} variants={itemVariants} layout initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <ExperienceCard {...experience} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {visibleCount < EXPERIENCES.length && (
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    onClick={handleLoadMore}
                    className="mt-12 rounded-full border-2 border-[#9BF6FF] text-[#9BF6FF] font-bold select-none py-3 px-8 transition-all duration-300 hover:bg-[#9BF6FF] hover:text-black"
                >
                    Load More
                </motion.button>
            )}
        </section>
    );
};

export default Experiences;