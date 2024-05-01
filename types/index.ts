import { Dispatch, SetStateAction } from "react";

// Top Side Menu Types

export type TbuttonProps = {
    toggleMenu: () => void,
    isActive: boolean;
};

export type TperspectiveTextProps = {
    label: string;
};

// Left Side Menu Types

export type TlinksProps = {
    data: {
        title: string,
        index: number,
        href: string;
    };
    className: string;
    isActive: boolean,
    setSelectedIndicator: Dispatch<SetStateAction<string>>;
};