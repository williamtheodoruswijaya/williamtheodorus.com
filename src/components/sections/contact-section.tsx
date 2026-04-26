"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.current) return;

    setIsSubmitting(true);
    setErrorMessage("");
    setIsSuccess(false);

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        () => {
          setIsSuccess(true);
          form.current?.reset();
        },
        (error) => {
          console.error(error);
          setErrorMessage("Failed to send message. Please try again later.");
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="site-section site-section-muted border-b-0">
      <div className="site-container grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="uip-eyebrow">Contact</p>
          <h2 className="uip-heading mt-4 text-4xl sm:text-5xl">
            Have a project, dataset, or product problem in mind?
          </h2>
          <p className="uip-copy mt-6 text-lg leading-8">
            My inbox is open for collaboration, research, software projects, or
            thoughtful questions about building with data.
          </p>
          <a
            href="mailto:williamtheodoruswijaya@gmail.com"
            className="uip-button-secondary mt-8"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email directly
          </a>
        </motion.div>

        <motion.form
          ref={form}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          onSubmit={handleSubmit}
          className="uip-card p-5 sm:p-6"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-name"
                className="uip-copy-strong mb-2 block text-sm font-medium"
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="from_name"
                placeholder="Your name"
                required
                className="uip-field"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="uip-copy-strong mb-2 block text-sm font-medium"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="from_email"
                placeholder="you@example.com"
                required
                className="uip-field"
              />
            </div>
          </div>
          <div className="mt-5">
            <label
              htmlFor="contact-message"
              className="uip-copy-strong mb-2 block text-sm font-medium"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Tell me what you are working on"
              required
              rows={6}
              className="uip-field"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="uip-button-primary mt-5 w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          <div className="mt-4 min-h-6 text-sm">
            {isSuccess && (
              <p className="text-emerald-600">
                Message sent successfully. Thank you.
              </p>
            )}
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
