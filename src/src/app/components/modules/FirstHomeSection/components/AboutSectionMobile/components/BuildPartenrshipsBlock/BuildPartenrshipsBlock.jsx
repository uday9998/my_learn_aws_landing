import { TYPES as types } from "@/app/components/elements/TextWithIcon/TextWithIconProps";
import Text from "@/app/components/elements/TextWithIcon/TextWithIcon";

import BuildBlockImage from '@/app/assets/images/Build.png';

const BuildPartenrshipsBlock = () => {
    return (
        <div className="container flex flex-col gap-[48px] items-center">
            <div className="flex flex-col items-center">
                <Text
                    inner="Build Partnerships:"
                    type={types.bold800}
                    className="mb-[16px]"
                    style={{
                        color: "#F8FAFA",
                        fontSize: "18px",
                        lineHeight: "22px"
                    }}
                />
                <Text
                    inner="Set Up Your Own Affiliate Program"
                    type={types.bold800}
                    className="netflix__gradient__text"
                    style={{
                        color: "#F8FAFA",
                        textAlign: "center",
                        fontSize: "32px",
                        lineHeight: "110%"
                    }}
                />
            </div>
            <div className="w-[100%]">
                <img src={BuildBlockImage.src} alt="online course platform" width="100%" title="Set Up Your Own Affiliate Program" />
            </div>
        </div>
    );
};

export default BuildPartenrshipsBlock;