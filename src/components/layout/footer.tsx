"use client";

import { Github, Linkedin } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { ViewCounter } from "./view-counter";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface)] px-6 py-8 transition-colors duration-200">
      <div className="site-container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="uip-heading text-sm">
            &copy; {currentYear} William Theodorus. All rights reserved.
          </p>
          <div className="mt-2">
            <ViewCounter />
          </div>
        </div>

        <div className="flex gap-2">
          <a
            href="https://github.com/williamtheodoruswijaya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="uip-icon-button"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/williamtheodoruswijaya/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="uip-icon-button"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="https://discordapp.com/users/689657830273187943"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className="uip-icon-button"
          >
            <FaDiscord className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};
