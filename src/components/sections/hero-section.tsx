"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Github, Mail } from "lucide-react";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import Image from "next/image";

const HeroSection = () => {
  const [repoCount, setRepoCount] = useState<number | null>(null);
  const [recentActivity, setRecentActivity] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      aboutSection.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const userRes = await fetch(
          "https://api.github.com/users/williamtheodoruswijaya",
        );
        const userData = await userRes.json();
        setRepoCount(userData.public_repos);

        const eventsRes = await fetch(
          "https://api.github.com/users/williamtheodoruswijaya/events",
        );
        const eventsData = await eventsRes.json();
        setRecentActivity(Array.isArray(eventsData) ? eventsData.length : null);
      } catch (err) {
        console.error("Error fetching GitHub stats:", err);
      }
    };

    fetchGitHubStats();
  }, []);

  const renderStat = (value: number | null) => {
    if (value === null) return "--";
    if (shouldReduceMotion) return value.toLocaleString();
    return <CountUp end={value} duration={1.6} />;
  };

  return (
    <section
      id="home"
      className="relative isolate min-h-[calc(100vh-10rem)] overflow-hidden border-b border-[var(--line)] bg-[var(--surface)] px-5 pb-16 pt-12 transition-colors duration-200 sm:px-6 sm:pt-16 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]"
      />

      <div className="site-container grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="uip-eyebrow mb-5">Developer portfolio</p>
          <h1 className="uip-heading text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
            William Theodorus Wijaya
          </h1>
          <p className="uip-copy mt-6 max-w-2xl text-lg leading-8">
            Hi guys, I&apos;m William, a data science student that works as a
            software engineer.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/CV.pdf" download className="uip-button-primary">
              <Download className="h-4 w-4" aria-hidden="true" />
              Download CV
            </a>
            <a
              href="https://github.com/williamtheodoruswijaya"
              target="_blank"
              rel="noopener noreferrer"
              className="uip-button-secondary"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
            <a href="#contact" className="uip-button-secondary">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="uip-card p-4">
              <p className="uip-heading text-3xl">{renderStat(repoCount)}</p>
              <p className="uip-copy mt-1 text-sm">Public repositories</p>
            </div>
            <div className="uip-card p-4">
              <p className="uip-heading text-3xl">
                {renderStat(recentActivity)}
              </p>
              <p className="uip-copy mt-1 text-sm">Recent GitHub events</p>
            </div>
            <div className="uip-card p-4">
              <p className="uip-heading text-3xl">2</p>
              <p className="uip-copy mt-1 text-sm">Core disciplines</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="uip-card relative aspect-[4/5] overflow-hidden shadow-[var(--shadow-soft)]">
            <Image
              src="/assets/self-potrait.jpeg"
              alt="Portrait of William Theodorus"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
              className="object-cover"
            />
          </div>
          <div className="uip-raised absolute -bottom-6 left-4 right-4 p-4 sm:left-auto sm:w-72">
            <p className="uip-eyebrow">Current focus</p>
            <p className="uip-copy mt-2 text-sm leading-6">
              Data science, Software Engineering, and production-minded
              prototypes for ideas that need to become usable fast.
            </p>
          </div>
        </motion.div>
      </div>

      <button
        type="button"
        onClick={scrollToAbout}
        className="uip-icon-button absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:flex"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="h-5 w-5" aria-hidden="true" />
      </button>
    </section>
  );
};

export default HeroSection;
