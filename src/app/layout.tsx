import localFont from 'next/font/local';
import Footer from '@/components/Footer';
import BgWrapper from '@/components/BgWrapper';
import Navbar from '@/components/Nav';
import { Metadata } from 'next';
import './globals.css';
import { cn } from '@/utils/cn';
import ThemeProvider from '@/components/ThemeProvider';

export const metadata: Metadata = {
	title: 'FakbarrCraft | Obsessed With Design',
	description: 'Independent creative personality driven by passion and obsession Based in Indonesia',
	creator: 'FakbarrCraft',
	applicationName: 'fakbarrcraft official website',
};

const inter = localFont({
	display: 'swap',
	src: '../assets/fonts/Inter[slnt,wght].ttf',
	variable: '--font-inter',
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		//  bg-dark-bg bg-cover bg-center bg-fixed
		<html lang='en'>
				<body className={cn('relative bg-dark-bg bg-cover bg-center bg-fixed tracking-[-0.0625rem] text-neutral-200 antialiased leading-[-1.25rem]', inter.className)}>
			<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
					{/* <GridBackground/> */}
					<Navbar />
					<main className={'min-h-svh'}>
						{/*<ScrollerMotionProvider>*/}
						{children}
						{/*</ScrollerMotionProvider>*/}
					</main>
					<Footer />
			</ThemeProvider>
				</body>
		</html>
	);
};

export default RootLayout;
