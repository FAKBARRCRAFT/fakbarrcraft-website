import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,SheetClose } from './shadcn-ui/sheet';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import StaggeredText from './StaggeredText';
import { NavLinks } from '@/lib/constant';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';
import FakbarrCraftLogo from './FakbarrCraftLogo';


const MobileNav = () => {
	return (
			<Sheet>
				<SheetTrigger className='sm:hidden'>
					<HamburgerMenuIcon className='cursor-pointer h-5 w-5' />
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>
							<FakbarrCraftLogo className='fill-neutral-200 w-12 h-12 mb-8' />
						</SheetTitle>
					</SheetHeader>
					<ul className=' flex flex-col items-center gap-4 text-xl'>
						{NavLinks.map((NavLink, index) => (
							<li key={index} className='text-left w-full'>
								<Link href={NavLink.href}>
                                <SheetClose>
									<StaggeredText once text={NavLink.name} />
                                    </SheetClose>
								</Link>
							</li>
						))}
						<li className='text-left w-full'>
							<ThemeSwitcher />
						</li>
					</ul>
				</SheetContent>
			</Sheet>
	);
};

export default MobileNav;
