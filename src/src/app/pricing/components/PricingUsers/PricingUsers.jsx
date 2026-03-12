import { TYPES as types } from '@/app/components/elements/TextWithIcon/TextWithIconProps';
import cx from 'classnames';

import Text, { TextColumn } from '@/app/components/elements/TextWithIcon/TextWithIcon';

import usersImage from '@/app/assets/images/pricing/usersImage.png'

import styles from './PricingUsers.module.scss';

const PricingUsers = () => {
    return (
        <div
            className={ cx(styles.pricing__users__wrapper, {
                "flex w-full px-10 justify-center pt-[120px] pricing_users_wrapper": true,
            }) }
        >
            <div className={`${styles.texts__wrapper} flex flex-col pricing__users__image relative mr-[-210px]`}>
                <Text
                    inner='Miestro Customers'
                    type={types.bold800}
                    style={{ fontSize: '32px', lineHeight: '140%', color: '#727978' }}
                />
                <div className={styles.column__wrapper}>
                    <TextColumn
                        texts={['Our Clients Are', 'So Happy To Use', 'Our Platform']}
                        type={types.bold900}
                        alignItems='start'
                        className='pricing__users__image__text'
                        style={{
                            whiteSpace: 'nowrap',
                            lineHeight: '120%',
                            alignItems: 'flex-start',
                            textAlign: 'start'
                        }}
                    />
                </div>
            </div>
            <div className='pricing_image_wrapper'>
                <img src={usersImage.src} alt="online course platform" />
            </div>
        </div>
    )
};

export default PricingUsers;