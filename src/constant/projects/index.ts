import { ProjectType } from "./interface"

const PROJECTS: ProjectType[] = [
    {
        name: "Mood Bridge",
        image: "/projects/1.png",
        description:
            "Mood Bridge serves as an inclusive digital sanctuary...",
        skills: [
            'Machine Learning', 'Natural Language Processing', 'Golang', 'Next JS', 'Typescript', 'TailwindCSS', 'Gin Gonic', 'PostgresSQL',
        ],
        links: [
            { name: 'Pitch Deck', url: 'https://speakerdeck.com/williamtheodoruswijaya/mood-bridge' },
            { name: 'Repository', url: 'https://github.com/williamtheodoruswijaya/mood-bridge-v2' },
            { name: 'Website', url: 'https://mood-bridge-v2.vercel.app' }
        ],
        types: ['Data Science', 'Software Engineering']
    },
    {
        name: 'VoxA',
        image: '/projects/2.png',
        description: "VoxA is an AI-powered mobile app designed...",
        skills: ['Golang', 'Gin Gonic', 'PostgresSQL', 'Flutter'],
        links: [
            { name: 'Pitch Deck', url: 'https://speakerdeck.com/williamtheodoruswijaya/voxa' },
            { name: 'Repository', url: 'https://github.com/Reynardstw/VoxA' }
        ],
        types: ['Software Engineering']
    },
    {
        name: 'Dodoru',
        image: '/projects/3.png',
        description: "Dodoru is an AI-powered platform designed...",
        skills: ['React', 'JavaScript', 'Firebase', 'Gemini'],
        links: [
            { name: 'Pitch Deck', url: 'https://speakerdeck.com/williamtheodoruswijaya/dodoru' },
            { name: 'Repository', url: 'https://github.com/kensunjaya/Technoscape_Hackathon' },
            { name: 'Website', url: 'https://dodoru-sehari-jadi.vercel.app' }
        ],
        types: ['Software Engineering']
    }
]

export default PROJECTS;