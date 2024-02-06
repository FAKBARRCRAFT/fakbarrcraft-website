"use client"

import {ScrollerMotion} from 'scroller-motion'
import {ReactNode} from "react";

type ScrollerMotionProviderProps = {
    children: ReactNode;
}
const ScrollerMotionProvider = ({children}: ScrollerMotionProviderProps) => (
    <ScrollerMotion>
        {children}
    </ScrollerMotion>
)

export default ScrollerMotionProvider;