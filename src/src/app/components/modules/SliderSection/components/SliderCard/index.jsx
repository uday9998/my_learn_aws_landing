import { NewText } from '@/app/components/elements/TextWithIcon/TextWithIcon';
import IconNew from '@/app/components/elements/IconNew/IconNew';
import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';

import styles from './sliderCard.module.scss';

const SliderCard = ({
    avatarImage,
    firstText,
    secondText,
    avatarName,
    avatarRole,
    starCount
}) => {
    return (
        <div className={styles.card__wrapper}>
            <div className={styles.first__icon__wrapper}>
                <IconNew name='SliderCardTitle' />
            </div>
            <div className={`${styles.texts__wrapper}`}>
                <NewText 
                    inner={firstText}
                    size={sizes.medium}
                    style={{
                        color: '#444C4B',
                        fontWeight: '400'
                    }}
                />
                {
                    secondText && <NewText 
                                    inner={secondText}
                                    size={sizes.medium}
                                    style={{
                                        color: '#444C4B',
                                        fontWeight: '400',
                                    }}
                                />
                }
            </div>
            <div className={styles.avatar__info__wrapper}>
                <div>
                    <img src={avatarImage} alt="avatar" />
                </div>
                <div>
                    <div>
                        <NewText
                            inner={avatarName}
                            size={sizes.xxlarge}
                            type={types.newBold800}
                        />
                    </div>
                    <div className={styles.avatar__info}>
                        <NewText 
                            inner={avatarRole}
                            size={sizes.large}
                            style={{
                                color: '#241249'
                            }}
                        />
                        <IconNew name='Dot' />
                        <IconNew name='SliderCardStar' />
                        <NewText
                            inner={starCount}
                            size={sizes.large}
                            style={{
                                color: '#5B5074'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SliderCard;