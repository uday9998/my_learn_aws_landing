import Link from 'next/link';

import Text from '@/app/components/elements/TextWithIcon/TextWithIcon';
import BaseButton from '@/app/components/elements/Button/Button';

import { TYPES as types, SIZES as size } from '@/app/components/elements/TextWithIcon/TextWithIconProps';
import { THEMES as theme } from '@/app/components/elements/Button/ButtonProps';
import membershipImage from '@/app/assets/images/pricing/membership__image.png';

import styles from './MembershipPlatform.module.scss';

const MembershipPlatform = () => {
    return (
        <div className={styles.mambershipPlatform__wrapper}>
            <div className={styles.memberhsip__container}>
                <div className={styles.left__section}>
                    <div className={styles.texts__wrapper}>
                        <div className={styles.top__text__wrapper}> 
                            <Text 
                                inner='Your Complete'
                                className='gradient__text'
                                size={size.size_40}
                                type={types.new_bold}
                            />
                            <Text 
                                inner='Membership Platform'
                                type={types.new_bold}
                                size={size.size_52}
                                style={{
                                    color: '#131F1E'
                                }}
                            />
                        </div>
                        <Text
                            inner='Launching your personalized membership and community platform has never been easier. Start today with our risk-free trial—no credit card required.'
                            size={size.xlarge}
                            style={{
                                color: '#444C4B'
                            }}
                            className={styles.footer__text}
                        />
                    </div>
                        <Link href='/signup'>
                            <BaseButton 
                                text='Start Free Trial'
                                theme={theme.pricing__style__second}
                            />
                        </Link>
                </div>
                <div className={styles.right__section}>
                    <img src={membershipImage.src} alt="membership platform" />
                </div>
            </div>
        </div>
    )
};

export default MembershipPlatform;