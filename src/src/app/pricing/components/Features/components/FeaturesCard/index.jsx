import { featuresCardsData } from '@/app/constants';

import Text from '@/app/components/elements/TextWithIcon/TextWithIcon';
import { TYPES as types, SIZES as sizes } from "@/app/components/elements/TextWithIcon/TextWithIconProps";
import IconNew from '@/app/components/elements/IconNew/IconNew';

import styles from './FeaturesCard.module.scss';


const FeaturesCard = () => {
    return (
        <div className={styles.cards__wrapper}>
            {
                featuresCardsData.map(data => {
                    return <div className={styles.card}>
                        <IconNew name={data.iconName} />
                        <div className={styles.texts__wrapper}>
                            <Text 
                                inner={data.title}
                                size={sizes.xlarge}
                            />
                            <Text 
                                inner={data.subtitle}
                            />
                        </div>
                    </div>
                })
            }
        </div>
    )
};

export default FeaturesCard;