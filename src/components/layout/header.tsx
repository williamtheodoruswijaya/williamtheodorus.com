"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  BatteryMedium,
  Github,
  Linkedin,
  Mail,
  Menu,
  Send,
  Wifi,
  X,
} from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import emailjs from "@emailjs/browser";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import Image from "next/image";

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
  const [clock, setClock] = useState("");
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const updateClock = () => {
      setClock(
        new Intl.DateTimeFormat("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          weekday: "short",
        }).format(new Date()),
      );
    };

    updateClock();
    const timer = window.setInterval(updateClock, 30_000);
    return () => window.clearInterval(timer);
  }, []);

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
    <header className="os-menu-bar">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="site-container flex min-h-12 items-center justify-between gap-3 px-4"
      >
        <ScrollLink
          to="home"
          smooth
          duration={500}
          className="os-menu-brand"
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
            <span className="block text-sm font-semibold text-[var(--foreground)]">
              William Theodorus Wijaya
            </span>
            <span className="block text-[10px] text-[var(--muted)]">
              Portfolio.app
            </span>
          </span>
        </ScrollLink>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <ScrollLink
              key={item.link}
              activeClass="is-active"
              to={item.link}
              spy
              smooth
              offset={-80}
              duration={500}
              className="os-menu-item"
            >
              {item.name}
            </ScrollLink>
          ))}
        </nav>

        <div className="hidden items-center gap-1 md:flex">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="uip-icon-button h-9 w-9"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
          <a
            href="https://discordapp.com/users/689657830273187943"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className="uip-icon-button h-9 w-9"
          >
            <FaDiscord className="h-4 w-4" aria-hidden="true" />
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={openContactForm}
            className="uip-button-primary ml-1 min-h-9 px-3 py-2"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Contact
          </button>
          <div className="ml-2 hidden items-center gap-2 text-xs text-[var(--muted)] xl:flex">
            <Wifi className="h-4 w-4" aria-hidden="true" />
            <BatteryMedium className="h-4 w-4" aria-hidden="true" />
            <span>{clock || "--:--"}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="uip-icon-button h-9 w-9"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
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
            className="site-container os-mobile-menu mt-2 p-3 md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.link}
                  to={item.link}
                  spy
                  smooth
                  offset={-80}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="os-menu-item min-h-11"
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
                  className="uip-icon-button h-10 w-10"
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
                  <p className="uip-eyebrow">Contact</p>
                  <h2
                    id="header-contact-title"
                    className="uip-heading mt-2 text-2xl"
                  >
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
                    <p className="text-[var(--accent)]">
                      Message sent successfully.
                    </p>
                  )}
                  {errorMessage && (
                    <p className="text-red-600">{errorMessage}</p>
                  )}
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
