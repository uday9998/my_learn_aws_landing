import Text from "@/app/components/elements/TextWithIcon/TextWithIcon";
import { TYPES as types } from "@/app/components/elements/TextWithIcon/TextWithIconProps";

import styles from './NetflixBlock.module.scss';

const NetflixBlock = () => {
    return (
        <div
            className={`container pt-[48px] pb-[74px]  bg-no-repeat flex items-center flex-col about__block relative gap-[58px] ${styles.netflix__block__wrapper}`}
        >
            <div className="pl-[48px] w-full flex flex-col">
                <Text
                    inner="Build:"
                    type={types.bold800}
                    style={{
                        lineHeight: "38px",
                        fontSize: "32px",
                        color: "#F8FAFA"
                    }}
                />
                <Text
                    inner="Netflix Style"
                    type={types.bold900}
                    className="netflix__gradient__text"
                    style={{
                        lineHeight: "110%",
                        fontSize: "52px"
                    }}
                />
                <Text
                    inner="Catalog"
                    type={types.bold900}
                    className="netflix__gradient__text"
                    style={{
                        lineHeight: "110%",
                        fontSize: "52px"
                    }}
                />
            </div>
        </div>
    );
};

export default NetflixBlock;