import { AnimationOnScroll } from "react-animation-on-scroll";
import { TYPES as types } from "@/app/components/elements/TextWithIcon/TextWithIconProps";

import Text from "@/app/components/elements/TextWithIcon/TextWithIcon";

import DragBlockImage from '@/app/assets/images/drag.png';

const DragDropBlock = () => {
    return (
        <div className="container flex gap-[48px] items-center">
            <AnimationOnScroll animateIn="animate__fadeInLeft">
                <div className="flex flex-col pl-[136px]">
                    <Text
                        inner="Easy to Assemble:"
                        type={types.bold800}
                        className="mb-[16px]"
                        style={{
                            color: "#F8FAFA",
                            fontSize: "40px",
                            lineHeight: "48px"
                        }}
                    />
                    <Text
                        inner="Drag and Drop Customization"
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
            <AnimationOnScroll animateIn="animate__fadeInRight">
                <div className="w-[100%]">
                    <img src={DragBlockImage.src} alt="online course platform" width="100%" loading="lazy" title="drag and drop customization" />
                </div>
            </AnimationOnScroll>
        </div>
    );
};

export default DragDropBlock;