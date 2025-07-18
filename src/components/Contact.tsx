"use client";

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);

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

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then(
                () => {
                    setIsSuccess(true);
                    form.current?.reset();
                },
                (error) => {
                    console.log(error);
                    setErrorMessage("Failed to send message. Please try again later.");
                },
            )
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" className="flex flex-col items-center justify-center gap-6 z-10 py-20 md:py-40">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9BF6FF] to-[#95F9C3]">
                Get In Touch
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center max-w-xl text-lg text-gray-300"
            >
                My inbox is always open. Whether you have a question or just want to say hi, I’ll get back to you!
            </motion.p>

            <motion.form
                ref={form}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="w-full max-w-2xl mt-8 flex flex-col gap-6"
            >
                <div className="flex flex-col sm:flex-row gap-6">
                    <input
                        type="text"
                        name="from_name"
                        placeholder="Your Name"
                        required
                        className="w-full p-3 rounded-lg bg-black/20 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-[#9BF6FF] focus:outline-none transition-all"
                    />
                    <input
                        type="email"
                        name="from_email"
                        placeholder="Your Email"
                        required
                        className="w-full p-3 rounded-lg bg-black/20 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-[#9BF6FF] focus:outline-none transition-all"
                    />
                </div>
                <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="w-full p-3 rounded-lg bg-black/20 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-[#9BF6FF] focus:outline-none transition-all"
                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="self-center mt-4 rounded-full border-2 border-[#9BF6FF] text-[#9BF6FF] font-bold select-none py-3 px-8 transition-all duration-300 hover:bg-[#9BF6FF] hover:text-black disabled:bg-gray-500 disabled:border-gray-500 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {isSuccess && <p className="text-green-500 text-center mt-4">Message sent successfully! Thank you.</p>}
                {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}
            </motion.form>
        </section>
    );
};

export default Contact;