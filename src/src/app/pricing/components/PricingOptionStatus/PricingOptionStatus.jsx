import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';

import Text from '@/app/components/elements/TextWithIcon/TextWithIcon';
import IconNew from '@/app/components/elements/IconNew/IconNew';

const colors = {
    'essential': '#2585EB',
    'surge': '#9747FF',
    'infinity': '#DA47FF'
}

const PricingOptionStatus = ({ type, status }) => {
    if (status === 'not-contain') {
        return (
            <div className='rounded w-[20px] flex items-center justify-center h-[20px]' style={{ backgroundColor: '#D0D2D2' }}>
                <IconNew name='PricingNotContain' />
            </div>

        )
    }
    if (status === 'include') {
        return (
            <div className='rounded w-[20px] flex items-center justify-center h-[20px]' style={{ backgroundColor: colors[type] }}>
                <IconNew name='PricingCheckM' />
            </div>
        )
    }
    return (
        <Text
            inner={status}
            type={types.regular153}
            size={sizes.large}
            style={{ color: '#24554E' }}
            className='whitespace-nowrap'
        />
    )
};

export default PricingOptionStatus;