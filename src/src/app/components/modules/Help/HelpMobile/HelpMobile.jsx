import { AnimationOnScroll } from "react-animation-on-scroll";
import { TYPES as types } from "@/app/components/elements/TextWithIcon/TextWithIconProps";

import Text, { NewText } from "@/app/components/elements/TextWithIcon/TextWithIcon";
import HelpCard from "../HelpCard/HelpCard";

import Support from '@/app/assets/images/Support.png';
import CommunityImage from '@/app/assets/images/community.png';
import HelpCenterImage from '@/app/assets/images/helpCenter.png';
import TrainingImage from '@/app/assets/images/Training.png';

import styles from './HelpMobile.module.scss';

const HelpMobile = () => {
    return (
        <div className={`flex ${styles.help__mobile__wrapper}`}>
            <div className="flex w-full flex-col pt-[100px] items-center px-[16px] pb-7 gap-9">
                <div className="flex flex-col items-center gap-4">
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <NewText
                            inner="The Miestro Team Will Provide"
                            type={types.bold800}
                            style={{
                                fontSize: "18px",
                                fontFamily: true,
                                lineHeight: "140%"
                            }}
                            className="netflix__gradient__text"
                        />
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <Text
                            inner="Help When You Need It"
                            type={types.bold900}
                            className="text-center"
                            style={{
                                fontSize: "36px",
                                lineHeight: "120%",
                                color: "#fff"
                            }}
                        />
                    </AnimationOnScroll>
                </div>
                <div className="flex flex-col gap-6">
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
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <HelpCard
                            title="Help Center"
                            imageUrl={HelpCenterImage.src}
                            onClick={() =>
                                window.open(
                                    "https://support.miestro.com/",
                                    "_blank"
                                )
                            }
                            buttonText="Go to Help Center"
                            description="Still have questions? You can find what you're looking for by going to the Help Center."
                        />
                    </AnimationOnScroll>
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
    );
};

export default HelpMobile