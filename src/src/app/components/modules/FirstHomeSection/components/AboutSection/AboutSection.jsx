import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';
import { AnimationOnScroll } from "react-animation-on-scroll";

import Text from '@/app/components/elements/TextWithIcon/TextWithIcon';
import TextWithUnderIcon from '@/app/components/elements/TextWithUnderIcon/TextWithUnderIcon';
import CommunityBlock from './components/CommunityBlock/CommunityBlock';
import NetflixBlock from './components/NetflixBlock/NetflixBlock';
import MonetizeBlock from './components/MonetizeBlock/MonetizeBlock';
import GenerateBlock from './components/GenerateBlcok/GenerateBlcok';
import BusinessBlock from './components/BusinessBlock/BusinessBlock';
import StudyBlock from './components/StudyBlock/StudyBlock';
import BuildPartenrshipsBlock from './components/BuildPartenrshipsBlock/BuildPartenrshipsBlock';
import ProductsBlock from './components/ProductsBlock/ProductsBlock';
import DragDropBlock from './components/DragDropBlock/DragDropBlock';

import styles from './AboutSection.module.scss';

const AboutSection = () => {
    return (
        <div className={`w-full flex flex-col pb-[161px] ${styles.about__section__wrapper}`}>
            <div className="container pt-[120px] flex flex-col gap-6 items-center">
                <div className={`flex flex-col items-center ${styles['text-styles']}`}>
                    <div className="flex items-center ">
                        <Text
                            inner="We Combine "
                            type={types.bold900}
                            style={{
                                lineHeight: "150%",
                                color: "#fff",
                                whiteSpace: "nowrap",
                                fontSize: "40px"
                            }}
                        />
                        <TextWithUnderIcon
                            svgName="ZigZag"
                            inner=" Smart Tools"
                            className="ml-2 mr-2 zigzag__text"
                            type={types.bold900}
                            style={{
                                lineHeight: "150%",
                                color: "#fff",
                                whiteSpace: "nowrap",
                                fontSize: "40px"
                            }}
                        />
                        <Text
                            inner="Like this with"
                            type={types.bold900}
                            style={{
                                lineHeight: "150%",
                                color: "#fff",
                                whiteSpace: "nowrap",
                                fontSize: "40px"
                            }}
                        />
                        <TextWithUnderIcon
                            svgName="ZigZagLine"
                            inner="Powerful Features"
                            className="ml-2 mr-2 zigzag__line__text"
                            type={types.bold900}
                            style={{
                                lineHeight: "150%",
                                color: "#fff",
                                whiteSpace: "nowrap",
                                fontSize: "40px"
                            }}
                        />
                        <Text
                            inner=" to Help"
                            type={types.bold900}
                            style={{
                                lineHeight: "150%",
                                color: "#fff",
                                whiteSpace: "nowrap",
                                fontSize: "40px"
                            }}
                        />
                    </div>
                    <Text
                        inner="You Create Engaging and Futuristic Programs Online. "
                        type={types.bold900}
                        style={{
                            lineHeight: "150%",
                            color: "#fff",
                            whiteSpace: "nowrap",
                            fontSize: "40px"
                        }}
                    />
                </div>
                <Text
                    inner="Hover over each of them below to see how they work"
                    type={types.regularLarge}
                    size={sizes.large}
                    style={{
                        color: "#727978"
                    }}
                />
            </div>
            <div className="pt-[60px] flex flex-col gap-[48px]">
                    <AnimationOnScroll animateIn="animate__fadeInDown">
                        <CommunityBlock />
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInRight">
                        <NetflixBlock />
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInLeft">
                        <MonetizeBlock />
                    </AnimationOnScroll>
                        <GenerateBlock />
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <BusinessBlock />
                    </AnimationOnScroll>
                    <div className="w-full flex justify-center my-[12px]">
                        <Text
                            inner=". . . And Also"
                            type={types.bold}
                            style={{
                                lineHeight: "110%",
                                fontSize: "52px",
                                color: "#F8FAFA",
                                fontFamily: true
                            }}
                        />
                    </div>
                    <div className="w-full flex flex-col gap-[120px]">
                        <StudyBlock />
                        <BuildPartenrshipsBlock />
                        <ProductsBlock />
                        <DragDropBlock />
                    </div>
                </div>
        </div>
    )
};

export default AboutSection;