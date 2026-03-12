'use client';

import cx from 'classnames';
import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';

import Text, { TextColumn } from '@/app/components/elements/TextWithIcon/TextWithIcon';

import background from '@/app/assets/images/pricingHero.png';
import blocks from '@/app/assets/images/howPage/block.png';

import styles from './HowWorksHero.module.scss';

const HowWorksHero = () => {
    return (
        <div className=" pt-[83px] pb-[80px] w-full" style={{ background: `url(${background.src})`, backgroundSize: 'cover' }}>
            <div
                className={ cx(styles.inner__wrapper, {
                    "flex flex-col pt-5 gap-8 items-center": true,
                }) }
            >
                <div className="flex flex-col items-center gap-4">
                    <Text
                        inner='How Miestro Works'
                        type={types.bold800}
                        className='gradient__text'
                        style={{ fontSize: '32px' }}
                        isTitle={ true }
                    />
                    <div className={styles.mobile__text__wrapper}>
                        <Text
                            inner='Miestro is the leading smart platform for creators to:'
                            type={types.bold900}
                            style={{ fontSize: '36px', textAlign: 'center' }}
                            isSubtitle={ true }
                        />
                    </div>
                    <div className={styles.desktop__text__wrapper}>
                        <TextColumn
                            texts={['Miestro is the leading smart', 'platform for creators to:']}
                            type={types.bold900}
                            style={{ fontSize: '54px' }}
                            isSubtitle={ true }
                        />
                    </div>
                </div>
                <img src={blocks.src} alt="online course platform" />
                <div className={styles.footer__mobile__text__wrapper}>
                    <Text
                        inner='Miestro is a revolutionary platform that empowers creators to monetize their content and build communities, memberships, and online courses with ease.'
                        type={types.regular153}
                        size={sizes.large}
                        style={{ color: '#727978' }}
                        className='text-center'
                    />
                </div>
                <div className={styles.footer__desktop__text__wrapper}>
                    <TextColumn
                        texts={['Miestro is a revolutionary platform that empowers creators to monetize their', ' content and build communities, memberships, and online courses with ease.']}
                        type={types.regular153}
                        size={sizes.large}
                        style={{ color: '#727978' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default HowWorksHero
