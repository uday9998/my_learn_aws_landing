import { useRef, useEffect } from "react";

import { TYPES as types } from "@/app/components/elements/TextWithIcon/TextWithIconProps";
import { heroAnimation } from "@/app/helpers/animations";

import IconNew from "@/app/components/elements/IconNew/IconNew";
import { NewText } from "@/app/components/elements/TextWithIcon/TextWithIcon";

import AnimationCommunity from '@/app/assets/jsons/AnimationCommunityMobile.json';
import CreateCommunityAnimation from '@/app/assets/jsons/CreateCommunityAnimation.json';


const CommunityBlock = () => {
    const isRendered = useRef(null);
    useEffect(() => {
        if (!isRendered.current) {
            heroAnimation(document.getElementById("animation-community"), AnimationCommunity);
            heroAnimation(document.getElementById("animation-community2"), CreateCommunityAnimation);
           
            isRendered.current = true;
        }
    }, []);
    return (
        <div className=" container pt-[48px] pl-5 pr-6 pb-[27px] flex items-center flex-col about__block relative gap-[58px]">
            <div className="absolute top-0 left-0">
                <IconNew name="Star" />
            </div>
            <div className="flex flex-col items-center">
                <NewText
                    inner="Create a"
                    type={types.bold800}
                    style={{
                        fontSize: "24px",
                        lineHeight: "29px",
                        color: "#fff",
                        fontFamily: true
                    }}
                />
                <NewText
                    inner="Community"
                    className="gradient__text"
                    type={types.bold900}
                    style={{
                        fontSize: "32px",
                        lineHeight: "110%",
                        color: "#fff",
                        fontFamily: true
                    }}
                />
            </div>
            <div className="w-full flex flex-col gap-[24px] items-center ">
                <div id="animation-community2" className="mr-[-10px]" />
                <div id="animation-community" />
            </div>
        </div>
    );
};

export default CommunityBlock;