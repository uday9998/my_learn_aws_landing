import Link from 'next/link';

import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';

import { NewText } from '@/app/components/elements/TextWithIcon/TextWithIcon';
import Button from '@/app/components/elements/Button/Button';

import image1 from '@/app/assets/images/features/other/image1.png';
import image2 from '@/app/assets/images/features/other/image2.png';
import image3 from '@/app/assets/images/features/other/image3.png';

import styles from './FeaturesOther.module.scss';

const FeaturesOther = () => {
    return (
        <div className="flex flex-col">
            <div className={`${styles.main__wrapper} py-[140px]`} style={{ backgroundColor: '#FAFBFC' }}>
                <div className="main__container">
                    <div className={`${styles.main__inner__wrapper} flex flex-col gap-[120px]`}>
                        <div className={`${styles.img__text__wrapper} flex items-center gap-6`}>
                            <img src={image1.src} alt="online course platform" />
                            <div className="flex flex-col gap-8 pl-[35px]">
                                <div className="flex flex-col gap-6">
                                    <div className={styles.title__wrapper}>
                                        <NewText
                                            inner='Draw People in With Intriguing Quizzes'
                                            type={types.bold900}
                                            size={sizes.size_40}
                                            style={{ lineHeight: '150%' }}
                                            lato={true}
                                        />
                                    </div>
                                    <div className={styles.subtitle__wrapper}>
                                        <NewText
                                            inner="With Miestro, you can utilize attention-grabbing quizzes to draw people into your funnel and increase the number of leads for your video-based program."
                                            type={types.regular160}
                                            size={sizes.large}
                                            style={{ color: '#727978' }}
                                        />
                                        <NewText
                                            inner="Our quizzes allow you to ask interest-generating questions in an appealing format that visitors find hard to resist."
                                            type={types.regular160}
                                            size={sizes.large}
                                            style={{ color: '#727978' }}
                                        />
                                    </div>
                                    <div className={styles.btn__wrapper}>
                                        <Link href='/signup'>
                                            <Button
                                                text='Start Free Trial'
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.boost__img__text__wrapper} flex items-center gap-6`}>
                            <div className="flex flex-col gap-8 pl-[35px]">
                                <div className="flex flex-col gap-6">
                                    <div className={styles.title__wrapper}>
                                        <NewText
                                            inner='Boost Sales With Special Offer Coupons'
                                            type={types.bold900}
                                            size={sizes.size_40}
                                            style={{ lineHeight: '150%' }}
                                        />
                                    </div>
                                    <div className={styles.subtitle__wrapper}>
                                        <NewText
                                            inner='Another way Miestro helps creators boost their earnings is through powerful coupons that you can leverage to increase your paying customers.'
                                            type={types.regular160}
                                            size={sizes.large}
                                            style={{ color: '#727978' }}
                                        />
                                        <NewText
                                            inner='You can use special discounts to entice stubborn prospects into trying your program … or choose from our other proven-effective promotions to send your number of sign-ups soaring.'
                                            type={types.regular160}
                                            size={sizes.large}
                                            style={{ color: '#727978' }}
                                        />
                                    </div>
                                    <div className={styles.btn__wrapper}>
                                        <Link href='/signup'>
                                            <Button
                                                text='Start Free Trial'
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <img src={image2.src} alt="online course platform" />
                        </div>
                        <div className={`${styles.legitimize__wrapper} flex items-center gap-6`}>
                            <img src={image3.src} alt="online course platform" />
                            <div className="flex flex-col gap-8 pl-[35px]">
                                <div className="flex flex-col gap-6">
                                    <div className={styles.title__wrapper}>
                                        <NewText
                                            inner='Legitimize Your Program With a Professional-Looking Certificate'
                                            type={types.bold900}
                                            size={sizes.size_40}
                                            style={{ lineHeight: '150%' }}
                                        />
                                    </div>
                                    <div className={styles.subtitle__wrapper}>
                                        <NewText
                                            inner="A professionally designed certificate will add legitimacy to your program and increase member satisfaction upon program completion."
                                            type={types.regular160}
                                            size={sizes.large}
                                            style={{ color: '#727978' }}
                                        />
                                        <NewText
                                            inner="Our certificates look great and will surely be treasured by your members as proof of what they have learned."
                                            type={types.regular160}
                                            size={sizes.large}
                                            style={{ color: '#727978' }}
                                        />
                                    </div>
                                    <div className={styles.btn__wrapper}>
                                        <Link href='/signup'>
                                            <Button
                                                text='Start Free Trial'
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesOther
