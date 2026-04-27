"use client";

import { ProjectCard } from "@/components/cards/portfolio-cards";
import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  Variants,
} from "framer-motion";
import PROJECTS from "@/data/projects";

const filterTags = ["All", "Data Science", "Software Engineering"];
const PROJECTS_PER_PAGE = 4;

const ProjectsSection = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const newFiltered =
      selectedTag === "All"
        ? PROJECTS
        : PROJECTS.filter((project) => project.types.includes(selectedTag));

    setFilteredProjects(newFiltered);
    setVisibleCount(PROJECTS_PER_PAGE);
  }, [selectedTag]);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + PROJECTS_PER_PAGE);
  };

  const containerVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      y: shouldReduceMotion ? 0 : 18,
      opacity: shouldReduceMotion ? 1 : 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: "easeOut" },
    },
    exit: { y: shouldReduceMotion ? 0 : -12, opacity: 0 },
  };

  return (
    <section id="projects" className="site-section">
      <div className="site-container">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="uip-eyebrow">Project grid</p>
            <h2 className="uip-heading mt-4 text-4xl sm:text-5xl">
              Selected work across data science and software engineering.
            </h2>
          </div>

          <div className="uip-card-muted flex w-full gap-2 overflow-x-auto p-1 md:w-auto">
            {filterTags.map((tag) => {
              const isSelected = selectedTag === tag;

              return (
                <button
                  key={tag}
                  type="button"
                  aria-pressed={isSelected}
                  className={`min-h-10 shrink-0 cursor-pointer rounded-md px-4 text-sm font-semibold transition-colors duration-200 ${
                    isSelected
                      ? "bg-[var(--surface)] text-[var(--foreground)] shadow-sm"
                      : "uip-copy hover:text-[var(--foreground)]"
                  }`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          layout={!shouldReduceMotion}
          className="mt-10 grid min-h-[420px] grid-cols-1 items-start gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.slice(0, visibleCount).map((project) => (
                <motion.div
                  key={project.name}
                  variants={itemVariants}
                  exit="exit"
                  layout={!shouldReduceMotion}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                className="uip-card-muted col-span-1 p-8 text-center md:col-span-2"
              >
                <p className="uip-heading text-lg">
                  No projects match this filter.
                </p>
                <p className="uip-copy mt-2 text-sm">
                  Try selecting another category.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {visibleCount < filteredProjects.length && (
          <motion.button
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.25 }}
            onClick={handleLoadMore}
            className="uip-button-secondary mt-8"
          >
            Load More
          </motion.button>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
