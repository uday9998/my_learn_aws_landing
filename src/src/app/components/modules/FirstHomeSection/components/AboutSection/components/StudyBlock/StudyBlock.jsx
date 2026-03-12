import { AnimationOnScroll } from "react-animation-on-scroll";
import { TYPES as types } from "@/app/components/elements/TextWithIcon/TextWithIconProps";
import Text from "@/app/components/elements/TextWithIcon/TextWithIcon";

import StudyBlockImage from '@/app/assets/images/studyBlock.png';

const StudyBlock = () => {
    return (
        <div className="container flex gap-[48px] items-center">
            <AnimationOnScroll animateIn="animate__fadeInLeft">
                <div>
                    <img src={StudyBlockImage.src} alt="online course platform" width="100%" loading="lazy" title="facebook group" />
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight">
                <div className="flex flex-col pr-[58px]">
                    <Text
                        inner="Study:"
                        type={types.bold800}
                        className="mb-[16px]"
                        style={{
                            color: "#F8FAFA",
                            fontSize: "40px",
                            lineHeight: "48px"
                        }}
                    />
                    <Text
                        inner="Free Education to Help You Succeed"
                        type={types.bold800}
                        className="netflix__gradient__text"
                        style={{
                            color: "#F8FAFA",
                            fontSize: "56px",
                            lineHeight: "110%"
                        }}
                    />
                </div>
            </AnimationOnScroll>
        </div>
    );
};

export default StudyBlock;