import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';
import Text from '@/app/components/elements/TextWithIcon/TextWithIcon';

import styles from './PlanCard.module.scss';

const PlanCard = ({
    text,
    color,
    widgetBackgroundColor
}) => {
    return (
        <div style={{
            background: widgetBackgroundColor
        }} className={styles.widget}>
            <Text 
                inner={text}
                style={{
                    color
                }}
                size={sizes.small}
                type={types.regular_500}
            />
        </div>
    )
};

export default PlanCard;