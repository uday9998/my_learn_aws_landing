'use client';

import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';

import { NewText, TextColumn } from '@/app/components/elements/TextWithIcon/TextWithIcon';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Customers from '../Customers/Customers';

//Customer 1
import background1 from '@/app/assets/images/aboutus/CustomerFirstBackground.png';
import image1 from '@/app/assets/images/aboutus/CustomerFirstImage.png';


//Customer 2
import background2 from '@/app/assets/images/aboutus/CustomerSecondBackground.png'
import image2 from '@/app/assets/images/aboutus/CustomerSecondImage.png'


//Customer 3
import background3 from '@/app/assets/images/aboutus/CustomerThirdBackground.png'
import image3 from '@/app/assets/images/aboutus/CustomerThirdImage.png'

import styles from './AboutCustomers.module.scss';

const AboutCustomers = () => {
    return (
        <div className="flex w-full flex-col py-[120px]">
            <div className="new__about__container flex flex-col gap-10">
                <div className="flex flex-col items-center gap-2">
                    <div className={styles.mobile__wrapper}>
                        <NewText
                            inner="But don't just take our word for it."
                            type={types.bold800}
                            style={{ fontSize: '32px' }}
                        />  
                    </div>
                        
                    <div className={styles.desktop__wrapper}>
                        <TextColumn
                            texts={["But don't just take our", "word for it."]}
                            type={types.bold900}
                            style={{ fontSize: '64px' }}
                        />
                    </div>
                    <div className="mt-4"></div>
                    <div className={styles.footer__text__wrapper}>
                        <TextColumn
                            texts={['Here are some of the inspiring stories of creators who', ' have achieved success with Miestro:']}
                            type={types.regular160}
                            size={sizes.xlarge}
                            style={{ color: '#727978' }}
                        />
                    </div>
                </div>
                <div className="flex gap-[30.5px] flex-col">
                    <AnimationOnScroll animateIn="animate__fadeInLeft">
                        <Customers 
                            scssClassName='customer1'
                            tailwindClassNames='flex items-stratch'
                            backgroundImage={background1.src}
                            image={image1.src}
                            style={{ fontSize: '32px', lineHeight: '110%' }}
                            secondStyle={{ color: 'rgba(19, 31, 30, 0.6)' }}
                            type={types.regular}
                            size={sizes.xlarge}
                            inner='From Zero to Hero:'
                            secondInner='Natasha is a lead sales coach and event sales marketing strategist. With our platform, she was able to easily create and share her content, which led to a massive increase in her following and revenue.'
                            componentClassName='title-1'
                            secondSize={sizes.xlarge}
                            secondType={types.medium160}
                            secondTailwindClassNames='flex items-start mt-[auto] flex-col gap-6 pb-[102px] pl-6'
                            fontBevan={true}
                        />
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInRight">
                        <Customers 
                            scssClassName='customer2'
                            tailwindClassNames='flex items-stratch'
                            backgroundImage={background2.src}
                            image={image2.src}
                            style={{ fontSize: '32px', lineHeight: '110%' }}
                            secondStyle={{ color: 'rgba(19, 31, 30, 0.6)' }}
                            type={types.regular}
                            size={sizes.xlarge}
                            inner='Breaking Barriers:'
                            secondInner='Jullien has created a movement in the real estate space. With Miestro, he was able to impact his students and connect with clients all over the world.'
                            componentClassName='title-2'
                            secondSize={sizes.xlarge}
                            secondType={types.medium160}
                            secondTailwindClassNames='flex items-start mt-[auto] flex-col gap-6 pb-[102px] pl-6'
                            fontSwash={true}
                        />
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInLeft">
                        <Customers 
                            scssClassName='customer3'
                            tailwindClassNames='flex items-stratch'
                            backgroundImage={background3.src}
                            image={image3.src}
                            style={{ fontSize: '32px', lineHeight: '110%' }}
                            secondStyle={{ color: 'rgb(255, 255, 255)' }}
                            type={types.regular}
                            size={sizes.xlarge}
                            inner='Making an mpact:'
                            secondInner="Sarah was passionate about making a difference in her community but didn't know how to get started. With Miestro, she was able to easily create and launch a fundraising campaign that exceeded her expectations."
                            componentClassName='title-3'
                            secondSize={sizes.xlarge}
                            secondType={types.medium160}
                            secondTailwindClassNames='flex items-start mt-[auto] flex-col gap-6 pb-[102px] pl-6'
                            fontSwash={true}
                        />
                    </AnimationOnScroll>
                </div>
            </div>
        </div>
    )
};

export default AboutCustomers;