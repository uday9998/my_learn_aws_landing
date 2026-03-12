import { TYPES as types } from '@/app/components/elements/TextWithIcon/TextWithIconProps';

import Text, { TextColumn } from '@/app/components/elements/TextWithIcon/TextWithIcon';

import styles from './PricingHelp.module.scss';

const PricingHelp = () => {
    return (
        <div 
            className={`flex flex-col pt-[100px] pb-[140px] gap-4 items-center justify-center ${styles.help__wrapper}`} 
        >
            <Text
                inner='Compare Plans'
                type={types.bold800}
                style={{ fontSize: '32px', lineHeight: '140%' }}
                className='gradient__text'
            />
            <div className={styles.mobile__wrapper}>
                <Text 
                    inner='Which Plan Better Fits Your Needs?'
                    type={types.bold900}
                    style={{ fontSize: '36px', color: "#fff" }}
                    className='text-center mx-4'
                />
            </div>
            <div className={styles.desktop__wrapper}>
                <TextColumn
                    texts={['Which Plan Better Fits', 'Your Needs?']}
                    type={types.bold900}
                    style={{ fontSize: '54px', color: "#fff" }}
                />
            </div>
        </div>
    )
};

export default PricingHelp;