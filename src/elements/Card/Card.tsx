import React, {useState} from 'react';
import Image from 'next/image';
import { ProjectType } from '@/constant/projects/interface';
import { FiGithub } from "react-icons/fi";
import { FaSpeakerDeck, FaResearchgate, FaChevronDown } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion';
import {ExperiencesType} from "@/constant/experiences/interface";

const GetLinkIcon = ({ name }: { name: string }) => {
    const lowerCaseName = name.toLowerCase();
    if (lowerCaseName.includes('deck')) {
        return (
             <FaSpeakerDeck/>
        );
    }
    if (lowerCaseName.includes('github') || lowerCaseName.includes('repository')) {
        return (
            <FiGithub />
        );
    }
    if (lowerCaseName.includes('paper')) {
        return (
            <FaResearchgate/>
        )
    }
    return (
        <MdComputer/>
    );
};

const IconLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-sky-400 transition-all duration-300 hover:-translate-y-1">
        {children}
    </a>
);

const ProjectCard = ({
                         name,
                         image,
                         description,
                         skills,
                         links,
                     }: ProjectType) => {
    const primaryLink = links ? links[links.length - 1].url : '#';

    return (
        <div className="group bg-[#0B3866]/25 p-6 rounded-3xl flex flex-col gap-4 backdrop-blur-md shadow-xl w-full max-w-[500px] transition-all duration-300 hover:scale-[1.02] hover:bg-[#0B3866]/40">

            <a href={primaryLink} target="_blank" rel="noreferrer">
                {image && (
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            priority
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                )}
                <h2 className="text-2xl font-bold text-white mt-4 mb-1 hover:text-sky-300 transition-colors">{name}</h2>
            </a>

            <p className="text-neutral-300 text-sm md:text-base line-clamp-4">{description}</p>

            <div className="flex-grow"></div>

            <div className='mt-2'>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="rounded-full border border-[#9BF6FF]/50 text-[#9BF6FF] font-medium select-none py-1 px-3 transition-all text-xs hover:bg-[#9BF6FF] hover:text-black"
                        >
                            {skill}
                        </div>
                    ))}
                </div>

                {links && (
                    <div className="flex items-center gap-4 mt-4">
                        {links.map((link, idx) => (
                            <IconLink href={link.url} key={idx}>
                                <GetLinkIcon name={link.name} />
                            </IconLink>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const ExperienceCard = ({
                            name,
                            majorRole,
                            roles,
                            logo,
                            links,
                            date,
                            skills,
                            location
                        }: ExperiencesType) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-[#0B3866]/25 px-6 py-5 rounded-3xl flex flex-col gap-5 backdrop-blur-md shadow-xl w-full max-w-[350px] md:max-w-[700px]">

            <div className="flex flex-row items-center gap-6">
                <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                    <Image
                        src={logo}
                        alt={name}
                        fill
                        priority
                        className="object-contain object-center rounded-lg"
                    />
                </div>
                <div className="flex flex-col gap-0.5">
                    <h2 className="text-xl md:text-2xl font-bold text-white">{majorRole ?? roles?.[0]?.name}</h2>
                    <h3 className="text-lg md:text-xl text-neutral-200">{name}</h3>
                    <p className="text-sm text-neutral-400">{date ?? roles?.[0]?.date}</p>
                    <p className="text-xs md:text-sm text-neutral-400">{location}</p>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="details"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="flex flex-col gap-5 overflow-hidden"
                    >
                        <div className="flex flex-col gap-4 pl-2 border-l-2 border-sky-400/20">
                            {roles?.map((role) => (
                                <div className="flex flex-col gap-2" key={role.name}>
                                    {roles.length > 1 && (
                                        <div>
                                            <p className="font-bold text-white">{role.name}</p>
                                            <p className="text-sm text-neutral-400">{role.date}</p>
                                        </div>
                                    )}
                                    <ul className="list-disc list-inside space-y-1 text-neutral-300">
                                        {role.description?.map((desc, idx) => (
                                            <li key={idx} className="text-sm md:text-base">{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {skills && (
                            <div className="flex flex-wrap gap-2 py-2">
                                {skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="rounded-full border border-[#9BF6FF]/50 text-[#9BF6FF] font-medium select-none py-1 px-3 transition-all text-xs hover:bg-[#9BF6FF] hover:text-black"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        )}
                        {links && (
                            <div className="flex items-center gap-4">
                                {links.map((link) => (
                                    <IconLink href={link.url} key={link.name}>
                                        <GetLinkIcon name={link.name} />
                                    </IconLink>
                                ))}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="w-full border-t border-white/10 pt-3">
                <FaChevronDown
                    className={`w-6 h-6 mx-auto cursor-pointer text-neutral-400 hover:text-white transition-all duration-300 ${isOpen && 'rotate-180'}`}
                    onClick={() => setIsOpen(!isOpen)}
                />
            </div>
        </div>
    );
};

export { ProjectCard, ExperienceCard };