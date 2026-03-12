import PropTypes from "prop-types";
import { TYPES as types, SIZES as sizes } from "@/app/components/elements/TextWithIcon/TextWithIconProps";

import Text, { NewText } from "@/app/components/elements/TextWithIcon/TextWithIcon";

import styles from './PrivacyPageHero.module.scss';

const PrivacyHero = ({ tab, handleChangeTab }) => {
    const text = tab === "privacy" ? "PRIVACY POLICY" : "TERMS OF USE AND DMCA NOTICE";
    
    return (
        <div className="flex pt-[48px] pb-[86px] items-center flex-col">
            <div className="mb-[53px] flex gap-6 relative">
                <span onClick={() => handleChangeTab("privacy")}>
                    <Text
                        inner="Privacy Policy"
                        type={types.medium150}
                        
                        size={sizes.medium}
                        style={{ color: "#fff", cursor: "pointer" }}
                    />
                </span>
                <span onClick={() => handleChangeTab("terms")}>
                    <Text
                        inner="Terms of Service"
                        type={types.medium150}
                        
                        size={sizes.medium}
                        style={{ color: "#fff", cursor: "pointer" }}
                    />
                </span>
                <div
                    className={`absolute bottom-[-2px] h-[2px] bg-white`}
                    style={{
                        borderRadius: "2px 2px 0px 0px",
                        width: tab === "privacy" ? "101px" : "122px",
                        transition: "0.3s",
                        left: tab === "privacy" ? "0%" : "50%"
                    }}
                />
            </div>
            <NewText
                inner={text}
                type={types.bold900}
                style={{
                    fontFamily: true,
                    fontSize: "54px",
                    color: "#fff",
                    maxWidth: "50%",
                    textAlign: "center"
                }}
                className={`mb-8 ${styles.title}`}
            />
            <div className={`flex items-center ${styles.expire__section} gap-3`}>
                <Text
                    inner="Effective Date:"
                    type={types.mediumXSmall}
                    size={sizes.size_28}
                    style={{
                        color: "rgba(255, 255, 255, 0.6)",
                        lineHeight: "130%"
                    }}
                />
                <div className={styles.expire__block} >
                    <div className="expire__block__text">
                        <Text
                            inner="March 17th, 2023"
                            type={types.mediumXSmall}
                            size={sizes.size_28}
                            style={{ color: "#fff", lineHeight: "130%" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

PrivacyHero.propTypes = {
    tab: PropTypes.string,
    handleChangeTab: PropTypes.func
};

export default PrivacyHero;
