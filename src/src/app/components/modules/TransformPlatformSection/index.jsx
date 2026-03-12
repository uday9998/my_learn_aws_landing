'use client'

import { NewText } from '../../elements/TextWithIcon/TextWithIcon';
import { TYPES as types, SIZES as sizes } from '../../elements/TextWithIcon/TextWithIconProps';
import BaseButton from '../../elements/Button/Button';
import { THEMES as themes } from '../../elements/Button/ButtonProps';

import styles from './transformPlatform.module.scss';
import './styles.css';

const TransformPlatformSection = () => {
    const handleOpenSupportChat = () => {
        // document.querySelector('body>#ap3-talk-widget-ui').shadowRoot.querySelector('#__root').querySelector('div').click();
        // document.querySelector('#mevo_chatbox_opener').click();
        if (window.OpenWidget) {
            window.OpenWidget.call('maximize');
         }
    };

    return (
        <div className={styles.transform__platform__wrapper}>
            <div className={styles.container}>
                <div>
                    <img src="https://miestro-production.s3.us-west-2.amazonaws.com/landing/miestro-landing-nextjs/phone__image.png" alt="phone image" />
                </div>
                <div className={styles.texts__wrapper}>
                    <div className={styles.title__wrapper}>
                        <NewText
                            className='gradient__text'
                            inner='Transform Your Platform:'
                            size={sizes.size_40}
                            type={types.newBold800}
                        />
                    </div>
                    <div className={styles.subtitle__wrapper}>
                        <div className={styles.subtitle__text__wrapper}>
                            <p>Drive Engagement With <span>Custom Mobile</span> & <span>TV Apps</span> Powered By Miestro</p>
                        </div>
                        <div className={styles.last__text__wrapper}>
                            <NewText
                                inner='Unlock premium capabilities to expand your reach and impact.'
                                size={sizes.xlarge}
                                style={{
                                    color: '#444C4B',
                                    fontWeight: '400'
                                }}
                            />
                        </div>
                        <div className={styles.button__wrapper}>
                        <div className="relative inline-block rounded-md">
                        {/* Gradient border background */}
                        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-[#006838] to-[#96CF24]"></div>
                        
                        <BaseButton
                            text='Contact Us'
                            theme={themes.new_secondary}
                            style={{
                            minHeight: '56px',
                            width: '132px',
                            margin: '2px',
                            position: 'relative',
                            zIndex: 1,
                            borderRadius: 'inherit',
                            background: '#fff',
                            border: 'none'
                            }}
                            className='btn-width'
                            onClick={handleOpenSupportChat}
                        />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TransformPlatformSection;
