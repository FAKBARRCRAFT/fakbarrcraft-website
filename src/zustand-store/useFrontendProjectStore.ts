import {persist} from "zustand/middleware";
import {create} from "zustand";
import {type FrontendProjectsType} from '@/lib/types';
import {FrontendProjects} from '@/lib/constant';

type FrontendProjectStoreType = {
    frontendDetail: FrontendProjectsType | null;
    frontendProjectData: FrontendProjectsType[];
    setFrontendDetail: (data: FrontendProjectsType) => void;
}

export const useFrontendProjectStore = create(
    persist<FrontendProjectStoreType>(
        (set) => ({
            frontendProjectData: FrontendProjects,
            frontendDetail: null,
            setFrontendDetail: async (data) => {
                set((_state) => ({
                    frontendDetail: data
                }))
            },
        }),
        {
            name: "frontend-project",
            skipHydration: true
        },
    )
)