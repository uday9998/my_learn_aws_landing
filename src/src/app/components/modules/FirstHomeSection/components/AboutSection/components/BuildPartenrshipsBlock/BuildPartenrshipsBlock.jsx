import { AnimationOnScroll } from "react-animation-on-scroll";
import { TYPES as types } from "@/app/components/elements/TextWithIcon/TextWithIconProps";
import Text from "@/app/components/elements/TextWithIcon/TextWithIcon";

import BuildBlockImage from '@/app/assets/images/Build.png';

const BuildPartenrshipsBlock = () => {
    return (
        <div className="container flex gap-[48px] items-center">
            <AnimationOnScroll animateIn="animate__fadeInLeft">
                <div className="flex flex-col pl-[169px]">
                    <Text
                        inner="Build Partnerships:"
                        type={types.bold800}
                        className="mb-[16px]"
                        style={{
                            color: "#F8FAFA",
                            fontSize: "40px",
                            lineHeight: "48px"
                        }}
                    />
                    <Text
                        inner="Set Up Your Own Affiliate Program"
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
                <div className="w-[715px]">
                    <img src={BuildBlockImage.src} alt="online course platform" width="100%" loading="lazy" title="affilate offers" />
                </div>
            </AnimationOnScroll>
        </div>
    );
};

export default BuildPartenrshipsBlock;