'use client';

import { useState, useEffect } from 'react';

import { TYPES as types } from '@/app/components/elements/TextWithIcon/TextWithIconProps';

import IconNew from '@/app/components/elements/IconNew/IconNew';
import Text from '@/app/components/elements/TextWithIcon/TextWithIcon';
import { TextColumn } from '@/app/components/elements/TextWithIcon/TextWithIcon';
import FAQItem from '../FAQItem/FAQItem';

import styles from './FAQ.module.scss';

const FAQ = ({ items, background, isMobile }) => {
    return (
        <div className="flex py-[120px]" style={{ backgroundColor: background || '#F4F7F7' }}>
            <div className={`${styles.faq__pricing__container}`}>
                <div className="w-full flex flex-col gap-8 relative px-4" >
                    <div className={`${styles.title__wrapper} flex flex-col gap-2 items-center z-[3]`}>
                        <Text
                            inner='Frequently Asked Questions'
                            type={types.bold800}
                            style={{ fontSize: isMobile ? '24px' : '32px', lineHeight: '140%', color: '#727978' }}
                        />
                        <div className={styles.texts__wrapper}>
                            <div className={styles.mobile__wrapper}>
                                <Text
                                    inner='Learn About the Most Common Questions'
                                    type={types.bold900}
                                    style={{ fontSize: '32px' }}
                                    className='text-center'
                                />
                            </div>
                            <div className={styles.desktop__wrapper}>
                                <TextColumn
                                    texts={['Learn About the Most', 'Common Questions']}
                                    type={types.bold900}
                                    style={{ fontSize: '64px' }}
                                    lato={true}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-[-20px] left-[-60px] z-[1]">
                        <IconNew name='PricingStarsM' />
                    </div>
                    <div className="flex flex-col gap-6 z-[3]">
                        {items.map((e, key) => {
                            return (
                                <FAQItem
                                    title={e.title}
                                    description={e.description}
                                    key={key}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ;