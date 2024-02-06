"use client"
import {Scrollbars} from 'rc-scrollbars';
import {ReactNode} from "react";

type CustomScrollbarsProps = {
    children: ReactNode;
};
const CustomScrollbars = ({children}: CustomScrollbarsProps) => {
    return (
        <Scrollbars
            autoHeight={true}
            disableDefaultStyles={true}
            autoHeightMax={"100%"}
            autoHeightMin={"100%"}
            autoHide={true}
            thumbMinSize={30}
            universal={true}
            hideTracksWhenNotNeeded={true}
            
        >
            {children}
        </Scrollbars>
    );
};
export default CustomScrollbars;
