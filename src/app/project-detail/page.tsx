'use client';
import Container from '@/components/Container';
import React, {useEffect} from 'react';
import ProjectDetailContent from '@/components/ProjectDetailContent';
import {useFrontendProjectStore} from '@/zustand-store/useFrontendProjectStore';

const ProjectDetailPage = () => {
    const {frontendDetail} = useFrontendProjectStore();
    useEffect(() => {
        useFrontendProjectStore.persist.rehydrate();
    }, []);

    return (
        <section>
            <Container>
                <ProjectDetailContent
                    projectName={frontendDetail?.title}
                    projectDesc={frontendDetail?.title}
                    case_study={frontendDetail?.case_study}
                />
            </Container>
        </section>
    );
};

export default ProjectDetailPage;
