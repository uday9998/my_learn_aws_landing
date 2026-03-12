'use client'

import Link from 'next/link';

import { NewText } from '@/app/components/elements/TextWithIcon/TextWithIcon';
import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';
import BaseButton from '@/app/components/elements/Button/Button';
import { THEMES as themes } from '@/app/components/elements/Button/ButtonProps';

import styles from './card.module.scss';

const Cards = ({
    image,
    title,
    subtitle,
    buttonText,
    navigateLink
}) => {
    const handleOpenSupportChat = () => {
        // document.querySelector('body>#ap3-talk-widget-ui').shadowRoot.querySelector('#__root').querySelector('div').click();
        // document.querySelector('#mevo_chatbox_opener').click();
        if (window.OpenWidget) {
            window.OpenWidget.call('maximize');
        }
    };

    return (
        <div className={styles.card__wrapper}>
            <div className={styles.image__wrapper}>
                <img style={{ borderRadius: '10px' }} src={image} alt={title} />
            </div>
            <div className={styles.texts__wrapper}>
                <NewText
                    inner={title}
                    size={sizes.xlarge}
                    type={types.newBold800}
                />
                <div className={styles.subtitle__wrapper}>
                    <NewText
                        inner={subtitle}
                        size={sizes.xlarge}
                        type={types.regular}
                    />
                </div>
            </div>
            <div className={styles.button__wrapper}>
                {
                    navigateLink ? <Link href={navigateLink} target='_blank'>
                        <button  onClick={buttonText === 'Contact Support' && handleOpenSupportChat} className={styles.btn_flex} >{buttonText} <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 0.469673C11.7626 0.176778 12.2374 0.176776 12.5303 0.469667L19.5303 7.4696C19.671 7.61025 19.75 7.80102 19.75 7.99993C19.75 8.19884 19.671 8.38961 19.5303 8.53026L12.5303 15.5303C12.2374 15.8232 11.7626 15.8232 11.4697 15.5303C11.1768 15.2374 11.1768 14.7625 11.4697 14.4696L17.1893 8.74993H1C0.585786 8.74993 0.25 8.41414 0.25 7.99993C0.25 7.58572 0.585786 7.24993 1 7.24993H17.1893L11.4697 1.53033C11.1768 1.23744 11.1768 0.762567 11.4697 0.469673Z" fill="#36796F" />
                        </svg>
                        </button>
                        {/* <BaseButton
                        theme={themes.secondary}
                        text={buttonText}
                        iconName='NewArrowRight'
                        isIconLeft={true}
                        style={{
                            width: '100%',
                            minHeight: '56px',
                            padding: '0',
                            border: 'none',
                            width: 'fit-content',
                            fontWeight: '800',
                            fontSize: '16px'
                        }}

                        onClick={buttonText === 'Contact Support' && handleOpenSupportChat}
                    /> */}
                    </Link> :

                    <button  onClick={handleOpenSupportChat} className={styles.btn_flex} >{buttonText} <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 0.469673C11.7626 0.176778 12.2374 0.176776 12.5303 0.469667L19.5303 7.4696C19.671 7.61025 19.75 7.80102 19.75 7.99993C19.75 8.19884 19.671 8.38961 19.5303 8.53026L12.5303 15.5303C12.2374 15.8232 11.7626 15.8232 11.4697 15.5303C11.1768 15.2374 11.1768 14.7625 11.4697 14.4696L17.1893 8.74993H1C0.585786 8.74993 0.25 8.41414 0.25 7.99993C0.25 7.58572 0.585786 7.24993 1 7.24993H17.1893L11.4697 1.53033C11.1768 1.23744 11.1768 0.762567 11.4697 0.469673Z" fill="#36796F" />
                        </svg>
                        </button>
                }

            </div>
        </div>
    )
};

export default Cards;
