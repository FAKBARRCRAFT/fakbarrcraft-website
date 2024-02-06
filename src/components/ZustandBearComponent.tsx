"use client"
import Container from "@/components/Container";
import {useBearStore} from "@/zustand-store/bearStore";
import {Button} from "@/components/shadcn-ui/button";
import {useEffect} from "react";

const ZustandBearComponent = () => {

    const {bears, removeAllBears, increasePopulation, decreasePopulation} = useBearStore();
    useEffect(() => {
        useBearStore.persist.rehydrate()
    }, []);

    return (
        <section>
            <Container className={"text-center text-lg capitalize"}>
                <h1>there is {bears} bears around here ...</h1>
                <Button
                    variant={"ghost"}
                    onClick={increasePopulation}>
                    add one bear
                </Button>
                <Button
                    variant={"ghost"}
                    onClick={decreasePopulation}>
                    remove one bear
                </Button>
                <Button
                    variant={"ghost"}
                    onClick={removeAllBears}>
                    remove all bear
                </Button>
            </Container>
        </section>
    );
};
export default ZustandBearComponent;
