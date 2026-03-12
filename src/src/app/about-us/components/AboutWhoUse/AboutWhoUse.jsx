import { TYPES as types } from "@/app/components/elements/TextWithIcon/TextWithIconProps";

import { NewText } from "@/app/components/elements/TextWithIcon/TextWithIcon";

import styles from './AboutWhoUse.module.scss';

const AboutWhoUse = () => {
    return (
        <div className={`w-full h-[737px] relative ${styles.who__use__wrapper}`}>
            <div className={styles.who__use__text}>
                <NewText
                    inner='Our team is made up of passionate and creative individuals from all over the world who share the same goal: to help creators succeed.'
                    type={types.bold800}
                    style={{ fontSize: '32px', color: '#444C4B', textAlign: 'center' }}
                />
            </div>
        </div>
    )
};

export default AboutWhoUse;