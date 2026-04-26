"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, Send, X } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { useRef, useState } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import emailjs from "@emailjs/browser";
import { ThemeToggle } from "@/components/theme/theme-toggle";

const navItems = [
  { name: "Home", link: "home" },
  { name: "About", link: "about" },
  { name: "Experience", link: "experiences" },
  { name: "Projects", link: "projects" },
  { name: "Contact", link: "contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/williamtheodoruswijaya",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/williamtheodoruswijaya/",
    icon: Linkedin,
  },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const shouldReduceMotion = useReducedMotion();

  const openContactForm = () => {
    setIsSuccess(false);
    setErrorMessage("");
    setContactFormOpen(true);
  };

  const closeContactForm = () => setContactFormOpen(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setErrorMessage("");
    setIsSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(
        () => {
          setIsSuccess(true);
          setTimeout(() => {
            closeContactForm();
          }, 2000);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setErrorMessage("Failed to send message. Please try again.");
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="uip-raised site-container flex h-16 items-center justify-between px-3 sm:px-4"
      >
        <ScrollLink
          to="home"
          smooth
          duration={500}
          className="flex cursor-pointer items-center gap-3 rounded-md pr-2"
          aria-label="Go to home"
        >
          <span className="uip-card-muted relative h-10 w-10 overflow-hidden">
            <Image
              src="/assets/app-icon.png"
              fill
              alt="William Theodorus icon"
              sizes="40px"
              className="object-cover"
            />
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="uip-heading block text-sm">
              William Theodorus
            </span>
            <span className="uip-copy block text-xs">
              Data Science + Software
            </span>
          </span>
        </ScrollLink>

        <nav className="hidden items-center rounded-lg p-1 lg:flex uip-card-muted">
          {navItems.map((item) => (
            <ScrollLink
              key={item.link}
              activeClass="is-active"
              to={item.link}
              spy
              smooth
              offset={-96}
              duration={500}
              className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 uip-copy hover:text-[var(--foreground)] [&.is-active]:bg-[var(--surface)] [&.is-active]:text-[var(--foreground)] [&.is-active]:shadow-sm"
            >
              {item.name}
            </ScrollLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="uip-icon-button"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
          <a
            href="https://discordapp.com/users/689657830273187943"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className="uip-icon-button"
          >
            <FaDiscord className="h-4 w-4" aria-hidden="true" />
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={openContactForm}
            className="uip-button-primary ml-1 min-h-10 px-4 py-2"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Contact
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="uip-icon-button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="uip-raised site-container mt-2 p-3 md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.link}
                  to={item.link}
                  spy
                  smooth
                  offset={-96}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="uip-copy cursor-pointer rounded-md px-3 py-3 text-sm font-medium transition-colors duration-200 hover:bg-[var(--surface-muted)] hover:text-[var(--foreground)]"
                >
                  {item.name}
                </ScrollLink>
              ))}
            </nav>
            <div className="mt-3 flex items-center gap-2 border-t border-[var(--line)] pt-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="uip-icon-button"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  openContactForm();
                }}
                className="uip-button-primary ml-auto min-h-10 px-4 py-2"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {contactFormOpen && (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[99] flex items-center justify-center bg-zinc-950/50 p-4 backdrop-blur-sm"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="header-contact-title"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="uip-card relative w-full max-w-lg p-6 shadow-2xl"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="uip-eyebrow tracking-[0.18em]">Contact</p>
                  <h2 id="header-contact-title" className="uip-heading mt-2 text-2xl">
                    Tell me about your idea
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={closeContactForm}
                  className="uip-icon-button"
                  aria-label="Close contact form"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="header-name"
                    className="uip-copy-strong mb-2 block text-sm font-medium"
                  >
                    Name
                  </label>
                  <input
                    name="from_name"
                    type="text"
                    id="header-name"
                    placeholder="Your name"
                    required
                    className="uip-field"
                  />
                </div>
                <div>
                  <label
                    htmlFor="header-email"
                    className="uip-copy-strong mb-2 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    name="from_email"
                    type="email"
                    id="header-email"
                    placeholder="you@example.com"
                    required
                    className="uip-field"
                  />
                </div>
                <div>
                  <label
                    htmlFor="header-message"
                    className="uip-copy-strong mb-2 block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    id="header-message"
                    placeholder="What should we build?"
                    required
                    className="uip-field"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="uip-button-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                <div className="min-h-6 text-center text-sm">
                  {isSuccess && (
                    <p className="text-emerald-600">Message sent successfully.</p>
                  )}
                  {errorMessage && <p className="text-red-600">{errorMessage}</p>}
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
