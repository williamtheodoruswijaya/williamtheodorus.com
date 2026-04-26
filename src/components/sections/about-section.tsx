"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { FaPython, FaAws, FaDocker } from "react-icons/fa";
import { FaGolang, FaFlutter } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";
import {
  SiTensorflow,
  SiPostgresql,
  SiDotnet,
  SiNestjs,
  SiApachekafka,
  SiRedis,
  SiMysql,
} from "react-icons/si";

const skills = [
  { icon: <TbBrandCSharp size={24} />, name: "C#" },
  { icon: <SiDotnet size={24} />, name: "ASP.NET" },
  { icon: <FaGolang size={24} />, name: "Golang" },
  { icon: <SiNestjs size={24} />, name: "Nest.js" },
  { icon: <SiApachekafka size={24} />, name: "Apache Kafka" },
  { icon: <SiRedis size={24} />, name: "Redis" },
  { icon: <FaAws size={24} />, name: "AWS" },
  { icon: <FaPython size={24} />, name: "Python" },
  { icon: <SiTensorflow size={24} />, name: "TensorFlow" },
  { icon: <FaDocker size={24} />, name: "Docker" },
  { icon: <SiPostgresql size={24} />, name: "PostgreSQL" },
  { icon: <SiMysql size={24} />, name: "MySQL" },
];

const AboutSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="site-section">
      <div className="site-container space-y-14">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="uip-eyebrow flex items-center gap-2">
              <span className="font-mono text-[var(--accent)]">01</span>
              <span className="h-px w-6 bg-[var(--accent)] opacity-60" />
              About
            </p>

            <h2 className="uip-heading mt-4 text-4xl sm:text-5xl leading-[1.1]">
              An engineer who likes the work to feel{" "}
              <em className="not-italic text-[var(--accent)]">
                understandable.
              </em>
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
              {[
                { label: "Based in", value: "Indonesia" },
                { label: "Focus", value: "Data + product" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="uip-card-muted relative overflow-hidden p-4 pt-5"
                >
                  <span className="absolute inset-x-0 top-0 h-[2px] bg-[var(--accent)] opacity-70" />
                  <p className="uip-heading text-xs uppercase tracking-widest opacity-60">
                    {label}
                  </p>
                  <p className="uip-copy mt-1 font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-8 md:grid-cols-[200px_1fr] md:items-start"
          >
            <div className="relative w-full max-w-[200px]">
              <span className="absolute -inset-2 rounded-2xl border border-[var(--accent)] opacity-25" />
              <span className="absolute -inset-4 rounded-3xl border border-[var(--accent)] opacity-10" />
              <div className="uip-card-muted relative aspect-square w-full max-w-[220px] overflow-hidden">
                <Image
                  src="/assets/potrait.jpg"
                  alt="William Theodorus portrait"
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="uip-copy space-y-5 text-base leading-8 sm:text-lg">
              <p className="border-l-2 border-[var(--accent)] pl-4 opacity-90">
                Hello, I&apos;m William, a developer with a deep interest in the
                analytical world of data science and the creative challenges of
                software engineering.
              </p>
            </div>
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-5 flex items-end justify-between gap-4"
          >
            <div>
              <p className="uip-copy flex items-center gap-2 text-xs font-semibold uppercase tracking-widest">
                <span className="font-mono text-[var(--accent)]">02</span>
                <span className="h-px w-4 bg-[var(--accent)] opacity-60" />
                Toolkit
              </p>
              <h3 className="uip-heading mt-2 text-2xl">Core skills</h3>
            </div>
          </motion.div>
          <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
            {skills.map((skill, i) => (
              <motion.li
                key={skill.name}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.35,
                  delay: shouldReduceMotion ? 0 : 0.04 * i,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.1 }}
                className="uip-card group flex flex-col items-center justify-center gap-2.5 p-4 py-6
                           text-center transition-all duration-200
                           hover:-translate-y-0.5 hover:border-[var(--accent)]
                           hover:bg-[var(--accent-soft)] hover:shadow-sm"
              >
                <span
                  className="text-[var(--accent)] opacity-70 transition-opacity duration-200 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  {skill.icon}
                </span>
                <span className="uip-heading text-xs leading-tight">
                  {skill.name}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
