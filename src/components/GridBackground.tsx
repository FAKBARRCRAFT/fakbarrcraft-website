import React from 'react';

type Props = {};

const GridBackground = (props: Props) => {
	return (
		<>
			<div className='fixed h-full w-full -z-50'>
				<div className='absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]' />
			</div>
		</>
	);
};

export default GridBackground;
