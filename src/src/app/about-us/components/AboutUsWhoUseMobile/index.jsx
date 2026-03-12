import { TYPES as types } from "@/app/components/elements/TextWithIcon/TextWithIconProps";
import { NewText } from "@/app/components/elements/TextWithIcon/TextWithIcon";

import whoUseImg from '@/app/assets/images/aboutus/whoUse.png';

import styles from './AboutUsWhoUseMobile.module.scss';

const AboutUsWhoUseMobile = () => {
    return (
        <div className={styles.who__wrapper}>
            <div className={styles.text__wrapper}>
                <NewText
                    inner='Our team is made up of passionate and creative individuals from all over the world who share the same goal: to help creators succeed.'
                    type={types.bold800}
                    style={{ fontSize: '32px', color: '#444C4B' }}
                />
            </div>
            <div>
                <img src={whoUseImg.src} alt="who use" />
            </div>
        </div>
    )
};

export default AboutUsWhoUseMobile;