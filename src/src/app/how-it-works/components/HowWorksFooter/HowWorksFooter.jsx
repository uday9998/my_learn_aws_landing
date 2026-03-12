'use client';
import Link from 'next/link';
// import { useState } from 'react';

import cx from 'classnames';
import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';

import Text, { TextColumn, TextWithIcon } from '@/app/components/elements/TextWithIcon/TextWithIcon';
import Button from '@/app/components/elements/Button/Button';
// import BookDemo from '@/app/components/modules/BookDemo';

import Background from "@/app/assets/images/footer.png";
import image from '@/app/assets/images/howPage/footerImage.png';

import styles from './HowWorksFooter.module.scss';

const items = [
    'Upload Your Content',
    'Use Smart Tools',
    'Set Your Price',
    'Customize Your School Room',
]

const items2 = [
    'Market Your Program',
    'Get Paid',
    'And Build A Community With Your Customers',
]

const HowWorksFooter = () => {
    // const [isShowPopup, setIsShowPopup] = useState(false);

    // const handleChangePopup = () => {
    //     setIsShowPopup(prevState => !prevState)
    // }

    return (
        <div
            style={{
                background: `url(${Background.src})`,
                backgroundSize: "cover"
            }}
        >
            <div className="container">
                <div className="flex flex-col gap-10">
                    <div
                        className={ cx(styles.inner__wrapper, {
                            "flex flex-col items-center py-[100px]": true,
                        }) }
                    >
                        <div className={`flex gap-8 items-center ${styles.how__work__footer}`}>
                            <div className={styles.mobile__text__wrapper}>
                                <Text
                                    inner='With Miestro, You Can:'
                                    type={types.bold900}
                                    className='text-center'
                                    style={{ fontSize: '36px', color: '#fff' }}
                                />
                            </div>
                            <div className={`${styles.desktop__text__wrapper} text__column`}>
                                <TextColumn
                                    texts={['With Miestro,', 'You Can:']}
                                    type={types.bold900}
                                    style={{ fontSize: '54px', color: '#fff' }}
                                />
                            </div>
                            <div
                                className={`flex gap-6 w-full ${styles.how__work__footer__items}`}
                            >
                                <div className="flex flex-col gap-4">
                                    {items.map((e, i) => {
                                        return (
                                            <TextWithIcon
                                                iconName='CheckBoxFooter'
                                                inner={e}
                                                type={types.medium160}
                                                size={sizes.xlarge}
                                                key={i}
                                                style={{ color: '#fff' }}
                                                iconGap={16}
                                            />
                                        )
                                    })}
                                </div>
                                <div className="flex flex-col gap-4">
                                    {items2.map((e, i) => {
                                        return (
                                            <TextWithIcon
                                                iconName='CheckBoxFooter'
                                                inner={e}
                                                type={types.medium160}
                                                size={sizes.xlarge}
                                                key={i}
                                                style={{ color: '#fff' }}
                                                iconGap={16}
                                            />

                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.how__work__footer__block} flex justify-between`}>
                            <div className="flex flex-col gap-4">
                                <div className={styles.footer__mobile__text__wrapper}>
                                    <Text
                                        inner="If you're interested in learning more, contact Miestro for a demo online."
                                        type={types.bold}
                                        size={sizes.size_40}
                                        style={{ color: '#fff' }}
                                        className='text-center'
                                    />
                                </div>
                                <div className={styles.footer__desktop__text__wrapper}>
                                    <TextColumn
                                        texts={["If you're interested in", "learning more, contact", "Miestro for a demo online."]}
                                        type={types.bold}
                                        alignItems='start'
                                        size={sizes.size_40}
                                        style={{ color: '#fff' }}
                                    />
                                </div>
                                <div
                                    className={styles.button__wrapper}
                                >
                                    <Link href={'https://demo.miestro.com/'} target='_blank'>
                                        <Button
                                            text='Book a Demo'
                                            className='book_a_demo_button'
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div
                                className={styles.img__wrapper}
                            >
                                <img src={image.src} alt="online course platform" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className={cx(styles.book__demo__wrapper, {
                    [styles.active]: isShowPopup
                })}>
                    <BookDemo />
                </div>   */}
            </div>
        </div>
    )
}

export default HowWorksFooter
