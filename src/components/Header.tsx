"use client";

import { motion, AnimatePresence } from "framer-motion";
import {FiGithub, FiLinkedin, FiMenu, FiX} from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";
import {useState, useRef} from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import emailjs from '@emailjs/browser';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const [contactFormOpen, setContactFormOpen] = useState(false);
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
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

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            form.current,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
            .then(() => {
                setIsSuccess(true);
                setTimeout(() => {
                    closeContactForm();
                }, 2000);
            }, (error) => {
                console.log('FAILED...', error.text);
                setErrorMessage("Failed to send message. Please try again.");
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };
    const navItems = [
        {name: 'Home', link: 'home' },
        {name: 'About', link: 'about' },
        {name: 'Experience', link: 'experiences' },
        {name: 'Projects', link: 'projects'},
        {name: 'Contact', link: 'contact' },
    ]

    return (
        <header className={"absolute w-full z-50 transition-all duration-300"}>
            <div className={"container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20"}>
                <motion.div
                    initial={{opacity: 0, x: -100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 25,
                        delay: 0.3,
                        duration: 1.2 }}
                    className={"flex items-center"}>
                    <div className={"h-10 w-10 rounded-xl flex items-center justify-center text-blue-600 font-bold text-xl mr-3"}>
                        <Image
                            src={"/assets/app-icon.png"}
                            width={500}
                            height={500}
                            alt={"W"}
                            objectFit="cover"
                            className={"rounded-lg"}
                        />
                    </div>
                    <span className={"text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent"}>
                        William Theodorus
                    </span>
                </motion.div>

                <nav className={"lg:flex hidden space-x-8"}>
                    {navItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: -20 }}
                            animate={{opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                                delay: 0.7 + index * 0.2
                            }}
                        >
                            <ScrollLink
                                activeClass={"active-link"}
                                to={item.link}
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                className={"relative text-gray-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium transition-colors duration-300 group cursor-pointer"}
                            >
                                {item.name}
                                <span className={"absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-200 group-hover:w-full transition-all duration-300"}></span>
                            </ScrollLink>
                        </motion.div>
                    ))}
                </nav>

                <div className={"md:flex hidden items-center space-x-4"}>
                    <motion.a
                        initial={{opacity: 0, scale: 0.5 }}
                        animate={{opacity: 1, scale: 1 }}
                        transition={{delay: 1.3, duration: 0.8 }}
                        className={"text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"} href={"https://github.com/williamtheodoruswijaya"}>
                        <FiGithub className={"w-5 h-5"}/>
                    </motion.a>
                    <motion.a
                        initial={{opacity: 0, scale: 0.5 }}
                        animate={{opacity: 1, scale: 1 }}
                        transition={{delay: 1.3, duration: 0.8 }}
                        className={"text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"} href={"https://www.linkedin.com/in/williamtheodoruswijaya/"}>
                        <FiLinkedin className={"w-5 h-5"}/>
                    </motion.a>
                    <motion.a
                        initial={{opacity: 0, scale: 0.5 }}
                        animate={{opacity: 1, scale: 1 }}
                        transition={{delay: 1.3, duration: 0.8 }}
                        className={"text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"} href={"https://discordapp.com/users/689657830273187943"}>
                        <FaDiscord className={"w-5 h-5"}/>
                    </motion.a>

                    <motion.button
                        onClick={openContactForm}
                        initial={{opacity: 0, scale: 0.8 }}
                        animate={{opacity: 1, scale: 1 }}
                        transition={{
                            delay: 1.6,
                            duration: 0.8,
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                        }}
                        className={"ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-cyan-700 font-bold hover:from-cyan-700 hover:to-blue-700 hover:text-white transition-all duration-500"}>
                        Contact
                    </motion.button>
                </div>

                <div className={"md:hidden flex items-center"}>
                    <motion.button
                        whileTap={{ scale: 0.7 }}
                        onClick={toggleMenu}
                        className={"text-gray-300"}>
                        { isOpen ? <FiX className={"h-6 w-6"}/> : <FiMenu className={"h-6 w-6"}/> }
                    </motion.button>
                </div>
            </div>

            <motion.div
                initial={{opacity: 0, height: 0}}
                animate={{ opacity: isOpen ? 1:0, height: isOpen ? "auto":0}}
                transition={{duration:0.5}}
                className={"md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5"}>
                <nav className={"flex flex-col space-y-3"}>
                    {navItems.map((item, index) => (
                        <ScrollLink
                            key={index}
                            to={item.link}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={toggleMenu}
                            className={"text-gray-300 font-medium py-2 cursor-pointer"}>
                            {item.name}
                        </ScrollLink>
                    ))}
                </nav>

                <div className={"pt-4 border-t border-gray-200 dark:border-gray-700"}>
                    <div className={"flex space-x-5"}>
                        <a href={"https://github.com/williamtheodoruswijaya"}>
                            <FiGithub className={"h-5 w-5 text-gray-300"}/>
                        </a><a href={"https://www.linkedin.com/in/williamtheodoruswijaya/"}>
                            <FiLinkedin className={"h-5 w-5 text-gray-300"}/>
                        </a><a href={"https://discordapp.com/users/689657830273187943"}>
                            <FaDiscord className={"h-5 w-5 text-gray-300"}/>
                        </a>
                    </div>
                    <button
                        onClick={() => {
                            toggleMenu();
                            openContactForm();
                        }}
                        className={"mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-400 font-bold"}>
                        Contact Me
                    </button>
                </div>
            </motion.div>

            <AnimatePresence>
                {contactFormOpen && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.5}}
                        className={"fixed inset-0 bg-black/50 backdrop-blur-sm z-[99] flex items-center justify-center p-4"}
                    >
                        <motion.div
                            initial={{scale: 0.8, opacity: 0, y: 30}}
                            animate={{scale:1, opacity:1, y:0}}
                            exit={{scale:0.8, opacity:0, y:30}}
                            transition={{
                                type:"spring",
                                damping: 30,
                                stiffness: 200,
                                duration: 0.8
                            }}
                            className={"bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6 relative"}>
                            <div className={"flex justify-between items-center mb-4"}>
                                <h1 className={"text-2xl font-bold text-gray-800 dark:text-gray-300"}>Get In Touch</h1>
                                <button onClick={closeContactForm} className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300">
                                    <FiX className={"w-5 h-5"}/>
                                </button>
                            </div>

                            <form ref={form} onSubmit={handleSubmit} className={"space-y-4"}>
                                <div>
                                    <label htmlFor={"name"} className={"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"}>Name</label>
                                    <input name="from_name" type={"text"} id={"name"} placeholder={"Your Name"} required className={"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"}/>
                                </div>
                                <div>
                                    <label htmlFor={"email"} className={"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"}>Email</label>
                                    <input name="from_email" type={"email"} id={"email"} placeholder={"Your Email"} required className={"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"}/>
                                </div>
                                <div>
                                    <label htmlFor={"message"} className={"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"}>Message</label>
                                    <textarea name="message" rows={4} id={"message"} placeholder={"How may I help you?"} required className={"w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"}/>
                                </div>
                                <div className="pt-2">
                                    <motion.button
                                        type={"submit"}
                                        disabled={isSubmitting}
                                        whileHover={{scale: isSubmitting ? 1 : 1.03 }}
                                        whileTap={{scale: isSubmitting ? 1 : 0.97 }}
                                        className={"w-full px-4 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:shadow-cyan-600/50 disabled:opacity-50 disabled:cursor-not-allowed"}>
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </motion.button>
                                </div>
                                <div className="h-6 text-center">
                                    {isSuccess && <p className="text-green-500">Message sent successfully!</p>}
                                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}