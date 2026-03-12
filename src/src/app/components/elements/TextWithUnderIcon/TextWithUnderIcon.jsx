import { Roboto } from "next/font/google";

import IconNew from "../IconNew/IconNew";

import styles from './TextWithUnderIcon.module.scss';

const roboto = Roboto({subsets: ['latin'], weight: ['700']})

const TextWithUnderIcon = ({ svgName, inner, className, type, style }) => {
    return (
        <div className="relative relative">
            <span style={{...style}} className={`${roboto.className} ${className}`}>{inner}</span>
            <div
                className="absolute bottom-[-4px] left-[50%] w-full"
                style={{  transform: "translateX(-50%)" }}
            >
                <IconNew name={svgName} />
            </div>
        </div>
    );
};

TextWithUnderIcon.propTypes = {};

export default TextWithUnderIcon;
