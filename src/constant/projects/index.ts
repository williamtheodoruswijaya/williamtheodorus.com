import { ProjectType } from "./interface"

const PROJECTS: ProjectType[] = [
    {
        name: "Analisis dan Prediksi Kinerja Saham e-IPO Menggunakan Pendekatan Tabular Transformer dan Attention Mechanism",
        image: "/projects/4.jpg",
        description:
            "Developed predictive models using Tabular Transformers, such as TabPFN and TabNet, to analyze and forecast the performance of e-IPO stocks in Indonesia , aiming to provide a data-driven tool for investment decision-making.",
        skills: [
            'Deep Learning', 'Web Scraping', 'Data Analysis', 'Transformer'
        ],
        links: [
            { name: 'Repository', url: 'https://github.com/williamtheodoruswijaya/Kode_Lagi-Uas-Gaskeun' },
            { name: 'Paper', url: 'https://drive.google.com/file/d/1z2VIbjPNYCVO7tMtjybwR-TTNEXpwfCA/view?usp=sharing' }
        ],
        types: ['Data Science']
    },
    {
        name: "Mood Bridge",
        image: "/projects/1.png",
        description:
            "Mood Bridge serves as an inclusive digital sanctuary to support the mental well-beings of individuals with mental-disabilities. This project was initiated to address the critical gap where technology often fails to serve the specific needs of this community, providing a safe space to counter social stigma and manage mental health challenges.",
        skills: [
            'Machine Learning', 'Natural Language Processing', 'Golang', 'Next JS', 'Typescript', 'TailwindCSS', 'Gin Gonic', 'PostgresSQL', 'Redis'
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
        description: "VoxA is an AI-powered mobile app designed to help students and professionals overcome information overload from lectures and meetings. The name itself comes from 'Vox,' the Latin word for voice, and 'A' for AI, reflecting its core function. The idea was born from a simple observation of watching friends struggle to take notes and pay attention simultaneously in class, ensuring no crucial knowledge is ever lost again.",
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
        description: "Dodoru is an AI-powered platform designed to help universities modernize their administrative services and enhance the student experience. This project was initiated to solve common frustrations in university administration, such as slow response times to inquiries and difficulty in accessing information, which often leads to a poor user experience. Dodoru was created to solve this by providing an intelligent, 24/7 \"humanlike\" AI assistant, ensuring prospective and current students get the answers they need instantly.",
        skills: ['React', 'JavaScript', 'Firebase', 'Gemini'],
        links: [
            { name: 'Pitch Deck', url: 'https://speakerdeck.com/williamtheodoruswijaya/dodoru' },
            { name: 'Repository', url: 'https://github.com/kensunjaya/Technoscape_Hackathon' },
            { name: 'Website', url: 'https://dodoru-sehari-jadi.vercel.app' }
        ],
        types: ['Software Engineering']
    },
    {
        name: "Analisis Titik Jenuh Urbanisasi terhadap Umur Harapan Hidup",
        image: "/projects/5.jpg",
        description: "Analyzed the non-linear relationship between global urbanization rates and life expectancy using a Generalized Additive Model (GAM). This study revealed a saturation point where, after ~90% urbanization, further increases no longer significantly impact life expectancy, highlighting the importance of equitable access to essential services.",
        skills: [
            'Generalized Additive Model (GAM)',
            'Data Analysis',
        ],
        links: [
            { name: 'Paper', url: 'https://drive.google.com/file/d/1yveyj8lpLzRzAwjMvKcsip4FNBJdGiKk/view?usp=sharing' }
        ],
        types: ['Data Science']
    },
    {
        name: "Robustness Analysis of an Ensemble Model Across Diverse Medical Datasets",
        image: "/projects/6.jpg",
        description: "Evaluated the robustness of an ensemble classification model across seven distinct medical datasets, including Fetal Health, Alzheimer's, and Heart Disease. The model demonstrated consistently high accuracy and F1-scores, showcasing its effectiveness, particularly on well-balanced and informative datasets.",
        skills: [
            'Machine Learning',
            'Data Analysis',
        ],
        links: [
            { name: 'Paper', url: 'https://drive.google.com/file/d/1_7Amyyopi1vTSOYrArgdGHrb8Pyraa8W/view?usp=sharing' }
        ],
        types: ['Data Science']
    },
]

export default PROJECTS;