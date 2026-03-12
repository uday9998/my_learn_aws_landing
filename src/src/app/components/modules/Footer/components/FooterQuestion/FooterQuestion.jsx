import { TYPES as types, SIZES as sizes } from "@/app/components/elements/TextWithIcon/TextWithIconProps";
import { THEMES as themes } from "@/app/components/elements/Button/ButtonProps";

import { NewText } from "@/app/components/elements/TextWithIcon/TextWithIcon";
import Button from "@/app/components/elements/Button/Button";

import styles from './FooterQuestion.module.scss';

const FooterQuestion = () => {
    return (
        <div
            className={`flex lg:py-6 lg:px-[48px] p-6 gap-4 rounded-[20px] flex-col lg:flex-row justify-between items-center ${styles.question__wrapper}`}
            style={{ background: '#252525', border: '1px solid rgba(255, 255, 255, 0.1)', }}
        >
            <NewText
                inner='Still Have Questions?'
                type={types.mediumSmall}
                size={sizes.size_28}
                style={{ color: '#fff' }}
            />
            <Button
                text='Contact Us'
                onClick={() => window.open('http://support.miestro.com/')}
                theme={themes.custom}
                className={`${styles.footer__contact__button} !w-full lg:!w-min`}
            />
        </div>
    )
}

export default FooterQuestion