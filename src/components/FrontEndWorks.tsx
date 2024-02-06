"use client"
import Container from './Container';
import WorkCard from './WorkCard';
import Link from "next/link";
import {useFrontendProjectStore} from '@/zustand-store/useFrontendProjectStore';

const FrontEndWorks = () => {
    const {frontendProjectData, setFrontendDetail} = useFrontendProjectStore();
    return (
        <section>
            <Container className='gap-4 grid grid-cols-1 md:grid-cols-2'>
                {frontendProjectData.map((FrontendProject) => (
                    <Link
                        key={FrontendProject.id}
                        // href={`/${FrontendProject.title}`}
                        href={{
                            pathname: "/project-detail",
                            query: `${FrontendProject.title}`

                        }}
                        onClick={() => setFrontendDetail(FrontendProject)}
                    >
                        <WorkCard image={FrontendProject.image} projectName={FrontendProject.title}
                                  role1='web design' role2='development'/>
                    </Link>
                ))}
            </Container>
        </section>
    );
}

export default FrontEndWorks
