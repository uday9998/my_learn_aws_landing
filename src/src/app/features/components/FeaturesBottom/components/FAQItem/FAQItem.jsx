import { useRouter } from 'next/navigation';

import { useState } from 'react';

import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';

import IconNew from '@/app/components/elements/IconNew/IconNew';
import Text from '@/app/components/elements/TextWithIcon/TextWithIcon';

import styles from './FAQItem.module.scss';

const FAQItem = ({ title, description, linkNavigate }) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const handleNavigateToSignUp = (e) => {
        router.push('/signup')
    }

    const handleOpenDescription = (e) => {
        if(e.target.innerText === 'here') {
            handleNavigateToSignUp();
        } else if(e.target.innerText?.includes('API')) {
            window.open('https://support.miestro.com/331951-API-Documentation', '_blank')
        } else {
            setIsOpen(prevState => !prevState)
        }
    }

    const getOpenedText = () => {
        if(isOpen && linkNavigate) {
            return (
                <div className={styles.link__text} style={{
                    display: linkNavigate.includes('API') ? 'inline' : 'flex'
                }}>
                    <span onClick={handleNavigateToSignUp} style={{
                        marginRight: linkNavigate.includes('API') ? '5px' : ''
                    }}>{description}</span>
                    <span>{linkNavigate}</span>
                </div>
            )
        } else if(isOpen) {
            return (
                <div className={styles.open__text__wrapper}>
                    <Text
                        inner={description}
                        type={types.regularDefault}
                        size={sizes.small}
                        style={{ color: '#727978' }}
                    />
                </div>
            )
        }
    }

    return (
        <div
            className="border__gradient rounded-[20px] cursor-pointer"
            role='presentation'
            onClick={handleOpenDescription}
        >
            <div className={`faq__item flex flex-col gap-2 p-6`}>
                <div className="flex items-center justify-between">
                    <div className={styles.question__wrapper}>
                        <Text
                            inner={title}
                            type={types.medium153}
                            size={sizes.large}
                        />
                    </div>
                    <div className="flex faq__item__close cursor-pointer"
                        role='presentation'
                        style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                        <IconNew name='PricingFaqItemPlusM'/>
                    </div>
                </div>
                {getOpenedText()}
            </div>
        </div>
    )
}

export default FAQItem
