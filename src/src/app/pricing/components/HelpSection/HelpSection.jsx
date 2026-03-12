'use client';

import cx from 'classnames';
import { TYPES as types } from '@/app/components/elements/TextWithIcon/TextWithIconProps';

import Text from '@/app/components/elements/TextWithIcon/TextWithIcon';
import { AnimationOnScroll } from "react-animation-on-scroll";
import HelpCard from '../HelpCard/HelpCard';

import Support from "@/app/assets/images/Support.png";
import CommunityImage from "@/app/assets/images/community.png";
import HelpCenterImage from "@/app/assets/images/helpCenter.png";
import TrainingImage from "@/app/assets/images/Training.png";

import styles from './HelpSection.module.scss';
import "animate.css/animate.min.css";

const HelpSection = () => {
    const handleOpenSupportChat = () => {
        // document.querySelector('body>#ap3-talk-widget-ui').shadowRoot.querySelector('#__root').querySelector('div').click();
        // document.querySelector('#mevo_chatbox_opener').click();
        if (window.OpenWidget) {
            window.OpenWidget.call('maximize');
         }
    };

    return (
        <div className={`${styles.help__wrapper} flex`}>
            <div
                className={ cx(styles.help__inner__wrapper, {
                    "container pt-[180px]": true
                }) }
            >
                <div className="flex flex-col items-center gap-[60px]">
                    <div className="flex flex-col gap-[16px] items-center">
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                            <Text
                                inner="The Miestro Team Will Provide"
                                type={types.bold800}
                                style={{
                                    fontSize: "32px",
                                    fontFamily: "Lato",
                                    lineHeight: "140%"
                                }}
                                className="netflix__gradient__text"
                            />
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                            <Text
                                inner="Help When You Need It"
                                type={types.bold900}
                                style={{
                                    fontSize: "54px",
                                    lineHeight: "120%",
                                    color: "#fff"
                                }}
                            />
                        </AnimationOnScroll>
                    </div>
                    <div className="flex flex-col gap-[24px] w-full">
                        <div
                            className={ cx(styles.animated__wrapper, {
                                "flex items-stretch self-stretch gap-[24px]": true,
                            }) }
                            style={{ alignItems: "initial" }}
                        >
                            <div className="w-[100%] h-[auto] flex">
                                <AnimationOnScroll animateIn="animate__fadeInLeft">
                                    <HelpCard
                                        title="Support Team"
                                        imageUrl={Support.src}
                                        onClick={ handleOpenSupportChat }
                                        buttonText="Contact Support"
                                        description="There is a team of support professionals available to assist you with any questions or concerns."
                                    />
                                </AnimationOnScroll>
                            </div>
                            <div className="w-[100%] h-[auto] flex">
                                <AnimationOnScroll animateIn="animate__fadeInRight">
                                    <HelpCard
                                        title="Community"
                                        imageUrl={CommunityImage.src}
                                        buttonText="Join Community"
                                        onClick={() =>
                                            window.open(
                                                "https://www.facebook.com/miestrohq",
                                                "_blank"
                                            )
                                        }
                                        description="What are you waiting for? Join our community and be a part of something great!"
                                    />
                                </AnimationOnScroll>
                            </div>
                        </div>
                        <div
                            className={ cx(styles.media, {
                                "flex items-stretch gap-[24px]": true,
                            }) }
                            >
                            <div className="w-[100%] h-[auto] flex">
                                <AnimationOnScroll animateIn="animate__fadeInUp">
                                    <HelpCard
                                        title="Help Center"
                                        imageUrl={HelpCenterImage.src}
                                        buttonText="Go to Help Center"
                                        onClick={() =>
                                            window.open(
                                                "https://support.miestro.com/",
                                                "_blank"
                                            )
                                        }
                                        description="Still have questions? You can find what you're looking for by going to the Help Center."
                                    />
                                </AnimationOnScroll>
                            </div>
                            <div className="w-[100%] h-[auto] flex">
                                <AnimationOnScroll animateIn="animate__fadeInUp">
                                    <HelpCard
                                        title="Training"
                                        imageUrl={TrainingImage.src}
                                        onClick={() =>
                                            window.open(
                                                "http://training.miestro.com/",
                                                "_blank"
                                            )
                                        }
                                        buttonText="Start Training"
                                        description="Learn the ins and outs of Miestro and how to sell your online training."
                                    />
                                </AnimationOnScroll>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpSection;
