"use client";

import React, { useEffect, useId, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { FiGithub } from "react-icons/fi";
import { FaResearchgate, FaSpeakerDeck } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown, X } from "lucide-react";
import { Experience } from "@/types/experience";
import { Project } from "@/types/project";

const GetLinkIcon = ({ name }: { name: string }) => {
  const lowerCaseName = name.toLowerCase();
  if (lowerCaseName.includes("deck")) return <FaSpeakerDeck />;
  if (
    lowerCaseName.includes("github") ||
    lowerCaseName.includes("repository")
  ) {
    return <FiGithub />;
  }
  if (lowerCaseName.includes("paper")) return <FaResearchgate />;
  return <MdComputer />;
};

const IconLink = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="uip-icon-button h-9 w-9"
  >
    {children}
  </a>
);

const SkillPill = ({ skill }: { skill: string }) => (
  <span className="uip-pill">{skill}</span>
);

export const ProjectCard = ({
  name,
  image,
  description,
  skills,
  links,
}: Project) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const titleId = useId();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsModalOpen(false);
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <article className="uip-card group flex h-full flex-col overflow-hidden hover:-translate-y-1 hover:border-[var(--line-strong)] hover:shadow-xl">
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="flex h-full w-full cursor-pointer flex-col text-left"
          aria-haspopup="dialog"
        >
          {image && (
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[var(--line)] bg-[var(--surface-muted)]">
              <Image
                src={image}
                alt={name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
          )}

          <div className="flex min-h-28 flex-1 items-start justify-between gap-4 p-5">
            <h3 className="uip-heading line-clamp-3 min-h-[4.5rem] pr-2 text-xl leading-6 transition-colors duration-200 group-hover:text-[var(--accent)]">
              {name}
            </h3>
            <ArrowUpRight
              className="mt-1 h-5 w-5 shrink-0 text-[var(--muted)] transition-colors duration-200 group-hover:text-[var(--accent)]"
              aria-hidden="true"
            />
          </div>
        </button>
      </article>

      {isMounted &&
        createPortal(
          <AnimatePresence>
            {isModalOpen && (
              <motion.div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/55 p-4 backdrop-blur-md"
                initial={shouldReduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onMouseDown={() => setIsModalOpen(false)}
              >
                <motion.div
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby={titleId}
                  className="os-window max-h-[calc(100vh-2rem)] w-full max-w-5xl overflow-hidden"
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, y: 20, scale: 0.98 }
                  }
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 16, scale: 0.98 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  onMouseDown={(event) => event.stopPropagation()}
                >
                  <div className="os-window-titlebar static">
                    <div className="flex items-center gap-2" aria-hidden="true">
                      <span className="os-traffic bg-[#ff5f57]" />
                      <span className="os-traffic bg-[#febc2e]" />
                      <span className="os-traffic bg-[var(--accent)]" />
                    </div>
                    <p className="truncate text-xs font-semibold text-[var(--foreground)]">
                      Project Details
                    </p>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                        className="uip-icon-button h-9 w-9"
                        aria-label="Close project details"
                      >
                        <X className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div className="grid max-h-[calc(100vh-5rem)] overflow-y-auto lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="flex flex-col p-5 sm:p-6 lg:p-8">
                      <p className="uip-eyebrow">Project</p>
                      <h3 id={titleId} className="uip-heading mt-3 text-3xl">
                        {name}
                      </h3>
                      <p className="uip-copy mt-5 text-sm leading-7">
                        {description}
                      </p>

                      <div className="mt-6">
                        <p className="uip-copy-strong mb-3 text-xs font-semibold uppercase">
                          Toolkit
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {skills.map((skill) => (
                            <SkillPill key={skill} skill={skill} />
                          ))}
                        </div>
                      </div>

                      {links && (
                        <div className="mt-8">
                          <p className="uip-copy-strong mb-3 text-xs font-semibold uppercase">
                            Links
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {links.map((link) => (
                              <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="uip-button-secondary min-h-10 px-3 py-2"
                              >
                                <span className="text-base" aria-hidden="true">
                                  <GetLinkIcon name={link.name} />
                                </span>
                                {link.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="order-first border-b border-[var(--line)] bg-[var(--surface-muted)] p-3 lg:order-none lg:border-b-0 lg:border-l">
                      {image && (
                        <div className="relative min-h-[260px] overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface)] lg:h-full lg:min-h-[560px]">
                          <Image
                            src={image}
                            alt={name}
                            fill
                            sizes="(min-width: 1024px) 48vw, 100vw"
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
};

export const ExperienceCard = ({
  name,
  majorRole,
  roles,
  logo,
  links,
  date,
  skills,
  location,
}: Experience) => {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const roleList = roles ?? [];
  const detailsId = `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-details`;

  return (
    <article className="uip-card p-5 hover:border-[var(--line-strong)] md:p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <div className="uip-card-muted relative h-20 w-20 shrink-0 overflow-hidden p-2 bg-white">
          <Image
            src={logo}
            alt={`${name} logo`}
            fill
            sizes="80px"
            className="object-contain object-center p-2"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="uip-heading text-2xl">
                {majorRole ?? roleList[0]?.name}
              </h3>
              <p className="uip-copy-strong mt-1 text-base font-medium">
                {name}
              </p>
              <p className="uip-copy mt-2 text-sm">
                {date ?? roleList[0]?.date}
              </p>
              <p className="uip-copy mt-1 text-sm">{location}</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              aria-expanded={isOpen}
              aria-controls={detailsId}
              className="uip-button-secondary min-h-10 px-3 py-2"
            >
              {isOpen ? "Hide details" : "View details"}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={detailsId}
            key="details"
            initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="mt-6 space-y-5 border-t border-[var(--line)] pt-5">
              <div className="space-y-5">
                {roleList.map((role) => (
                  <div key={role.name}>
                    {roleList.length > 1 && (
                      <div className="mb-3">
                        <p className="uip-heading text-base">{role.name}</p>
                        <p className="uip-copy text-sm">{role.date}</p>
                      </div>
                    )}
                    <ul className="uip-copy space-y-2 text-sm leading-6">
                      {role.description.map((desc) => (
                        <li key={desc} className="flex gap-3">
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-[var(--accent)]"
                            aria-hidden="true"
                          />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {skills && (
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <SkillPill key={skill} skill={skill} />
                  ))}
                </div>
              )}

              {links && (
                <div className="flex items-center gap-2">
                  {links.map((link) => (
                    <IconLink href={link.url} label={link.name} key={link.name}>
                      <GetLinkIcon name={link.name} />
                    </IconLink>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};
