"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from "react-icons/fa";
import { FaGolang, FaFlutter } from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTensorflow,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";

const skills = [
  { icon: <FaReact size={28} />, name: "React" },
  { icon: <SiNextdotjs size={28} />, name: "Next.js" },
  { icon: <FaFlutter size={28} />, name: "Flutter" },
  { icon: <FaNodeJs size={28} />, name: "Node.js" },
  { icon: <FaGolang size={28} />, name: "Golang" },
  { icon: <FaPython size={28} />, name: "Python" },
  { icon: <SiTensorflow size={28} />, name: "TensorFlow" },
  { icon: <FaAws size={28} />, name: "AWS" },
  { icon: <FaDocker size={28} />, name: "Docker" },
  { icon: <SiPostgresql size={28} />, name: "PostgreSQL" },
  { icon: <SiMongodb size={28} />, name: "MongoDB" },
  { icon: <SiFirebase size={28} />, name: "Firebase" },
];

const AboutSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="site-section">
      <div className="site-container grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <p className="uip-eyebrow">About</p>
          <h2 className="uip-heading mt-4 text-4xl sm:text-5xl">
            An engineer who likes the work to feel understandable.
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
            <div className="uip-card-muted p-4">
              <p className="uip-heading text-sm">Based in</p>
              <p className="uip-copy mt-1">Indonesia</p>
            </div>
            <div className="uip-card-muted p-4">
              <p className="uip-heading text-sm">Focus</p>
              <p className="uip-copy mt-1">Data + product</p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-8 md:grid-cols-[220px_1fr] md:items-start"
          >
            <div className="uip-card-muted relative aspect-square w-full max-w-[220px] overflow-hidden">
              <Image
                src="/assets/potrait.jpg"
                alt="William Theodorus portrait"
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>

            <div className="uip-copy space-y-5 text-base leading-8 sm:text-lg">
              <p>
                Hello, I&apos;m William, a developer with a deep interest in the
                analytical world of data science and the creative challenges of
                software engineering.
              </p>
              <p>
                My work is driven by the process of turning complex data into
                understandable stories, then building applications that make
                those stories useful in real workflows.
              </p>
              <p>
                Outside of coding, I enjoy exploring new technologies and
                collaborating with others to bring practical ideas to life.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="uip-copy text-xs font-semibold uppercase tracking-[0.18em]">
                  Toolkit
                </p>
                <h3 className="uip-heading mt-2 text-2xl">Core skills</h3>
              </div>
            </div>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {skills.map((skill) => (
                <li
                  key={skill.name}
                  className="uip-card flex min-h-24 items-center gap-3 p-4 hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]"
                >
                  <span className="text-[var(--accent)]" aria-hidden="true">
                    {skill.icon}
                  </span>
                  <span className="uip-heading text-sm">{skill.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
