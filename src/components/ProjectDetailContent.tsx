import Image, {StaticImageData} from 'next/image';
import React from 'react';
import {caseStudy1} from '@/lib/medias';
import Link from 'next/link';
import StaggeredText from './StaggeredText';


type ProjectDetailContentProps = {
    projectName?: string;
    projectDesc?: string;
    year?: string;
    role1?: string;
    role2?: string;
    techStack?: string;
    livePreview?: string;
    sourceCode?: string;
    case_study?: string | string[];
    image1?: StaticImageData;
    image2?: StaticImageData;
    image3?: StaticImageData;
    image4?: StaticImageData;
    image5?: StaticImageData;
    image6?: StaticImageData;
};

const ProjectDetailContent = ({
                                  projectName = 'Project Name',
                                  projectDesc = 'some kind of description',
                                  role1 = 'design',
                                  role2 = 'development',
                                  techStack = 'Next js Tailwindcss',
                                  livePreview = 'live preview',
                                  sourceCode = 'github',
                                  year = '2023',
                                  image1 = caseStudy1,
                                  image2 = caseStudy1,
                                  image3 = caseStudy1,
                                  image4 = caseStudy1,
                                  image5 = caseStudy1,
                                  image6 = caseStudy1,
                                  case_study
                              }: ProjectDetailContentProps) => {
    return (
        <>
            <div className='text-4xl max-w-6xl flex flex-col gap-2'>
                <h1>
                    <StaggeredText
                        text={projectName}
                        className='text-4xl max-w-6xl'
                        once
                    />
                </h1>
                <p>
                    <StaggeredText
                        text={projectDesc}
                        className='text-2xl'
                        once
                    />
                </p>
            </div>
            <div className='space-y-6 text-lg max-w-2xl mt-4'>
                <p>
                    <StaggeredText
                        text={case_study}
                        once
                    />
                </p>
            </div>
            <div className='space-y-4 mt-12 max-w-2xl cursor-pointer'>
                <div className='flex flex-col md:flex-row justify-between'>
                    <p className=' font-semibold uppercase'>Year</p>
                    <p className=' font-normal'>{year}</p>
                </div>
                <div className='flex flex-col md:flex-row justify-between'>
                    <p className=' font-semibold uppercase'>tech stack</p>
                    <p className=' font-normal'>{techStack}</p>
                </div>
                <div className='flex flex-col md:flex-row justify-between'>
                    <p className=' font-semibold uppercase'>Role</p>
                    <p className=' font-normal capitalize'>
                        {role1} &amp; {role2}
                    </p>
                </div>
                <div className='flex flex-col md:flex-row justify-between'>
                    <p className=' font-semibold uppercase'>source code</p>
                    <Link href='#' className=' font-normal capitalize'>
                        {sourceCode}
                    </Link>
                </div>
                <div className='flex flex-col md:flex-row justify-between'>
                    <p className=' font-semibold uppercase'>live preview</p>
                    <Link href='#' className=' font-normal capitalize'>
                        {livePreview}
                    </Link>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 mt-12'>
                <Image className='w-full object-cover max-h-[675px] col-span-full' src={image1} alt='#'/>
                <Image className='w-full object-cover aspect-[4/4]' src={image2} alt='#'/>
                <Image className='w-full object-cover aspect-[4/4]' src={image3} alt='#'/>
                <Image className='w-full object-cover aspect-[4/4]' src={image4} alt='#'/>
                <Image className='w-full object-cover aspect-[4/4]' src={image5} alt='#'/>
                <Image className='w-full object-cover col-span-full aspect-[4/4]' src={image6} alt='#'/>
            </div>
        </>
    );
};

export default ProjectDetailContent;
