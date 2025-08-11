import { ProjectType } from "./interface";

const PROJECTS: ProjectType[] = [
  {
    name: "Urban Water Quality Monitoring with Multimodal AI",
    image: "/projects/8.jpg",
    description:
        "Develops an urban water pollution risk classification system by fusing multimodal data from citizen reports. By combining textual and visual data with geospatial and temporal feature.",
    skills: [
      "Machine Learning",
      "Modality",
      "Natural Language Processing",
      "Image Processing"
    ],
    links: [
      {
        name: "Paper",
        url: "https://drive.google.com/file/d/1DcQ7ss-r3WeN4zpuYMpuGhWxgfY8BK7L/view?usp=sharing"
      }
    ],
    types: ["Data Science"],
  },
  {
    name: "Mood Bridge",
    image: "/projects/1.png",
    description:
      "Mood Bridge serves as an inclusive digital sanctuary to support the mental well-beings of individuals with mental-disabilities. This project was initiated to address the critical gap where technology often fails to serve the specific needs of this community, providing a safe space to counter social stigma and manage mental health challenges.",
    skills: [
      "Machine Learning",
      "Natural Language Processing",
      "Golang",
      "Next JS",
      "Typescript",
      "TailwindCSS",
      "Gin Gonic",
      "PostgresSQL",
      "Redis",
    ],
    links: [
      {
        name: "Pitch Deck",
        url: "https://speakerdeck.com/williamtheodoruswijaya/mood-bridge",
      },
      {
        name: "Repository",
        url: "https://github.com/williamtheodoruswijaya/mood-bridge-v2",
      },
      { name: "Website", url: "https://mood-bridge-v2.vercel.app" },
    ],
    types: ["Data Science", "Software Engineering"],
  },
  {
    name: "VoxA",
    image: "/projects/2.png",
    description:
      "VoxA is an AI-powered mobile app designed to help students and professionals overcome information overload from lectures and meetings. The name itself comes from 'Vox,' the Latin word for voice, and 'A' for AI, reflecting its core function. The idea was born from a simple observation of watching friends struggle to take notes and pay attention simultaneously in class, ensuring no crucial knowledge is ever lost again.",
    skills: ["Golang", "Gin Gonic", "PostgresSQL", "Flutter"],
    links: [
      {
        name: "Pitch Deck",
        url: "https://speakerdeck.com/williamtheodoruswijaya/voxa",
      },
      { name: "Repository", url: "https://github.com/Reynardstw/VoxA" },
    ],
    types: ["Software Engineering"],
  },
  {
    name: "Predicting e-IPO Stock Performance using Tabular Transformers",
    image: "/projects/4.jpg",
    description:
        "Developed predictive models using Tabular Transformers, such as TabPFN and TabNet, to analyze and forecast the performance of e-IPO stocks in Indonesia , aiming to provide a data-driven tool for investment decision-making.",
    skills: ["Deep Learning", "Web Scraping", "Data Analysis", "Transformer"],
    links: [
      {
        name: "Repository",
        url: "https://github.com/williamtheodoruswijaya/Kode_Lagi-Uas-Gaskeun",
      },
      {
        name: "Paper",
        url: "https://drive.google.com/file/d/1z2VIbjPNYCVO7tMtjybwR-TTNEXpwfCA/view?usp=sharing",
      },
    ],
    types: ["Data Science"],
  },
  {
    name: "Sea Salon",
    image: "/projects/7.jpg",
    description:
      "Sea Salon is a web application designed to streamline the process of booking beauty services, such as haircuts and manicures. The platform connects users with local salons, allowing them to easily find and book appointments online. This project was initiated to address the common frustrations of finding available slots and managing bookings in the beauty industry.",
    skills: ["React", "JavaScript", "Firebase"],
    links: [
      {
        name: "Repository",
        url: "https://github.com/williamtheodoruswijaya/SEA-Salon",
      },
      { name: "Website", url: "https://sea-salon-gold.vercel.app" },
    ],
    types: ["Software Engineering"],
  },
  {
    name: "Dodoru",
    image: "/projects/3.png",
    description:
      'Dodoru is an AI-powered platform designed to help universities modernize their administrative services and enhance the student experience. This project was initiated to solve common frustrations in university administration, such as slow response times to inquiries and difficulty in accessing information, which often leads to a poor user experience. Dodoru was created to solve this by providing an intelligent, 24/7 "humanlike" AI assistant, ensuring prospective and current students get the answers they need instantly.',
    skills: ["React", "JavaScript", "Firebase", "Gemini"],
    links: [
      {
        name: "Pitch Deck",
        url: "https://speakerdeck.com/williamtheodoruswijaya/dodoru",
      },
      {
        name: "Repository",
        url: "https://github.com/kensunjaya/Technoscape_Hackathon",
      },
      { name: "Website", url: "https://dodoru-sehari-jadi.vercel.app" },
    ],
    types: ["Software Engineering"],
  },
];

export default PROJECTS;
