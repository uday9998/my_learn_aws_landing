import privacyData from "@/app/resources/privacyData";

import { TYPES as types, SIZES as sizes  } from "@/app/components/elements/TextWithIcon/TextWithIconProps";

import Text, { NewText } from "@/app/components/elements/TextWithIcon/TextWithIcon";
import ContentSection from "../ContentSection/ContentSection";

import image2 from "@/app/assets/images/image2.png";
import image3 from "@/app/assets/images/image3.png";

import styles from './PrivacyContent.module.scss';

const PrivacyContent = () => {
    return (
        <div className={`${styles.privacy__content} privacy__container flex flex-col relative`}>
            <img src={image3.src} alt="online course platform" style={{ objectFit: "cover" }} />
            <div
                className="flex opacity-[0.5] py-[48px] px-[48px]"
                style={{ background: "#252525", borderRadius: "48px" }}
            >
                <div className="privacy__yelow">
                    <Text
                        inner="Miestro, Inc (&quot;Miestro&quot;) owns and operates this Miestro.com website business. All references to &quot;we&quot;, &quot;us&quot;, this &quot;website&quot; or this &quot;site&quot; shall be construed to mean Miestro."
                        type={types.medium160}
                        size={sizes.xlarge}
                        className="privacy__yelow__text"
                    />
                </div>
            </div>
            {privacyData.map((e, index) => {
                return <ContentSection {...e} key={index} />;
            })}
            <div className="mt-[68px] flex items-center gap-[32px] contact__us">
                <div className="flex flex-col gap-4">
                    <NewText
                        inner="Contact Us"
                        type={types.bold900}
                        style={{
                            lineHeight: "190%",
                            fontSize: "40px",
                            fontFamily: true
                        }}
                    />
                    <Text
                        inner="If you have any questions regarding this Privacy Policy, please contact the owner and operator of this website business at:"
                        type={types.regular160}
                        size={sizes.xlarge}
                        style={{
                            color: "#444C4B"
                        }}
                    />
                </div>
                <div
                    className="flex py-6 px-[48px] flex-col rounded-[48px]  w-full"
                    style={{
                        background: "#F0F2F2"
                    }}
                >
                    <div
                        className="flex flex-col pl-[32px] contact__us__block"
                        style={{ borderLeft: "4px solid #A1A5A5" }}
                    >
                        <Text
                            inner="Miestro, Inc"
                            type={types.medium160}
                            className="whitespace-nowrap"
                            size={sizes.xlarge}
                        />
                        <Text
                            inner="Attn: Privacy Policy Officer"
                            type={types.medium160}
                            className="whitespace-nowrap sm:whitespace-wrap"
                            size={sizes.xlarge}
                        />
                        <Text
                            inner="3355 Lenox Road Suite 1000"
                            type={types.medium160}
                            size={sizes.xlarge}
                            className="whitespace-nowrap"
                        />
                        <Text
                            inner="Atlanta, GA- 30326"
                            type={types.medium160}
                            className="whitespace-nowrap"
                            size={sizes.xlarge}
                        />
                        <Text
                            inner="Contact Us"
                            type={types.medium160}
                            className="whitespace-nowrap"
                            size={sizes.xlarge}
                        />
                        <div className="flex items-center gap-2">
                            <Text
                                inner="Email: "
                                type={types.medium160}
                                className="whitespace-nowrap"
                                size={sizes.xlarge}
                            />
                            <a href="mailto:support@miestro.com">
                                <Text
                                    inner="support@miestro.com"
                                    type={types.medium160}
                                    className="whitespace-nowrap"
                                    size={sizes.xlarge}
                                    style={{
                                        color: "#3060BD",
                                        cursor: "pointer"
                                    }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <img src={image2.src} alt="online course platform" style={{ objectFit: "cover" }} />
            </div>
        </div>
    );
};

export default PrivacyContent;
