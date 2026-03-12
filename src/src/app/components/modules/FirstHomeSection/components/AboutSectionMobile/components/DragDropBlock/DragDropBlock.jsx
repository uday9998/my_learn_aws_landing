import { AnimationOnScroll } from "react-animation-on-scroll";
import { TYPES as types } from "@/app/components/elements/TextWithIcon/TextWithIconProps";

import Text from "@/app/components/elements/TextWithIcon/TextWithIcon";

import DragBlockImage from '@/app/assets/images/drag.png';

const DragDropBlock = () => {
    return (
        <div className="container flex gap-[24px] flex-col items-center">
            <div className="flex flex-col items-center ">
                <Text
                    inner="Easy to Assemble:"
                    type={types.bold800}
                    className="mb-[16px]"
                    style={{
                        color: "#F8FAFA",
                        fontSize: "18px",
                        lineHeight: "22px"
                    }}
                />
                <Text
                    inner="Drag and Drop Customization"
                    type={types.bold800}
                    className="netflix__gradient__text"
                    style={{
                        color: "#F8FAFA",
                        fontSize: "32px",
                        textAlign: "center",
                        lineHeight: "110%"
                    }}
                />
            </div>
            <div className="w-[100%]">
                <img src={DragBlockImage.src} alt="online course platform" width="100%" title="Drag and Drop Customization" />
            </div>
        </div>
    );
};

export default DragDropBlock;