"use client";

import { ProjectCard } from "@/elements/Card/Card";
import { useEffect, useState } from 'react';
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

    return (
        <section id="projects" className="flex flex-col items-center justify-center gap-6 z-10 py-20 md:py-40">

            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9BF6FF] to-[#95F9C3]">
                My Projects
            </h1>

            <div className="flex gap-2 z-10 py-2">
                {filterTags.map((tag) => (
                    <button
                        key={tag}
                        className={`rounded-full border-2 border-[#9BF6FF] text-[#9BF6FF] font-bold select-none w-fit flex gap-1 py-2 px-4 transition-all duration-300 ${ selectedTag === tag ? 'bg-[#9BF6FF] text-black shadow-lg shadow-[#9BF6FF]/25' : 'bg-transparent hover:bg-[#9BF6FF]/10' }`}
                        onClick={() => setSelectedTag(tag)}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] z-10 mt-8 items-start">
                {filteredProjects.slice(0, visibleCount).map((project) => (
                    <ProjectCard key={project.name} {...project} />
                ))}
            </div>

            {visibleCount < filteredProjects.length && (
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

export default Projects;