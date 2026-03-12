'use client';

import { useState, useEffect } from "react";

import { TYPES as types } from "@/app/components/elements/TextWithIcon/TextWithIconProps";
import FAQItem from "../FAQItem/FAQItem";
import Text from "@/app/components/elements/TextWithIcon/TextWithIcon";
import { TextColumn } from "@/app/components/elements/TextWithIcon/TextWithIcon";
import IconNew from "@/app/components/elements/IconNew/IconNew";

import cx from 'classnames';

import styles from './FAQPricing.module.scss';

const FAQPricing = () => {
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 1024);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
    }

    useEffect(() => {
        if(typeof window !== 'undefined') {
            handleResize();
            window.addEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div 
            className={ cx(styles.faq__pricing__wrapper, {
                "flex pt-[120px]": true,
            }) } 
            style={{ backgroundColor: '#F4F7F7' }}
        >
            <div className={`faq__pricing__container`}>
                <div className="w-full flex flex-col gap-8 relative" >
                    <div className="flex flex-col gap-2 items-center z-[3]">
                        <div className={styles.title__wrapper}>
                            <Text
                                inner='Frequently Asked Questions'
                                type={types.bold800}
                                style={{ fontSize: '32px', lineHeight: '140%', color: '#727978' }}
                            />
                        </div>
                        <div className={styles.mobile__text__wrapper}>
                            <Text
                                inner='Learn About the Most Common Questions'
                                type={types.bold900}
                                style={{ fontSize: '36px' }}
                                className='text-center'
                            />
                        </div>
                        <div className={styles.desktop__text__wrapper}>
                            <TextColumn
                                texts={['Learn About the Most', 'Common Questions']}
                                type={types.bold900}
                                style={{ fontSize: '64px' }}
                            />
                        </div>
                    </div>
                    <div className="absolute top-[-20px] left-[-60px] z-[1]">
                        <IconNew name='PricingStarsM' />
                    </div>
                    <div className="flex flex-col gap-6 z-[3]">
                        <FAQItem
                            title='Do you have a free trial to start out?'
                            description='Yes, you can start with a free trial by clicking'
                            linkNavigate='here'
                        />
                        <FAQItem
                            title='Does Miestro come with a guarantee?'
                            description='Yes. You can cancel your plan 14 days after your trial ends.'
                        />
                        <FAQItem
                            title='What if I need help?'
                            description='You can contact us for help at support@miestro.com. You can also click the chat icon found at the lower right portion of the screen.'
                        />
                        <FAQItem
                            title='Will Miestro work for my product?'
                            description='Miestro is an all-in-one creation platform that makes it easy for experts to create world-class content. Give it a try. Sign up for a free trial to explore your options.'
                        />
                        <FAQItem
                            title='Am I locked into a contract?'
                            description='No you’re not. You’re free to cancel at any time.'
                        />
                        <FAQItem
                            title="Does Miestro work with the tools that I'm already using?"
                            description='Yes. Depends on what tools you’re currently using. Miestro has API integrations.'
                            linkNavigate='Here’s a link to the API documentation to learn more'
                        />
                        {/* <FAQItem
                            title='Do I need my own merchant account?'
                            description='Yes, you need to set up your admin account to start creating classes.'
                        /> */}
                        <FAQItem
                            title='Will Miestro work with my website?'
                            description='Yes, On Miestro you can connect your custom website. You can learn more about custom domain setting here.'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQPricing