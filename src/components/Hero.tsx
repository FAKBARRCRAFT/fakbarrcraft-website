import {HeroSubTitle, HeroTitle} from '@/lib/constant';
import Container from './Container';
import StaggeredText from "@/components/StaggeredText";

const Hero = () => {
    return (
        <section>
            <Container>
                <h1 className='text-xl md:text-5xl tracking-[-2px] md:tracking-[-4px]'>
                    <StaggeredText
                        once
                        text={HeroTitle}
                        // className="!max-w-[33ch]"
                    />
                </h1>
                <h2 className='text-md md:text-lg mt-8'>
                    <StaggeredText once text={HeroSubTitle}
                    />
                </h2>
            </Container>
        </section>
    );
};

export default Hero;
