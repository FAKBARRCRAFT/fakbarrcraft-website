'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import StaggeredText from './StaggeredText';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { NavLinks } from '@/lib/constant';
import Container from './Container';
import Reveal from './Reveal';
import FakbarrCraftLogo from './FakbarrCraftLogo';
import OpenMenuIcon from './CloseMenuIcon';
import CloseMenuIcon from './OpenMenuIcon';
import ThemeSwitcher from './ThemeSwitcher';
import {AlignCenterVerticallyIcon,HamburgerMenuIcon} from "@radix-ui/react-icons";
import MobileNav from './MobileNav';

const Nav = () => {
	const itemVariants = {
		closed: {
			opacity: 0,
		},
		open: { opacity: 1 },
	};

	const sideVariants = {
		closed: {
			transition: {
				duration: 1,
				staggerChildren: 0.2,
				staggerDirection: -1,
			},
		},
		open: {
			transition: {
				duration: 1,
				staggerChildren: 0.2,
				staggerDirection: 1,
			},
		},
	};

	const [open, cycleOpen] = useCycle(false, true);
	const [openMobileNav, setOpenMobileNav] = useState(false);
	const handleClick = () => {
		cycleOpen();
		setOpenMobileNav(!openMobileNav);
	};

	useEffect(() => {
		if (openMobileNav) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [openMobileNav]);

	return (
		<>
			{/* DEKSTOP NAV */}
			<nav className='sticky top-0 z-50 backdrop-blur-md h-20'>
				<Container className='flex justify-between items-center border-b border-black h-20'>
					<ul>
						<li>
							<Link href='/'>
								<Reveal>
									<FakbarrCraftLogo className='fill-neutral-200 w-14 h-14' />
								</Reveal>
							</Link>
						</li>
					</ul>
					<ul className='hidden md:flex items-center gap-4 text-xl'>
						{NavLinks.map((NavLink, index) => (
							<li key={index}>
								<Link href={NavLink.href}>
									<StaggeredText once text={NavLink.name} />
								</Link>
							</li>
						))}
						<li>
							<ThemeSwitcher />
						</li>
					</ul>

					<button className='cursor-pointer md:hidden grid items-center text-2xl text-center' onClick={handleClick}>
						<Reveal>{openMobileNav ? <OpenMenuIcon /> : <CloseMenuIcon />}</Reveal>
					</button>
					<MobileNav/>
				</Container>
			</nav>
			{/* MOBILE NAV */}
			<div className='relative'>
				<AnimatePresence>
					{open && (
						<motion.div
							className='bg-dark-bg bg-cover bg-center bg-fixed w-screen h-screen fixed md:hidden flex flex-col items-center justify-center top-0 z-[49] space-x-8 text-6xl md:text-7xl'
							initial={{ width: 0 }}
							animate={{
								width: '100vw',
							}}
							exit={{
								width: 0,
								transition: { delay: 0.7, duration: 1, ease: 'easeInOut' },
							}}
						>
							<motion.ul className='flex flex-col gap-2' initial='closed' animate='open' exit='closed' variants={sideVariants}>
								{NavLinks.map((NavLink, index) => (
									<motion.li className='block' key={index} variants={itemVariants} onClick={handleClick}>
										<Link href={NavLink.href}>
											<StaggeredText once text={NavLink.name} />
										</Link>
									</motion.li>
								))}
							</motion.ul>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
};

export default Nav;
