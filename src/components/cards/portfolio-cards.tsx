"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { FaResearchgate, FaSpeakerDeck } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Experience } from "@/types/experience";
import { Project } from "@/types/project";

const GetLinkIcon = ({ name }: { name: string }) => {
  const lowerCaseName = name.toLowerCase();
  if (lowerCaseName.includes("deck")) return <FaSpeakerDeck />;
  if (lowerCaseName.includes("github") || lowerCaseName.includes("repository")) {
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
  <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="uip-icon-button h-9 w-9">
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
  const primaryLink = links?.[links.length - 1]?.url ?? "#";

  return (
    <article className="uip-card group flex h-full flex-col overflow-hidden hover:-translate-y-1 hover:border-[var(--line-strong)] hover:shadow-xl">
      <a href={primaryLink} target="_blank" rel="noreferrer" className="block cursor-pointer">
        {image && (
          <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[var(--line)] bg-[var(--surface-muted)]">
            <Image
              src={image}
              alt={name}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>
        )}
      </a>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <a href={primaryLink} target="_blank" rel="noreferrer" className="cursor-pointer">
            <h3 className="uip-heading text-2xl transition-colors duration-200 group-hover:text-[var(--accent)]">
              {name}
            </h3>
          </a>
          <ArrowUpRight
            className="mt-1 h-5 w-5 shrink-0 text-[var(--muted)] transition-colors duration-200 group-hover:text-[var(--accent)]"
            aria-hidden="true"
          />
        </div>

        <p className="uip-copy mt-3 line-clamp-4 text-sm leading-6">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <SkillPill key={skill} skill={skill} />
          ))}
        </div>

        {links && (
          <div className="mt-auto flex items-center gap-2 pt-5">
            {links.map((link) => (
              <IconLink href={link.url} label={link.name} key={link.name}>
                <GetLinkIcon name={link.name} />
              </IconLink>
            ))}
          </div>
        )}
      </div>
    </article>
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
        <div className="uip-card-muted relative h-20 w-20 shrink-0 overflow-hidden p-2">
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
