"use client";

import {
  BriefcaseBusiness,
  Github,
  Home,
  Linkedin,
  Mail,
  UserRound,
} from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { ViewCounter } from "./view-counter";

const dockItems = [
  { name: "Home", link: "home", icon: Home },
  { name: "About", link: "about", icon: UserRound },
  { name: "Work", link: "experiences", icon: BriefcaseBusiness },
  { name: "Contact", link: "contact", icon: Mail },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="os-dock-wrap" aria-label="Portfolio dock">
      <div className="os-dock">
        <div className="hidden min-w-0 flex-col px-2 lg:flex">
          <p className="truncate text-xs font-semibold text-[var(--foreground)]">
            William Theodorus
          </p>
          <div className="flex items-center gap-2 text-[10px] text-[var(--muted)]">
            <span>&copy; {currentYear}</span>
            <ViewCounter compact />
          </div>
        </div>

        <div className="os-dock-divider hidden lg:block" />

        <nav className="flex items-center gap-1" aria-label="Dock navigation">
          {dockItems.map(({ icon: Icon, link, name }) => (
            <ScrollLink
              key={link}
              to={link}
              spy
              smooth
              offset={-80}
              duration={500}
              aria-label={name}
              className="os-dock-icon"
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">{name}</span>
            </ScrollLink>
          ))}
        </nav>

        <div className="os-dock-divider" />

        <div className="flex items-center gap-1">
          <a
            href="https://github.com/williamtheodoruswijaya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="os-dock-icon"
          >
            <Github className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/williamtheodoruswijaya/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="os-dock-icon"
          >
            <Linkedin className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="https://discordapp.com/users/689657830273187943"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className="os-dock-icon"
          >
            <FaDiscord className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};
