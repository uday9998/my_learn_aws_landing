import Link from 'next/link';

import cx from 'classnames';
import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';

import { NewText, TextColumn } from '@/app/components/elements/TextWithIcon/TextWithIcon';
import { NewBaseButton } from '@/app/components/elements/Button/Button';

import image from '@/app/assets/images/aboutus/heroImage.png'

import styles from './AboutUsHero.module.scss';

const AboutUsHero = () => {
    const tryForFree = () => {
        // navigate(location.pathname, { state: { isOpenRegister: true } });
    }

    return (
        <div className={`about__us__hero ${styles.about__us__hero__wrapper}`}>
            <div className={`${styles.my__container} container`}>
                <div
                    className={ cx(styles.container__inner__wrapper, {
                        "flex gap-6 w-full": true,
                    }) }
                >
                    <div className="flex flex-col gap-4">
                            <div className={styles.mobile__wrapper}>
                                <NewText
                                    inner='Empowering the Next Generation of Culture Creators'
                                    type={types.bold900}
                                    className='about__us__hero__text text-center'
                                    style={{ fontSize: '36px' }}
                                    isSubtitle={ true }
                                />
                            </div>
                            <div className={styles.desktop__wrapper}>
                                <TextColumn
                                    texts={['Empowering the', 'Next Generation of', 'Culture Creators']}
                                    type={types.bold900}
                                    alignItems='start'
                                    className='about__us__hero__text'
                                    style={{ fontSize: '54px' }}
                                    isSubtitle={ true }
                                    Component={NewText}
                                />
                            </div>
                            <div className={styles.first__text__wrapper}>
                                <NewText
                                    inner='At Miestro, we believe that every creator should have the opportunity to succeed.'
                                    type={types.medium160}
                                    size={sizes.xlarge}
                                    style={{ color: '#727978' }}
                                    isTitle={ true }
                                />
                            </div>
                            <div className={styles.last__text__wrapper}>
                                <NewText
                                    inner="That's why we've created an all-in-one platform with cutting-edge tools to remove technology barriers and help creators change the world."
                                    type={types.regular153}
                                    size={sizes.large}
                                    className='mt-2'
                                    style={{ color: '#727978' }}
                                    isSubtitle={ true }
                                />
                            </div>
                            <div className={styles.btn__wrapper}>
                                <Link href='/signup'>
                                    <NewBaseButton
                                        text='Get Started'
                                        className='mt-4'
                                    />
                                </Link>
                            </div>
                    </div>
                    <img src={image.src} style={{ objectFit: 'contain' }} alt="online course platform" />
                </div>
            </div>
        </div>
    )
};

export default AboutUsHero;