import {persist} from "zustand/middleware";
import {create} from "zustand";

type bear = {
    bears: number;
    increasePopulation: () => void;
    decreasePopulation: () => void;
    removeAllBears: () => void;
}
export const useBearStore = create<bear>()(
    persist(
        (set) => ({
            bears: 0,
            increasePopulation: async () => set((state) => ({bears: state.bears + 1})),
            decreasePopulation: () => set((state) => ({bears: state.bears - 1})),
            removeAllBears: () => set({bears: 0}),
        }),
        {
            name: 'bear-storage',
            skipHydration: true
        },
    )
)