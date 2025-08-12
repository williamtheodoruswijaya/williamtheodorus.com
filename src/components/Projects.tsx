"use client";

import { ProjectCard } from "@/elements/Card/Card";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import PROJECTS from '../constant/projects/index';

const filterTags = ["All", "Data Science", "Software Engineering"];
const PROJECTS_PER_PAGE = 4;

const Projects = () => {
    const [selectedTag, setSelectedTag] = useState("All");
    const [filteredProjects, setFilteredProjects] = useState(PROJECTS);
    const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);

    useEffect(() => {
        const newFiltered = selectedTag === "All"
            ? PROJECTS
            : PROJECTS.filter((project) => project.types.includes(selectedTag));

        setFilteredProjects(newFiltered);
        setVisibleCount(PROJECTS_PER_PAGE);
    }, [selectedTag]);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + PROJECTS_PER_PAGE);
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { y: -20, opacity: 0, scale: 0.95 }
    };

    return (
        <section id="projects" className="flex flex-col items-center justify-center gap-6 z-10 py-20 md:py-40">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9BF6FF] to-[#95F9C3]">
                My Projects
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex gap-2 z-10 py-2">
                {filterTags.map((tag) => (
                    <button
                        key={tag}
                        className={`rounded-full border-2 border-[#9BF6FF] text-[#9BF6FF] font-bold select-none w-fit flex gap-1 py-2 px-4 transition-all duration-300 ${ selectedTag === tag ? 'bg-[#9BF6FF] text-black shadow-lg shadow-[#9BF6FF]/25' : 'bg-transparent hover:bg-[#9BF6FF]/10' }`}
                        onClick={() => setSelectedTag(tag)}
                    >
                        {tag}
                    </button>
                ))}
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                layout
                className="grid grid-cols-1 md:grid-cols-2 gap-[50px] z-10 mt-8 items-start min-h-[400px]"
            >
                <AnimatePresence mode="wait">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.slice(0, visibleCount).map((project) => (
                            <motion.div
                                key={project.name}
                                variants={itemVariants}
                                exit="exit"
                                layout="position"
                            >
                                <ProjectCard {...project} />
                            </motion.div>
                        ))
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="col-span-1 md:col-span-2 text-center text-neutral-400 mt-16"
                        >
                            <p className="text-xl">Oops! No projects found in this category.</p>
                            <p className="text-sm">Try selecting another category.</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {visibleCount < filteredProjects.length && (
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

export default Projects;