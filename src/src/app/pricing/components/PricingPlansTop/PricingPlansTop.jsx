'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';
import { THEMES as themes } from '@/app/components/elements/Button/ButtonProps';
import cx from 'classnames';

import IconNew from '@/app/components/elements/IconNew/IconNew';
import Text from '@/app/components/elements/TextWithIcon/TextWithIcon';
import Switch from '../Switch/Switch';
import Button from '@/app/components/elements/Button/Button';

import styles from './PricingPlansTop.module.scss';

const plans = [
    {
        name: 'Essential',
        priceTextColor: '#2585EB',
        spanBackground: '#F1F6FF',
        spanTextColor: '#3060BD',
        text: 'Great For Beginners',
        price: (isAnnual) => isAnnual ? 55 : 69
    },
    {
        name: 'Surge',
        priceTextColor: '#9747FF',
        spanBackground: '#DFD5FB',
        spanTextColor: '#7E1CFF',
        text: 'For The More Advanced',
        price: (isAnnual) => isAnnual ? 95 : 119
    },
    {
        name: 'Infinite',
        priceTextColor: '#DA47FF',
        spanBackground: '#F9E1FF',
        spanTextColor: '#D220FF',
        text: 'Recommended For Pro',
        price: (isAnnual) => isAnnual ? 159 : 199
    },
    {
        name: 'Custom',
        priceTextColor: '#F77629', // You can choose any color
        spanBackground: '#FFF1E6',
        spanTextColor: '#F75C29',
        text: 'Enterprise Solution',
        price: () => 'Contact Us', // Custom price text
        isCustom: true
    }
]

const PricingPlansTop = () => {
    const [isSwitchedAnnual, setIsSwitchedAnnual] = useState(false);
    const router = useRouter();

    const tryForFree = (type) => {
        if (type === 'Custom') {
            window.location.href = "https://training.miestro.com/demo";
            return;
        }

        router.push("/signup");
        if (type === 'Essential' && !isSwitchedAnnual) {
            localStorage.setItem('plan_id', 'newmiestro-essential-plan-monthly')
        } else if (type === 'Essential' && isSwitchedAnnual) {
            localStorage.setItem('plan_id', 'newmiestro-essential-plan-yearly')
        } else if (type === 'Surge' && !isSwitchedAnnual) {
            localStorage.setItem('plan_id', 'newmiestro-surge-plan-monthly')
        } else if (type === 'Surge' && isSwitchedAnnual) {
            localStorage.setItem('plan_id', "newmiestro-surge-plan-yearly")
        } else if (type === 'Infinite' && !isSwitchedAnnual) {
            localStorage.setItem('plan_id', "newmiestro-infinite-plan-monthly")
        } else if (type === 'Infinite' && isSwitchedAnnual) {
            localStorage.setItem('plan_id', "newmiestro-infinite-plan-yearly")
        }
    }

    return (
        <div className={`flex ${styles.pricing__top__items} items-center gap-6`}>
            <div className={`${styles.pricing__plans__switch} flex flex-col gap-4`}>
                <div className="pricing__plans__switch__background">
                    <IconNew name='PricingSwitchM' />
                </div>
                <div className="flex items-center gap-4">
                    <Text
                        inner='Monthly'
                        type={types.regular148}
                        size={sizes.large}
                        style={{ color: isSwitchedAnnual ? ' rgba(255, 255, 255, 0.2)' : '#fff' }}
                    />
                    <Switch
                        value={isSwitchedAnnual}
                        onChange={() => setIsSwitchedAnnual(!isSwitchedAnnual)}
                    />
                    <Text
                        inner='Annual'
                        type={types.regular148}
                        size={sizes.large}
                        style={{ color: !isSwitchedAnnual ? ' rgba(255, 255, 255, 0.2)' : '#fff' }}
                    />
                </div>
                <Text
                    inner='Save 20% With Annual'
                    type={types.regularDefault}
                    size={sizes.small}
                    style={{ color: "#fff" }}
                />
            </div>
            {plans.map((e, key) => {
                return (
                    <div
                        className={cx(styles.wrapper, {
                            "flex flex-col items-center w-full": true,
                        })}
                        key={key}
                    >
                        <div className="relative flex items-center flex-col">
                            <Text
                                inner={e.name}
                                type={types.mediumSmall}
                                size={sizes.size_28}
                                className='!text-[#3060BD]'
                            />
                            <div style={{ backgroundColor: e.spanBackground, transform: 'rotate(7deg)' }}
                                className={`absolute top-[-20px] right-[-100px] py-[5px] px-2 rounded ${styles.plan_badge}`}>
                                <Text
                                    inner={e.text}
                                    type={types.medium150}
                                    size={sizes.small}
                                    style={{ color: e.spanTextColor, whiteSpace: 'nowrap' }}
                                />
                            </div>
                        </div>
                        <div className="flex items-center">
                            {!e.isCustom ? (
                                <>
                                    <Text
                                        inner={`$${e.price(isSwitchedAnnual)}`}
                                        type={types.bold800}
                                        size={sizes.xlarge}
                                        style={{ lineHeight: '24px', color: e.priceTextColor }}
                                    />
                                    <Text
                                        inner='/mo'
                                        type={types.bold800}
                                        size={sizes.small}
                                        style={{ lineHeight: '17px', color: '#727978' }}
                                    />
                                </>
                            ) : (
                                <Text
                                    inner={e.price()}
                                    type={types.bold800}
                                    size={sizes.xlarge}
                                    style={{ lineHeight: '24px', color: e.priceTextColor }}
                                />
                            )}
                        </div>
                        <Button
                            theme={themes.secondary}
                            onClick={() => tryForFree(e.name)}
                            text={e.isCustom ? 'Talk to a Real Human' : 'Free Trial For 14 Days'}
                            className={cx({
                                'pricing__free__tryal_button': true,
                            })}
                        />
                    </div>
                )
            })}
        </div>
    )
};

export default PricingPlansTop;