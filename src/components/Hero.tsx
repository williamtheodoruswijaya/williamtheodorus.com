"use client";

import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Download, Mail, ChevronDown } from "lucide-react";
import Image from "next/image";
import ParticleBackground from "./ParticleBackground";
import { FaGithub } from "react-icons/fa";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

const Hero = () => {
  const [repoCount, setRepoCount] = useState<number | null>(null);
  const [contributions, setContributions] = useState<number | null>(null);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Fetch GitHub public repos + contributions
  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // Public repos
        const userRes = await fetch(
          "https://api.github.com/users/williamtheodoruswijaya"
        );
        const userData = await userRes.json();
        setRepoCount(userData.public_repos);

        // Contributions (use a simple approximation: total commits in 1 year)
        const eventsRes = await fetch(
          "https://api.github.com/users/williamtheodoruswijaya/events"
        );
        const eventsData = await eventsRes.json();
        const commitCount = eventsData.length;
        setContributions(commitCount);
      } catch (err) {
        console.error("Error fetching GitHub stats:", err);
      }
    };

    fetchGitHubStats();
  }, []);

  return (
    <section
      className="relative h-screen bg-gradient-to-b from-[#1a1a2e] via-[#17163e] to-black
                 flex xl:flex-row flex-col-reverse items-center justify-between 
                 lg:px-24 px-6 overflow-hidden"
    >
      <ParticleBackground />

      {/* Left Section */}
      <div className="flex flex-col gap-6 lg:gap-10 z-40 xl:mb-0 mb-[15%]">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
          }}
          className="text-5xl md:text-6xl lg:text-[72px] leading-tight font-bold text-white"
        >
          Hi, I&apos;m{" "}
          <span className="text-cyan-300">
            <Typewriter
              options={{
                strings: ["William Theodorus", "ウィリアム テオドラス"],
                loop: true,
                autoStart: true,
              }}
            />
          </span>
        </motion.h1>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="flex gap-3"
        >
          <span className="px-3 py-1 text-sm rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/30">
            Data Scientist
          </span>
          <span className="px-3 py-1 text-sm rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/30">
            Software Engineer
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.8,
          }}
          className="text-lg md:text-xl lg:text-2xl max-w-2xl text-white/90 leading-relaxed"
        >
          A passionate professional with a strong interest in turning data into
          meaningful insights and building impactful, scalable software
          solutions.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex gap-8 mt-2 text-white/80"
        >
          <div>
            <p className="text-3xl font-bold text-cyan-300">
              {repoCount !== null ? (
                <CountUp end={repoCount} duration={7} />
              ) : (
                "--"
              )}
              +
            </p>
            <p className="text-sm">Public Repos</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-cyan-300">
              {contributions !== null ? (
                <CountUp end={contributions} duration={7} />
              ) : (
                "--"
              )}
              +
            </p>
            <p className="text-sm">Contributions (recent)</p>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 1 }}
        >
          <a
            href="/CV.pdf"
            download
            aria-label="Download CV"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold
                       bg-gradient-to-r from-sky-500 to-cyan-400 text-white
                       shadow-lg hover:scale-105 hover:shadow-xl
                       transition-all duration-300 min-w-[170px]"
          >
            <Download size={18} /> Download CV
          </a>
          <a
            href="https://github.com/williamtheodoruswijaya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold
                       border border-white text-white
                       hover:bg-white hover:text-sky-700
                       hover:shadow-md transition-all duration-300 min-w-[170px]"
          >
            <FaGithub size={18} /> GitHub
          </a>
          <a
            href="#contact"
            aria-label="Go to Contact Section"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold
                       bg-white/10 backdrop-blur-md text-white
                       hover:bg-white hover:text-sky-700
                       hover:shadow-md transition-all duration-300 min-w-[170px]"
          >
            <Mail size={18} /> Contact Me
          </a>
        </motion.div>
      </div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
        className="hidden xl:flex items-center justify-center z-30 relative"
      >
        {/* Glow with smooth entry */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="absolute w-[400px] h-[500px] bg-purple-500/20 rounded-full blur-3xl -z-10"
        />

        {/* Profile frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative w-[350px] h-[450px] rounded-[18px] overflow-hidden 
               border-4 border-purple-400/30 shadow-2xl shadow-purple-500/20"
        >
          <Image
            src="/assets/self-potrait.jpg"
            alt="Foto Profil William Theodorus"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Scroll Down Arrow */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 
                   text-white/70 hover:text-white transition"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={50} className="animate-bounce" />
      </motion.button>
    </section>
  );
};

export default Hero;
