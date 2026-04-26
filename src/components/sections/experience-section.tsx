"use client";

import { ExperienceCard } from "@/components/cards/portfolio-cards";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  Variants,
} from "framer-motion";
import { EXPERIENCES } from "@/data/experiences";

const EXPERIENCES_PER_PAGE = 3;

const ExperienceSection = () => {
  const [visibleCount, setVisibleCount] = useState(EXPERIENCES_PER_PAGE);
  const shouldReduceMotion = useReducedMotion();

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + EXPERIENCES_PER_PAGE);
  };

  const containerVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
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
  };

  return (
    <section id="experiences" className="site-section site-section-muted">
      <div className="site-container">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-2xl"
        >
          <p className="uip-eyebrow">Experiences</p>
          <h2 className="uip-heading mt-4 text-4xl sm:text-5xl">
            Places where I&apos;ve worked, learned, and grown.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-10 grid gap-4"
        >
          <AnimatePresence>
            {EXPERIENCES.slice()
              .reverse()
              .slice(0, visibleCount)
              .map((experience) => (
                <motion.div key={experience.name} variants={itemVariants}>
                  <ExperienceCard {...experience} />
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>

        {visibleCount < EXPERIENCES.length && (
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

export default ExperienceSection;
