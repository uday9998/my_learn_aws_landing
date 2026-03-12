import { useRef, useEffect } from "react";
import { heroAnimation } from "@/app/helpers/animations";

import GenerateAnimation from '@/app/assets/jsons/DarkAiAnimation.json';

import MarketBusinessVideo from '@/app/assets/videos/marketBusinessAnimation.mp4';


const GenerateBlock = () => {
    const isRendered = useRef(null);
    const vidRef = useRef();

    useEffect(() => {
        if (!isRendered.current) {
            heroAnimation(document.getElementById("generate-ai-animation"), GenerateAnimation)
            
            isRendered.current = true;
        }
    }, []);

    useEffect(() => {
        if (vidRef.current) {
            vidRef.current.play();
        }
    }, []);

    return (
        <div
            className="container max-w-[343px] flex flex-col gap-[48px]"
            style={{ maxWidth: "343px" }}
        >
            <div id="generate-ai-animation" />
            <div className="about__block overflow-hidden">
                <video
                    ref={vidRef}
                    src={MarketBusinessVideo}
                    autoPlay={true}
                    loop
                />
            </div>
        </div>
    );
};

export default GenerateBlock;