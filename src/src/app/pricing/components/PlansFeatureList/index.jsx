'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import Text from '@/app/components/elements/TextWithIcon/TextWithIcon';
import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';
import { THEMES as themes } from '@/app/components/elements/Button/ButtonProps';
import Switch from '../Switch/Switch';
import PlanCard from './components/PlanCard';
import { featuresLimits } from '@/app/constants';
import LimitsTable from './components/LimitsTable';
import BaseButton from '@/app/components/elements/Button/Button';
import { setStoragePriceId } from '@/app/helpers/priceType';
import { typeNames } from '@/app/constants';
import { getPriceData } from '@/app/utils/pricing';

import styles from './PlansFeatureList.module.scss';

const PlansFeatureList = ({
    handleChangeShowList,
    type,
    handleChangeType,
    currency
}) => {
    const router = useRouter();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    const handleChangeSwitch = () => {
        if(type === 'monthly') {
            handleChangeType('annual')
        } else {
            handleChangeType('monthly')
        }
    }

    const handleNavigateToSignup = (pricing) => {
        if(pricing) {
            setStoragePriceId(pricing, type)
        }

        router.push('/signup');
    }

    return (
        <div className={styles.plans__feature__wrapper}>
            <div className={styles.features__top}>
            <div className={styles.select__wrapper}>
                        <div className={styles.top__titles__wrapper}>
                            <Text 
                                inner='Monthly'
                                style={{
                                    color: type === 'monthly' ? '#fff' : '#43464c'
                                }}
                                size={sizes.large}
                                type={types.bold400}
                            />
                            <Switch 
                                value={type === 'annual'}
                                onChange={handleChangeSwitch}
                            />
                            <Text 
                                inner='Annual'
                                style={{
                                    color: type === 'annual' ? '#fff' : '#43464c'
                                }}
                                size={sizes.large}
                                type={types.bold400}
                            />
                        </div>
                        <div>
                            <Text 
                                inner='Save 20% With Annual'
                                style={{
                                    color: '#fff'
                                }}
                                size={sizes.small}
                                type={types.bold400}
                            />
                        </div>
                </div>
                <div className={styles.right__section__wrapper}>
                    {/* <div className={styles.starter}>
                        <Text 
                            inner={!isMobile ? 'Starter Plan' : 'Starter'}
                            size={sizes.size_28}
                            type={types.regular_500}
                        />
                        <Text 
                            inner='Free'
                            size={sizes.xlarge}
                            type={types.bold800}
                            style={{
                                color: '#2585EB'
                            }}
                            fontFamily='lato'
                        />
                        <BaseButton 
                            text='Get Started Now'
                            style={{
                                width: '100%'
                            }}
                            theme={themes.pricing__style}
                            onClick={handleNavigateToSignup}
                        />

                        {
                            !isMobile && <PlanCard 
                                text='Great For Beginners'
                                color='#3060BD'
                                widgetBackgroundColor='#F1F6FF'
                            />
                        }
                    </div> */}
                    <div className={styles.essential}>
                        <Text 
                            inner={!isMobile ? 'Essential Plan' : 'Essential'}
                            size={sizes.size_28}
                            type={types.regular_500}
                        />
                        <div className={styles.price__section__wrapper}>
                            <Text 
                                inner={getPriceData('essential', currency, type)}
                                size={sizes.xlarge}
                                type={types.bold800}
                                style={{
                                    color: '#AC890A'
                                }}
                                fontFamily='lato'
                            />
                            <Text 
                                inner='/mo'
                                size={sizes.small}
                                type={types.bold800}
                                style={{
                                    color: '#727978'
                                }}
                                fontFamily='lato'
                            />
                        </div>
                        <BaseButton 
                            text='Free Trial For 14 Days'
                            style={{
                                width: '100%'
                            }}
                            theme={themes.pricing__style}
                            onClick={() => {
                                handleNavigateToSignup(type === 'annual' ? {annualName: typeNames.essentialAnnual} : {monthlyName: typeNames.essentialMonthly})
                            }}
                        />
                        {
                            !isMobile && <PlanCard 
                                text='Great For Intermediate'
                                color='#AC890A'
                                widgetBackgroundColor='#fff6d7'
                            />
                        }
                    </div>
                    <div className={styles.surge}>
                        <Text 
                            inner={!isMobile ? 'Surge Plan' : 'Surge'}
                            size={sizes.size_28}
                            type={types.regular_500}
                        />
                        <div className={styles.price__section__wrapper}>
                            <Text 
                                inner={getPriceData('surge', currency, type)}
                                size={sizes.xlarge}
                                type={types.bold800}
                                style={{
                                    color: '#379552'
                                }}
                                fontFamily='lato'
                            />
                            <Text 
                                inner='/mo'
                                size={sizes.small}
                                type={types.bold800}
                                style={{
                                    color: '#727978'
                                }}
                                fontFamily='lato'
                            />
                        </div>
                        <BaseButton 
                            text='Free Trial For 14 Days'
                            style={{
                                width: '100%'
                            }}
                            theme={themes.pricing__style}
                            onClick={() => {
                                handleNavigateToSignup(type === 'annual' ? {annualName: typeNames.surgeAnnual} : {monthlyName: typeNames.surgeMonthly})
                            }}
                        />
                        {
                            !isMobile && <PlanCard 
                                text='For The More Advanced'
                                color='#379552'
                                widgetBackgroundColor='#defbe6'
                            />
                        }
                    </div>
                    <div className={styles.surge}>
                        <Text 
                            inner={!isMobile ? 'Infinite Plan' : 'Infinite'}
                            size={sizes.size_28}
                            type={types.regular_500}
                        />
                        <div className={styles.price__section__wrapper}>
                            <Text 
                                inner={getPriceData('infinite', currency, type)}
                                size={sizes.xlarge}
                                type={types.bold800}
                                style={{
                                    color: '#DA47FF'
                                }}
                                fontFamily='lato'
                            />
                            <Text 
                                inner='/mo'
                                size={sizes.small}
                                type={types.bold800}
                                style={{
                                    color: '#727978'
                                }}
                                fontFamily='lato'
                            />
                        </div>
                        <BaseButton 
                            text='Free Trial For 14 Days'
                            style={{
                                width: '100%'
                            }}
                            theme={themes.pricing__style}
                            onClick={() => {
                                handleNavigateToSignup(type === 'annual' ? {annualName: typeNames.infiniteAnnual} : {monthlyName: typeNames.infiniteMonthly})
                            }}
                        />
                        {/* {
                            !isMobile &&<PlanCard 
                                text='Recommended For Pro'
                                color='#DA47FF'
                                widgetBackgroundColor='#f9e1ff'
                            /> 
                        } */}
                    </div>
                </div>
            </div>
            <div className={styles.features__list}>
                {
                    featuresLimits.map(limit => {
                        return <LimitsTable limitData={limit} />
                    })
                }
            </div> 
            <BaseButton 
                text='Hide Full Feature List'
                theme={themes.pricing__style}
                onClick={handleChangeShowList}
            />    
        </div>
    )
};

export default PlansFeatureList;