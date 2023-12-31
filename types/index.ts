export type SkillsData = {
    name: string
}

export interface AboutType {
    experience: number,
    project: number,
    seo: number,
    skills: SkillsData[]
}

export interface ServiceType {
    title: string,
    description: string,
    skills: string[],
    features: string[];
}

export interface ContactForm {
    name: string,
    email: string,
    subject: string,
    message: string;
}

