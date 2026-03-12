import { TYPES as types, SIZES as sizes } from "@/app/components/elements/TextWithIcon/TextWithIconProps";
import termsData from "@/app/resources/termsData";

import Text from "@/app/components/elements/TextWithIcon/TextWithIcon";
import ContentSection from "../ContentSection/ContentSection";
import IconNew from "@/app/components/elements/IconNew/IconNew";
import DMCSSection from "./components/DMCSSection/DMCSSection";

import styles from './TermsPage.module.scss';

const TermsPage = () => {
    return (
        <div className={`${styles.privacy__content} privacy__container flex flex-col relative`}>
            <div
                className="flex opacity-[0.5] py-[48px] px-[48px]"
                style={{ background: "#252525", borderRadius: "48px" }}
            >
                <div className={`flex gap-4 terms__yellow__section ${styles.terms__yellow__section}`}>
                    <div className="privacy__yelow py-3 w-[100%]">
                        <Text
                            inner="PLEASE READ THESE TERMS OF USE CAREFULLY."
                            type={types.medium160}
                            size={sizes.size_28}
                            className="privacy__yelow__text"
                        />
                    </div>
                    <Text
                        inner="By accessing or otherwise using this site, you agree to be bound contractually by these Terms of Use."
                        type={types.medium160}
                        size={sizes.xlarge}
                        className="privacy__yelow__text"
                    />
                </div>
            </div>
            <IconNew name="PrivacyImage" />
            {termsData.map((e, index) => {
                return <ContentSection {...e} key={index} />;
            })}
            <DMCSSection />
            <div className="w-full flex justify-center">
                <IconNew name="PrivacyImage2" />
            </div>
        </div>
    );
};

export default TermsPage;
