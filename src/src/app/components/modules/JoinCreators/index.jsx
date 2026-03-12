import Link from 'next/link';

import { NewText } from '../../elements/TextWithIcon/TextWithIcon';
import { TYPES as types, SIZES as sizes } from '../../elements/TextWithIcon/TextWithIconProps';
import BaseButton from '../../elements/Button/Button';
import { THEMES as themes } from '../../elements/Button/ButtonProps';

import joinCreators from '@/app/assets/images/dashboard/join__creators__image.png';
import messageIcon from '@/app/assets/images/dashboard/message__icon.png';

import styles from './joinCreators.module.scss';

const JoinCreators = () => {
    return (
        <div className={styles.join__creators__wrapper}>
            <div className={styles.container}>
                <div className={styles.top__wrapper}>
                    <div className={styles.content__wrapper}>
                        <div className={styles.title__wrapper}>
                            <NewText 
                                inner='Join 1000s Of Creators From Around The World!'
                                size={sizes.size_40}
                                type={types.newBold800}
                            />
                        </div>
                        <div className={styles.subtitle__wrapper}>
                            <NewText 
                                inner="We're trusted by a diverse global community of creators to deliver immersive visual experiences for their valued audiences."
                                size={sizes.xlarge}
                                style={{
                                    fontWeight: '400',
                                    color: '#444C4B',
                                    lineheight: '154%'
                                }}
                            />
                        </div>
                        <div className={styles.button__wrapper}>
                            <Link href='/signup'>
                                <BaseButton 
                                    text='Start Free Trial'
                                    theme={themes.new_primary}
                                    style={{
                                        minHeight: '56px',
                                        fontSize: '16px',
                                        padding: '21px 24px 19px 24px'
                                    }}
                                />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img src={joinCreators.src} alt="join creators" />
                    </div>
                </div>
                <div className={styles.footer__text__wrapper}>
                    <NewText 
                        inner='Discover What Our Community Says ...'
                        size={sizes.size_36}
                        type={types.newBold800}
                        style={{
                            color: '#36796F'
                        }}
                    />
                    <img id={styles.message__icon} src={messageIcon.src} alt="message icon" />
                </div>
            </div>
        </div>
    )
};

export default JoinCreators;