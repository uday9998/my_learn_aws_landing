import { useRef, useEffect } from 'react';

import NetflixAnimation from '@/app/assets/jsons/AnimationNetflixMobile.json';
import BusinessAnimation from '@/app/assets/jsons/ManageBusinessMobile.json';
import monetizeMobile from '@/app/assets/jsons/monetizeMobile.json';

import { TYPES as types, SIZES as sizes } from "@/app/components/elements/TextWithIcon/TextWithIconProps";
import { heroAnimation } from '@/app/helpers/animations';

import Text from "@/app/components/elements/TextWithIcon/TextWithIcon";
import TextWithUnderIcon from "@/app/components/elements/TextWithUnderIcon/TextWithUnderIcon";

import StudyBlock from './components/StudyBlock/StudyBlock';
import BuildPartenrshipsBlock from './components/BuildPartenrshipsBlock/BuildPartenrshipsBlock';
import ProductsBlock from './components/ProductsBlock/ProductsBlock';
import CommunityBlock from './components/CommunityBlock/CommunityBlock';
import DragDropBlock from './components/DragDropBlock/DragDropBlock';
import GenerateBlock from './components/GenerateBlcok/GenerateBlcok';

import styles from './AboutSectionMobile.module.scss';

const AboutSectionMobile = () => {
    const isRendered = useRef(null);

    useEffect(() => {
        if (!isRendered.current) {
            heroAnimation(document.getElementById("netflix-animation"), NetflixAnimation);
            heroAnimation(document.getElementById("business-animation"), BusinessAnimation);
            heroAnimation(document.getElementById("monetize-animation"), monetizeMobile);
    
            isRendered.current = true;
        }
    }, []);

    return (
        <div
            className={`w-full flex flex-col items-center pb-[43px] px-4 pt-[60px]  ${styles.about__mobile__wrapper}`}
        >
            <div className="flex flex-col items-center ">
                <Text
                    inner="We Combine"
                    type={types.bold900}
                    style={{
                        lineHeight: "150%",
                        color: "#fff",
                        whiteSpace: "nowrap",
                        fontSize: "32px"
                    }}
                />
                <TextWithUnderIcon
                    svgName="MobileZigZag"
                    inner=" Smart Tools"
                    className="ml-1 mr-1 zigzag__text"
                    type={types.bold900}
                    style={{
                        lineHeight: "150%",
                        color: "#fff",
                        whiteSpace: "nowrap",
                        fontSize: "32px"
                    }}
                />
                <Text
                    inner="Like this with"
                    type={types.bold900}
                    style={{
                        lineHeight: "150%",
                        color: "#fff",
                        whiteSpace: "nowrap",
                        fontSize: "32px"
                    }}
                />
                <TextWithUnderIcon
                    svgName="MobileZigZagLine"
                    inner="Powerful Features"
                    className="ml-1 mr-1 zigzag__line__text"
                    type={types.bold900}
                    style={{
                        lineHeight: "150%",
                        color: "#fff",
                        whiteSpace: "nowrap",
                        fontSize: "32px"
                    }}
                />
                <Text
                    inner="to Help You Create Engaging and Futuristic Programs Online."
                    type={types.bold900}
                    style={{
                        lineHeight: "150%",
                        color: "#fff",
                        fontSize: "32px",
                        textAlign: "center"
                    }}
                />
            </div>
            <Text
                inner="Hover over each of them below to see how they work"
                type={types.regular148}
                size={sizes.medium}
                style={{ color: "#D0D2D2", textAlign: "center" }}
                className="mt-6"
            />
            <div className="pt-[60px] flex flex-col gap-[48px]">
                <CommunityBlock />
                <div className="container about__block">
                    <div id="netflix-animation" />
                </div>
                <div className="container about__block">
                    <div id="monetize-animation" />
                </div>
                <GenerateBlock />
                <div className="container about__block">
                    <div id="business-animation" />
                </div>
                <div className="w-full flex justify-center my-[12px]">
                    <Text
                        inner=". . . And Also"
                        type={types.bold}
                        style={{
                            lineHeight: "110%",
                            fontSize: "32px",
                            color: "#F8FAFA",
                            fontFamily: true
                        }}
                    />
                </div>
                <div className="w-full flex flex-col gap-[60px]">
                    <StudyBlock />
                    <BuildPartenrshipsBlock />
                    <ProductsBlock />
                    <DragDropBlock />
                </div>
            </div>
        </div>
    );
};

export default AboutSectionMobile;
