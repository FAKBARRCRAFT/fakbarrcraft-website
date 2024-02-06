import { FrontendProjects } from '@/lib/constant';

export const getFrontendProjects = async () => {
    return FrontendProjects;
}


export const getFrontendProject = async (title:string) => {
    const FrontendProject = FrontendProjects.find((FrontendProject) => FrontendProject.title === decodeURI(title))
    return FrontendProject;
}