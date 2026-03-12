import { TYPES as types } from "@/app/components/elements/TextWithIcon/TextWithIconProps";

import IconNew from "@/app/components/elements/IconNew/IconNew";
import { NewText } from "@/app/components/elements/TextWithIcon/TextWithIcon";

import CommunityFirstImage from '@/app/assets/images/CommunityFirst.png';
import CommunitySecondImage from '@/app/assets/images/CommunitySecond.png';
import CommunityThirdImage from '@/app/assets/images/CommunityThird.png';

const CommunityBlock = () => {
    return (
        <div className="container pt-[48px] pb-[74px] flex items-center flex-col about__block relative gap-[58px]">
            <div className="absolute top-0 left-0">
                <IconNew name="Star" />
            </div>
            <div className="flex flex-col items-center">
                <NewText
                    inner="Create a"
                    type={types.bold800}
                    style={{
                        fontSize: "32px",
                        lineHeight: "38px",
                        color: "#fff",
                        fontFamily: true
                    }}
                />
                <NewText
                    inner="Community"
                    className="gradient__text"
                    type={types.bold900}
                    style={{
                        fontSize: "52px",
                        lineHeight: "110%",
                        color: "#fff",
                        fontFamily: true
                    }}
                />
            </div>
            <div className="w-[85%] flex gap-[25px] items-stretch">
                <img src={CommunityFirstImage.src} alt="online course platform" className="w-[68%]" loading="lazy" title="community" />
                <div className="flex flex-col gap-[26px] min-h-full justify-between">
                    <img src={CommunitySecondImage.src} alt="online course platform" loading="lazy" title='interactive room' />
                    <img src={CommunityThirdImage.src} alt="online course platform" loading="lazy" title="create group events" />
                </div>
            </div>
        </div>
    );
};

export default CommunityBlock;