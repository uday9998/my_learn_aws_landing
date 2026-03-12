import { AnimationOnScroll } from "react-animation-on-scroll";
import Text, { NewText } from "@/app/components/elements/TextWithIcon/TextWithIcon";
import { TYPES as types } from "@/app/components/elements/TextWithIcon/TextWithIconProps";
import HelpCard from "../HelpCard/HelpCard";
import Support from '@/app/assets/images/Support.png';
import CommunityImage from '@/app/assets/images/community.png';
import HelpCenterImage from "@/app/assets/images/helpCenter.png";
import TrainingImage from "@/app/assets/images/Training.png";

import cx from 'classnames';

import styles from './HelpDesktop.module.scss';

const HelpSection = () => {
    return (
        <div className={`flex ${styles.help__section__wrapper}`}>
            <div
                className={ cx(styles.section__wrapper, {
                    "container pt-[180px]": true,
                }) }
            >
                <div className="flex flex-col items-center gap-[60px]">
                    <div className="flex flex-col gap-[16px] items-center">
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                            <NewText
                                inner="The Miestro Team Will Provide"
                                type={types.bold800}
                                style={{
                                    fontSize: "32px",
                                    fontFamily: true,
                                    lineHeight: "140%"
                                }}
                                className="netflix__gradient__text"
                            />
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInUp">
                            <Text
                                inner="Support That Feels Like Partnership"
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
                            className={ cx(styles.animation__wrapper, {
                                "flex items-stretch self-stretch gap-[24px]": true,
                            }) }
                            style={{ alignItems: "initial" }}
                        >
                            <div className="w-[100%] h-[auto] flex">
                                <AnimationOnScroll animateIn="animate__fadeInLeft">
                                    <HelpCard
                                        title="Support Team"
                                        imageUrl={Support.src}
                                        onClick={() =>
                                            window.open(
                                                "https://support.miestro.com/",
                                                "_blank"
                                            )
                                        }
                                        buttonText="Contacting Support"
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
                            className={ cx(styles.second__animation__wrapper, {
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