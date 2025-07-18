import {ExperiencesType} from "@/constant/experiences/interface";

export const EXPERIENCES: ExperiencesType[] = [
    {
        name: 'COMPFEST: Software Engineering Academy',
        logo: '/experiences/COMPFEST.png',
        date: 'Aug 2024 - Sep 2024',
        location: 'Depok, Indonesia',
        roles: [
            {
                name: 'Software Engineering Academy Participant',
                date: 'Aug 2024 - Sep 2024',
                description: [
                    'Selected as one of 20 participants from thousands based on the SEA Salon project.',
                    'Contributed as a front-end developer to the Seatudy platform.',
                    "Collaborated on a mental health application's system design with cross-functional teams."
                ]
            },
        ],
        links: [
            {
                name: 'COMPFEST',
                url: 'https://compfest.id/'
            }
        ],
        skills: [
            'SDLC',
            'Collaborative Programming',
            'Clean Code',
            'Unit Testing',
            'API Development',
            'Design Patterns',
            'Software Architecture',
            'Database Management',
            'Software Security',
            'CI/CD'
        ]
    },
    {
        name: 'BINUS University',
        majorRole: 'Part-time Laboratory Assistant',
        logo: '/experiences/BINUS.png',
        date: 'Feb 2024 - Jan 2025',
        location: 'Bandung, Indonesia',
        roles: [
            {
                name: 'Part-time Laboratory Assistant for Introduction to Programming with Java',
                date: 'Feb 2024 - Jul 2024',
                description: [
                    'Served as a part-time assistant lecturer at BINUS @Bandung, teaching Introduction to Programming with Java (covering basic Java programming and the four pillars of OOP) to Double Degree Students.',
                    'Developed final exam practicum cases for Introduction to Programming Courses that implements basic OOP concepts on a project based cases.'
                ]
            },
            {
                name: 'Part-time Laboratory Assistant for Algorithm and Programming',
                date: 'Sep 2024 - Jan 2025',
                description: [
                    'Served as a part-time assistant lecturer at Binus Bandung, teaching Algorithm and Programming with C programming language to Computer Science students.',
                    'Designed competitive programming problems as weekly tasks for the Online Judge platform.'
                ]
            }
        ],
        links: [
            {
                name: 'BINUS University Software Laboratory Center',
                url: 'https://binus.ac.id/'
            }
        ],
        skills: [
            'Algorithm and Data Structures',
            'Object Oriented Programming',
            'Design Patterns',
            'SOLID',
            'Competitive Programming',
            'Public Speaking'
        ]
    },
]