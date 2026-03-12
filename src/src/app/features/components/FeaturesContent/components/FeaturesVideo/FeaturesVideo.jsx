import Link from 'next/link';

import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps'

import { NewText, TextDocument, TextColumn } from '@/app/components/elements/TextWithIcon/TextWithIcon';
import Button from '@/app/components/elements/Button/Button';

import image1 from '@/app/assets/images/features/video/image1.png'
import image2 from '@/app/assets/images/features/video/image2.png'
import star from '@/app/assets/images/features/video/star.png'
import attentionImage from '@/app/assets/images/features/video/attention.png';

import styles from './FeaturesVideo.module.scss';

const FeaturesVideo = () => {
    return (
        <div className="flex flex-col relative">
            <div className={`${styles.story__main__wrapper} py-[140px]`} style={{ backgroundColor: '#FAFBFC' }}>
                <div className="main__container">
                    <div className="flex flex-col gap-[120px]">
                        <div className={`${styles.text__img__wrapper} flex items-start gap-6`}>
                            <img src={image1.src} alt="online course platform" />
                            <div className={`${styles.text__wrapper} flex flex-col gap-8 pl-[35px]`}>
                                <div className={`${styles.story__title__wrapper} flex flex-col gap-6`}>
                                    <div className={styles.titile__wrapper}>
                                        <NewText
                                            inner='Everybody Has a Story to Tell … Tell Yours With Miestro!'
                                            type={types.bold900}
                                            size={sizes.size_40}
                                            style={{ lineHeight: '150%' }}
                                        />
                                    </div>
                                    <div className={`${styles.column__text__wrapper} flex items-start gap-6`}>
                                        <div className="py-[2px] px-[6px] rounded-[12px]" style={{ backgroundColor: '#24554E' }}>
                                            <NewText
                                                inner='1'
                                                type={types.mediumSmall}
                                                size={sizes.xxlarge}
                                                className='justify-center'
                                                style={{ color: '#fff', lineHeight: '125%', width: '24px' }}
                                            />
                                        </div>
                                        <TextDocument
                                            inner='<div><span style="color: #131F1E; font-weight: 600">The e-learning market is expected to grow </span>over the next several years to $375 billion in profits by 2026. Numerous niches are exploding in popularity as people seek information from experts like you!</div>'
                                            type={types.regular160}
                                            style={{ color: '#727978' }}
                                            size={sizes.xlarge}
                                        />
                                    </div>
                                    <div className={`${styles.column__text__wrapper} flex items-start gap-6`}>
                                        <div className="py-[2px] px-[6px] rounded-[12px]" style={{ backgroundColor: '#2585EB' }}>
                                            <NewText
                                                inner='2'
                                                type={types.mediumSmall}
                                                className='justify-center'
                                                size={sizes.xxlarge}
                                                style={{ color: '#fff', lineHeight: '125%', width: '24px' }}
                                            />
                                        </div>
                                        <TextDocument
                                            inner='<div>Now with Miestro, you can <span style="color: #131F1E; font-weight: 600">launch your program without all the frustration and expense</span> that typically accompany content creation. That’s because Miestro has developed a complete system with templates, automations, and easy-to-use design tools that simplify the process.</div>'
                                            type={types.regular160}
                                            style={{ color: '#727978' }}
                                            size={sizes.xlarge}
                                        />
                                    </div>
                                    <div className={`${styles.column__text__wrapper} flex items-start gap-6`}>
                                        <div className="py-[2px] px-[6px] rounded-[12px]" style={{ backgroundColor: '#9747FF' }}>
                                            <NewText
                                                inner='3'
                                                type={types.mediumSmall}
                                                className='justify-center'
                                                size={sizes.xxlarge}
                                                style={{ color: '#fff', lineHeight: '125%', width: '24px' }}
                                            />
                                        </div>
                                        <TextDocument
                                            inner='<div> We even <span style="color: #131F1E; font-weight: 600">help you market your site</span> and collect payment through our system, which integrates easily with <span style="color: #131F1E; font-weight: 600">Stripe</span> and <span style="color: #131F1E; font-weight: 600">PayPal.</span> Nothing could be easier!</div>'
                                            type={types.regular160}
                                            style={{ color: '#727978' }}
                                            size={sizes.xlarge}
                                        />
                                    </div>
                                    <div className={`${styles.btn__wrapper} ml-[56px]`}>
                                        <Link href='/signup'>
                                            <Button
                                                text='Start Free Trial'
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.main__wrapper} flex items-center gap-6`}>
                            <div className="flex flex-col gap-8 pl-[35px]">
                                <div className="flex flex-col gap-6">
                                    <div className={styles.title__wrapper}>
                                        <NewText
                                            inner='Get Your Content in Front of the People Who Need It Most'
                                            type={types.bold900}
                                            size={sizes.size_40}
                                            style={{ lineHeight: '150%' }}
                                            lato={true}
                                        />
                                    </div>
                                    <div className={styles.texts__wrapper}>
                                        <NewText
                                            inner="These days creating content is just one part of a winning recipe. Today's sophisticated prospects expect more."
                                            type={types.regular160}
                                            size={sizes.large}
                                            style={{ color: '#727978' }}
                                        />
                                        <TextDocument
                                            inner='<div style="font-size: 18px"> Miestro allows you to <span style="color: #131F1E; font-weight: 600">"over-deliver"</span> by providing you with emails, funnels, websites, marketing campaigns, analytic tools, landing pages, email drip campaigns, and much more.</div>'
                                            type={types.regular160}
                                            style={{ color: '#727978' }}
                                            size={sizes.xlarge}
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
                        <div className="flex justify-center items-center gap-6">
                            <img src={attentionImage.src} alt="online course platform" />
                            <div className={styles.community__text__wrapper}>
                                <TextColumn
                                    texts={['You can even create a vibrant community where your members', 'can interact and take their learning experience to a higher level.']}
                                    type={types.medium160}
                                    size={sizes.xlarge}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.absolute__img__wrapper} absolute z-0 top-[40%]`}>
                <img src={star.src} alt='star' />
            </div>
        </div>
    )
}

export default FeaturesVideo
