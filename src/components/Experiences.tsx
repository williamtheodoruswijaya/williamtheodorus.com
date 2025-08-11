"use client";

import { ExperienceCard } from "@/elements/Card/Card";
import { useState } from 'react';
import { EXPERIENCES } from "@/constant/experiences";

const EXPERIENCES_PER_PAGE = 3;

const Experiences = () => {
    const [visibleCount, setVisibleCount] = useState(EXPERIENCES_PER_PAGE);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + EXPERIENCES_PER_PAGE);
    };

    return (
        <section id="experiences" className="flex flex-col items-center justify-center gap-6 z-10 py-20 md:py-40">
            {/* Tag motion.h1 diubah menjadi h1 biasa */}
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9BF6FF] to-[#95F9C3]">
                My Experiences
            </h1>

            {/* Tag motion.div dan AnimatePresence dihilangkan, diganti div biasa */}
            <div className="grid grid-cols-1 gap-[40px] z-10 mt-8 w-full px-4 md:px-0 md:max-w-[700px]">
                {EXPERIENCES.slice().reverse().slice(0, visibleCount).map((experience) => (
                    // Div pembungkus untuk animasi dihapus, key dipindah ke ExperienceCard
                    <ExperienceCard key={experience.name} {...experience} />
                ))}
            </div>

            {visibleCount < EXPERIENCES.length && (
                // Tag motion.button diubah menjadi button biasa
                <button
                    onClick={handleLoadMore}
                    className="mt-12 rounded-full border-2 border-[#9BF6FF] text-[#9BF6FF] font-bold select-none py-3 px-8 transition-all duration-300 hover:bg-[#9BF6FF] hover:text-black"
                >
                    Load More
                </button>
            )}
        </section>
    );
};

export default Experiences;