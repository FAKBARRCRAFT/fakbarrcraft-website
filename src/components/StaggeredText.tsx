'use client';
import {motion, useAnimation, useInView, Variant} from 'framer-motion';
import React, {useEffect, useRef, useState} from 'react';

type AnimatedTextProps = {
    animation?: {
        hidden: Variant;
        visible: Variant;
    };
    className?: string;
    once?: boolean;
    repeatDelay?: number;
    text: string | string[] | undefined;
};

const defaultAnimations = {
    hidden: {
        opacity: 0,
        y: '100%',
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export const StaggeredText = ({
                                  text,
                                  className,
                                  once,
                                  repeatDelay,
                                  animation = defaultAnimations
                              }: AnimatedTextProps) => {
    const controls = useAnimation();
    const textArray = Array.isArray(text) ? text : [text];
    const ref = useRef(null);
    const isInView = useInView(ref, {amount: 0.5, once});
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const show = async () => {
            await controls.start('visible');
            if (repeatDelay) {
                timeout = setTimeout(async () => {
                    await controls.start('hidden');
                    await controls.start('visible');
                }, repeatDelay);
            }
        };

        if (isInView) {
            show();
        } else {
            controls.start('hidden');
        }

        return () => clearTimeout(timeout);
    }, [controls, isInView, repeatDelay]);

    return (
        <span className={className}>
			<span className='sr-only'>{textArray.join(' ')}</span>
			<motion.span
                ref={ref}
                initial='hidden'
                animate={controls}
                variants={{
                    visible: {transition: {staggerChildren: 0.01}},
                    hidden: {},
                }}
                aria-hidden
            >
				{textArray?.map((line, lineIndex) => (
                    <span className='block' key={lineIndex}>
						{line?.split(' ').map((word, wordIndex) => (
                            <span className='inline-block' key={wordIndex}>
								{word?.split('').map((char, charIndex) => (
                                    <motion.span key={charIndex} className='inline-block' variants={animation}>
                                        {char}
                                    </motion.span>
                                ))}
                                <span className='inline-block'>&nbsp;</span>
							</span>
                        ))}
					</span>
                ))}
			</motion.span>
		</span>
    );
};

export default StaggeredText;
