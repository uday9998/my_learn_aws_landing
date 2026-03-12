import BaseButton from '@/app/components/elements/Button/Button';
import Link from 'next/link';
import Text from '@/app/components/elements/TextWithIcon/TextWithIcon';
import { TYPES as types, SIZES as size } from '@/app/components/elements/TextWithIcon/TextWithIconProps';
import { THEMES as theme } from '@/app/components/elements/Button/ButtonProps';

import styles from './Creators.module.scss';

const Creators = () => {
    return (
        <div className={styles.creators__wrapper}>
            <div className={styles.texts__wrapper}>
                <Text 
                    inner='Creators & Businesses Choose Miestro'
                    className='gradient__text'
                    size={size.size_40}
                    type={types.new_bold}
                />
                <Text 
                    inner='Join thousands of creators, entrepreneurs, experts, YouTubers, and influencers who trust Miestro to elevate their content.'
                    size={size.size_52}
                    type={types.new_bold}
                    style={{
                        color: '#fff'
                    }}
                />
            </div>
            <Link href='/signup'>
                <BaseButton 
                    text='Start Free Trial'
                    theme={theme.pricing__style__second}
                />
            </Link>
        </div>
    )
};

export default Creators;