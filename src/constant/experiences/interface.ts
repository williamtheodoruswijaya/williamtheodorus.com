export interface ExperiencesType {
    name: string;
    majorRole?: string;
    roles?: {
        name: string;
        date: string;
        description: string[];
    }[]
    logo: string;
    links?: {
        name: string;
        url: string;
    }[]
    date?: string;
    skills: string[];
    location: string;
}