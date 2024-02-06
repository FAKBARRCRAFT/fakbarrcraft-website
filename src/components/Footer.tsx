import Container from './Container';
import React from "react";
import StaggeredText from "@/components/StaggeredText";

const Footer = () => {
    return (
        <footer className='sticky bottom-0 z-50 backdrop-blur-md text-xs'>
            <Container className='flex items-center p-2 font-medium capitalize tracking-[-2px]'>
                <p className='text-center w-full'>
                    <StaggeredText
                        once
                        text={`©️ fakbarcraft ${new Date().getFullYear().toString()}`}
                    />
                </p>
            </Container>
        </footer>
    );
}

export default Footer
