import { useRef, useEffect } from "react";
import { heroAnimation } from "@/app/helpers/animations";

import GenerateAnimation from '@/app/assets/jsons/DarkAiAnimation.json';
import { AnimationOnScroll } from "react-animation-on-scroll";
import Image2 from '@/app/assets/images/image-2.png';

const GenerateBlock = () => {
    const isRendered = useRef(null);

    useEffect(() => {
        if (!isRendered.current) {
            heroAnimation(document.getElementById("generate-ai-animation"), GenerateAnimation);
            isRendered.current = true;
        }
    }, []);

    return (
        <div className="container flex gap-[48px]">
            <AnimationOnScroll animateIn="animate__fadeInLeft">
                <div id="generate-ai-animation" />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRight">
                <div>
                    <img src={Image2.src} alt="online course platform" width="100%" loading="lazy" title="market your business" />
                </div>
            </AnimationOnScroll>
        </div>
    );
};

export default GenerateBlock;