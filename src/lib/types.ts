import {StaticImageData} from 'next/image';

export type HeroTitleType = string[];
export type HeroSubTitleType = string[];
export type NavLinksType = {
    href: string;
    name: string;
}
export type FrontendProjectsType = {
    id: number;
    title: string;
    image: StaticImageData;
    case_study: string;
}

export type frontendProjectsDetailType = {
    projectName: string;
    caseStudy: string;
    year: number;
    role1: string;
    role2: string;
    techStack: string;
    livePreview: string;
    sourceCode: string;
    // preview1: string;
    // preview2: string;
    // preview3: string;
    // preview4: string;
    // preview5: string;
    // preview6: string;
    preview1: StaticImageData;
    preview2: StaticImageData;
    preview3: StaticImageData;
    preview4: StaticImageData;
    preview5: StaticImageData;
    preview6: StaticImageData;
}

// Generated by https://quicktype.io

export interface Test {
    employees: Employee[];
}

export interface Employee {
    firstName: string;
    lastName:  string;
}
