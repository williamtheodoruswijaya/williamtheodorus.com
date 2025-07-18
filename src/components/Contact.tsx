"use client";

import { motion } from 'framer-motion';

const Contact = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert("Thank you for your message! This is just a demo.");
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
                I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out. My inbox is always open!
            </motion.p>

            <motion.form
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
                        placeholder="Your Name"
                        required
                        className="w-full p-3 rounded-lg bg-black/20 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-[#9BF6FF] focus:outline-none transition-all"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        required
                        className="w-full p-3 rounded-lg bg-black/20 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-[#9BF6FF] focus:outline-none transition-all"
                    />
                </div>
                <textarea
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="w-full p-3 rounded-lg bg-black/20 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-[#9BF6FF] focus:outline-none transition-all"
                />
                <button
                    type="submit"
                    className="self-center mt-4 rounded-full border-2 border-[#9BF6FF] text-[#9BF6FF] font-bold select-none py-3 px-8 transition-all duration-300 hover:bg-[#9BF6FF] hover:text-black hover:shadow-lg hover:shadow-[#9BF6FF]/25"
                >
                    Send Message
                </button>
            </motion.form>
        </section>
    );
};

export default Contact;