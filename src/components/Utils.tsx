import {ReactElement, ReactPortal, useEffect, useRef, useState} from "react";

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = ReactNodeArray;
type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

export type Props = {
    children?: ReactNode
    href?: string
    contents?: Array<{key:string, hrefLink: string, content: string }>
    className?: string
}

export function useComponentVisible(initialIsVisible:boolean) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const ref = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);

    const handleHideDropdown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setIsComponentVisible(false);
        }
    };

    const handleClickOutside = (event: Event) => {
        if(logoRef.current && logoRef.current.contains(event.target as Node)){
            setIsComponentVisible(!isComponentVisible)
            return;
        }

        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsComponentVisible(false);
            return;
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleHideDropdown, true);
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('keydown', handleHideDropdown, true);
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return {logoRef ,ref, isComponentVisible, setIsComponentVisible };
}