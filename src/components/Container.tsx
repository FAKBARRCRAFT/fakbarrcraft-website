import React from 'react'
import {cn} from "@/utils/cn";

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
}

const Container = ({className, children}: ContainerProps) => {
    return (
        <section className={cn("container p-8", className)}>
            {children}
        </section>
    )
}

export default Container
