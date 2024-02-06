'use client';
import { useState, createContext, useContext, Dispatch, SetStateAction } from 'react';
import type { FrontendProjectsType } from '@/lib/types';

type FrontendWorkDataContextProviderProps = {
	children: React.ReactNode;
};

type FrontendWorkDataContextProps = {
	frontendWorkData: FrontendProjectsType[];
	// setFrontendWorkData: Dispatch<SetStateAction<FrontendProjectsType[]>>;
	setFrontendWorkData: (frontendWorkData: FrontendProjectsType[]) => void;
};
// const FrontendWorkDataContext = createContext<FrontendWorkDataContextProps>({
// 	frontendWorkData: [],
// 	setFrontendWorkData: (): FrontendProjectsType[] => [],
// });
const FrontendWorkDataContext = createContext<FrontendWorkDataContextProps>({} as FrontendWorkDataContextProps);

export default function FrontendWorkDataProvider({ children }: FrontendWorkDataContextProviderProps) {
	const [frontendWorkData, setFrontendWorkData] = useState<FrontendProjectsType[]>([]);

	return <FrontendWorkDataContext.Provider value={{ frontendWorkData, setFrontendWorkData }}>{children}</FrontendWorkDataContext.Provider>;
}

// Custom hook that shorthands the context!
export const useFrontendWorkDataContext = () => useContext(FrontendWorkDataContext);

// export function useFrontendWorkDataContext(){
//   const context = useContext(FrontendWorkDataContext);
//   return context;
// }
