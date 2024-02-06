import React from 'react';
import Image, { StaticImageData } from 'next/image';
import StaggeredText from "@/components/StaggeredText";

type WorkCardProps = {
	projectName: string;
	role1: string;
	role2: string;
	image: StaticImageData;
};

const WorkCard = ({ projectName = 'project name', role1 = 'design', role2 = 'development', image }: WorkCardProps) => {
	return (
			<div className='relative h-96 rounded-lg group overflow-hidden capitalize'>
				<p>
					<StaggeredText
						once
						text={projectName}
						className='absolute top-5 left-5 text-2xl tracking-tight z-10'
					/>
				</p>
				<Image priority className='h-full w-full object-cover brightness-95 transition duration-300 group-hover:scale-105' src={image} alt={projectName} fill sizes='auto' />
				<div className='flex gap-4 absolute bottom-5 left-5'>
					<span className='text-sm rounded-full capitalize border border-fakbarrwhite px-6 py-1 backdrop-blur-sm'>{role1}</span>
					<span className='text-sm rounded-full capitalize border border-fakbarrwhite px-6 py-1 backdrop-blur-sm'>{role2}</span>
				</div>
			</div>
	);
};

export default WorkCard;
