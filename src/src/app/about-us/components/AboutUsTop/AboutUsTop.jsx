import cx from 'classnames';
import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';

import { NewText, TextColumn } from '@/app/components/elements/TextWithIcon/TextWithIcon';

import usersImage from '@/app/assets/images/aboutus/users.png';


import styles from './AboutUsTop.module.scss';

const AboutUsTop = () => {
    return (
        <div
            className={ cx(styles.about__us__top__wrapper, {
                "flex flex-col py-[100px]": true,
            }) }
        >
            <div className={`${styles.texts__wrapper} flex flex-col gap-6 items-center`}>
                <div className={styles.title__wrapper}>
                    <NewText
                        inner='Our Mission'
                        type={types.bold900}
                        style={{ lineHeight: '150%', fontSize: '40px' }}
                    />
                </div>
                <div className={styles.mobile__text}>
                    <NewText
                        inner="We're on a mission to shake up the status quo of the internet. We believe that the online world shouldn't be limited to one dominant feed and that every creator deserves the opportunity to build their own unique culture."
                        type={types.regularDefault}
                        size={sizes.xlarge}
                        style={{ color: "#727978" }}
                        className='text-center'
                    />
                </div>
                <div className={styles.desktop__text}>
                    <TextColumn
                        texts={["We're on a mission to shake up the status quo of the internet. We believe that the online world", " shouldn't be limited to one dominant feed and that every creator deserves the opportunity to", "build their own unique culture."]}
                        type={types.regularDefault}
                        size={sizes.xlarge}
                        style={{ color: "#727978" }}
                    />
                </div>
            </div>
            <div
                className={ cx(styles.second__section, {
                    "flex items-center about__container": true,
                }) }
            >
                <div className="flex flex-col gap-6">
                    <div className={styles.mobile__align}>
                        <NewText
                            inner="We're building a movement to empower creators to create culture, not just content. "
                            type={types.bold900}
                            style={{fontSize: '40px',lineHeight: '150%'}}
                        />
                        <NewText
                            inner="With Miestro, you can break free from the constraints of the traditional internet landscape and build vibrant, engaging communities that are true reflections of your vision and creativity."
                            type={types.regular160}
                            size={sizes.xlarge}
                            style={{color: '#727978'}}
                        />
                    </div>
                </div>
                <img src={usersImage.src} alt="online course platform" />
            </div>
        </div>
    )
};

export default AboutUsTop;