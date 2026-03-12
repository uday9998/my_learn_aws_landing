import { TYPES as types } from "@/app/components/elements/TextWithIcon/TextWithIconProps";
import Text from "@/app/components/elements/TextWithIcon/TextWithIcon";

import StudyBlockImage from '@/app/assets/images/studyBlock.png';

const StudyBlock = () => {
    return (
        <div className="container max-w-[343px] flex flex-col gap-[48px] items-center">
            <div className="flex flex-col items-center pr-[16px] text-center">
                <Text
                    inner="Study:"
                    type={types.bold800}
                    className="mb-[16px] text-center"
                    style={{
                        color: "#F8FAFA",
                        fontSize: "18px",
                        lineHeight: "22px"
                    }}
                />
                <Text
                    inner="Free Education to Help You Succeed"
                    type={types.bold800}
                    className="netflix__gradient__text"
                    style={{
                        color: "#F8FAFA",
                        fontSize: "32px",
                        lineHeight: "110%"
                    }}
                />
            </div>
            <div className="w-full">
                <img src={StudyBlockImage.src} alt="online course platform" width="100%" title="facebook group" />
            </div>
        </div>
    );
};

export default StudyBlock;