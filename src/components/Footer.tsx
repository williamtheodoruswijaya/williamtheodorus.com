"use client";

import { ViewCounter } from "./ViewCounter";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="w-full bg-black text-neutral-400 py-8 px-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p>&copy; {currentYear} William Theodorus. All Rights Reserved.</p>
                    <div className="mt-2">
                        <ViewCounter />
                    </div>
                </div>
                <div className="flex gap-6">
                    <a href="https://github.com/williamtheodoruswijaya" aria-label="GitHub" className="hover:text-white transition-colors"><FiGithub size={20}/></a>
                    <a href="https://www.linkedin.com/in/williamtheodoruswijaya/" aria-label="LinkedIn" className="hover:text-white transition-colors"><FiLinkedin size={20}/></a>
                    <a href="https://discordapp.com/users/689657830273187943" aria-label="Discord" className="hover:text-white transition-colors"><FaDiscord size={20}/></a>
                </div>
            </div>
        </footer>
    );
};