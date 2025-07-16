import React from 'react';
import Image from 'next/image';
import { ProjectType } from '@/constant/projects/interface';
import { FiGithub } from "react-icons/fi";
import { FaSpeakerDeck, FaResearchgate } from "react-icons/fa";
import { MdComputer } from "react-icons/md";

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

export default ProjectCard;