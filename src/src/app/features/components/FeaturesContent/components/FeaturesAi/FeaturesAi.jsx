import Link from 'next/link';

import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';

import { NewText, TextColumn } from '@/app/components/elements/TextWithIcon/TextWithIcon';
import Button from '@/app/components/elements/Button/Button';

import image1 from '@/app/assets/images/features/ai/image1.png';
import image2 from '@/app/assets/images/features/ai/image2.png';
import image3 from '@/app/assets/images/features/ai/image3.png';
import image4 from '@/app/assets/images/features/ai/image4.png';

import background from '@/app/assets/images/features/emails/background.png';
import poweredByBackground from '@/app/assets/images/features/ai/poweredByBackground.png';

import styles from './FeaturesAi.module.scss';

const FeaturesAi = () => {
    return (
        <div className="flex flex-col relative">
            <div className="flex flex-col relative">
                <img src={background.src} className='absolute' alt="online course platform" />
                <div className={`${styles.main__wrapper} py-[140px]`} style={{ backgroundColor: '#FAFBFC' }}>
                    <div className="main__container">
                        <div className="flex flex-col gap-[120px]">
                            <div className={`${styles.yourself__wrapper} flex flex-col gap-6 items-center`}>
                                <NewText
                                    inner='Establish Yourself As A Market Expert.'
                                    type={types.bold900}
                                    size={sizes.size_40}
                                    style={{ lineHeight: '150%' }}
                                />
                                <NewText
                                    inner='You’ll save time and money while creating a powerful new income stream that allows you to establish yourself as an expert in your marketplace.'
                                    type={types.regular160}
                                    size={sizes.xlarge}
                                    style={{ color: '#727978', textAlign: 'center' }}
                                />
                            </div>
                            <div className={`${styles.baing__wrapper} flex items-center gap-6`}>
                                <div className="flex flex-col gap-8 pl-[35px]">
                                    <div className={`${styles.being__wrapper} flex flex-col gap-6`}>
                                        <NewText
                                            inner='Being A Creator Has Never Been This Easy!'
                                            type={types.bold900}
                                            size={sizes.size_40}
                                            style={{ lineHeight: '150%' }}
                                        />
                                        <NewText
                                            inner="Everything is integrated into one intuitive, easy-to-use platform that leverages the most advanced artificial intelligence to ensure you and your audience have an unmatched experience."
                                            type={types.regular160}
                                            size={sizes.xlarge}
                                            style={{ color: '#727978' }}
                                        />
                                        <div className={styles.btn__wrapper}>
                                            <Link href='/signup'>
                                                <Button
                                                    text='Start Free Trial'
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <img src={image1.src} alt="online course platform" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.main__content__wrapper} w-full`} style={{ backgroundImage: `url(${poweredByBackground.src})`, backgroundSize: 'cover' }}>
                <div className="main__container">
                    <div className={`${styles.build__main__wrapper} flex gap-6 py-[100px] items-center`}>
                        <img src={image2.src} alt="online course platform" />
                        <div className="flex flex-col gap-8 pl-[35px]">
                            <div className={`${styles.build__wrapper} flex flex-col gap-6`}>
                                <div className={styles.title__wrapper}>
                                    <NewText
                                        inner='Build your brand with our website and landing page builder.'
                                        type={types.bold900}
                                        size={sizes.size_40}
                                        style={{ lineHeight: '150%', color: "#fff" }}
                                        lato={true}
                                    />
                                </div>
                                <div className={styles.sub__text} style={{
                                    maxWidth: '333px',
                                    width: '100%'
                                }}>
                                    <NewText
                                        inner="You can choose a theme and use our website and landing page builder to build your brand. You can create engaging video content and build a community of loyal followers that you can engage with in real-time."
                                        type={types.regular160}
                                        size={sizes.xlarge}
                                        style={{ color: '#727978' }}
                                    />
                                </div>
                                <div className={styles.btn__wrapper}>
                                    <Link href='/signup'>
                                        <Button
                                            text='Start Free Trial'
                                            style={{ border: 'none' }}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.beyond__main__wrapper} flex flex-col gap-10 py-[100px]`}>
                <div className={`${styles.simple__wrapper} flex flex-col gap-6`}>
                    <div className={styles.simple__titile__wrapper}>
                        <div className={styles.mobile__wrapper}>
                            <NewText 
                                inner='Go Beyond Simple Training & Create Lasting Memories'
                                type={types.bold900}
                                size={sizes.size_40}
                                style={{ lineHeight: '150%' }}
                            />
                        </div>
                        <div className={styles.desktop__wrapper}>
                            <TextColumn
                                texts={['Go Beyond Simple Training &', 'Create Lasting Memories']}
                                type={types.bold900}
                                size={sizes.size_40}
                                style={{ lineHeight: '150%' }}
                            />
                        </div>
                    </div>
                    <div className={styles.sub__title__wrapper}>
                        <div className={styles.mobile__wrapper}>
                            <NewText 
                                inner='On other platforms, you create basic online training. With Miestro’s AI-backed platform, you make a total experience for your members that includes everything from websites to emails, video classes, ebooks, other digital products, and more.'
                                type={types.regular160}
                                size={sizes.xlarge}
                                style={{ color: '#444C4B' }}
                            />
                        </div>
                        <div className={styles.desktop__wrapper}>
                            <TextColumn
                                texts={['On other platforms, you create basic online training. With Miestro’s AI-backed platform, you ', 'make a total experience for your members that includes everything from websites to emails,', ' video classes, ebooks, other digital products, and more.']}
                                type={types.regular160}
                                size={sizes.xlarge}
                                style={{ color: '#444C4B' }}
                            />
                        </div>
                    </div>
                </div>
                <div className={`${styles.img__text__wrapper} main__container flex items-center gap-6`}>
                    <img src={image3.src} alt="online course platform" />
                    <NewText
                        inner='It’s all thanks to our digital creation tool that utilizes the latest AI to give you a membership site whose quality is “head and shoulders” above the competition.'
                        type={types.regular160}
                        size={sizes.xlarge}
                        style={{ color: '#727978' }}
                    />
                </div>
                <div className={styles.last__text__wrapper}>
                    <div className={styles.mobile__wrapper}>
                        <NewText 
                            inner='Your customers are sure to love their membership, which, in turn, will keep them coming back, to you for additional learning opportunities and products. In other words, you’ll create loyal, customers eager to do business with you again and again in the future.'
                            type={types.regular160}
                            size={sizes.xlarge}
                            style={{ color: '#444C4B' }}
                        />
                    </div>
                    <div className={styles.desktop__wrapper}>
                        <TextColumn
                            texts={['Your customers are sure to love their membership, which, in turn, will keep them coming back', 'to you for additional learning opportunities and products. In other words, you’ll create loyal', 'customers eager to do business with you again and again in the future.']}
                            type={types.regular160}
                            size={sizes.xlarge}
                            style={{ color: '#444C4B' }}
                        />
                    </div>
                    
                </div>
            </div>
            <div className={`${styles.ultimate__main__wrapper} pt-[60px] pb-[100px]`} style={{ background: '#F4F7F7' }}>
                <div className="container">
                    <div className="w-full px-[110px]">
                        <div className="flex flex-col items-center gap-8">
                            <div className="flex flex-col gap-6">
                                <div className={styles.ultimate__wrapper}>
                                    <div className={styles.ultimate__title__wrapper}>
                                        <TextColumn
                                            texts={['It’s the Ultimate Next-Generation', 'Business Growth Tool']}
                                            type={types.bold900}
                                            size={sizes.size_40}
                                            style={{ lineHeight: '150%' }}
                                            lato={true}
                                        />
                                    </div>
                                    <div className={styles.ultimate__subtitle__wrapper}>
                                        <NewText
                                            inner='Content is in high demand today, and Miestro gives you everything you need to tap into that demand and generate profits. Our AI-backed system includes automations that boost customer engagement and save you time, a flexible suite of marketing and analytics tools, and a fast, simple payment system.'
                                            type={types.regular160}
                                            size={sizes.xlarge}
                                            style={{ color: '#444C4B', textAlign: 'center' }}
                                            lato={true}
                                        />
                                    </div>
                                </div>
                                <div className={`${styles.addition__text__wrapper} flex items-center gap-6 justify-evenly`}>
                                    <NewText
                                        inner='In addition, you get templates to turn your content into digital products quickly and to create an engaging learning atmosphere.'
                                        type={types.regular160}
                                        size={sizes.xlarge}
                                        style={{ color: '#444C4B', maxWidth: '450px', width: '100%' }}
                                    />
                                    <img src={image4.src} alt="online course platform" />
                                </div>
                                <div className={`${styles.ultimate__footer__text__wrapper} mr-[50px] mt-[-20px]`} style={{ transform: 'rotate(-2deg)' }}>
                                    <TextColumn
                                        texts={['You’ll have everything you need to boost your profits', '– and since our platform is based on the latest AI, it', 'is constantly improving!']}
                                        type={types.mediumXSmall}
                                        size={sizes.xxlarge}
                                        style={{ color: '#444C4B' }}
                                    />
                                </div>
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
    )
}

export default FeaturesAi
