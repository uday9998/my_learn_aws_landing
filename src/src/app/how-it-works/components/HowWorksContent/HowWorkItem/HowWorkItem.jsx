import cx from 'classnames';

import { TYPES as types, SIZES as sizes } from '@/app/components/elements/TextWithIcon/TextWithIconProps';
import PropTypes from 'prop-types';
import Text from '@/app/components/elements/TextWithIcon/TextWithIcon';

import styles from './HowWorkItem.module.scss';

const HowWorkItem = ({ number, title, image, description, marginTop }) => {
    return (
        <div
            className={ cx(styles.how__work__wrapper, {
                [`flex ${styles.how__work__item} items-start w-full`]: true,
            }) }
        >
            <div
                className={ cx(styles.inner__wrapper, {
                    "flex gap-6 ": true,
                }) }
                style={{
                    marginTop: marginTop ? marginTop : '',
                }}
            >
                <div
                    style={{ backgroundColor: '#24554E' }}
                    className="flex w-[56px] flex-0 h-[56px] rounded-[12px] items-center justify-center">
                    <Text
                        inner={number}
                        type={types.mediumSmall}
                        size={sizes.size_40}
                        style={{ color: "#fff" }}
                    />
                </div>
                <div className={styles.title__text__wrapper}>
                    <Text
                        inner={title}
                        className='w-full how__work__item__title'
                        type={types.bold}
                        style={{ lineHeight: '130%' }}
                    />
                </div>
            </div>
            <div
                className={ cx(styles.footer__wrapper, {
                    "flex flex-col gap-4": true,
                }) }
            >
                <img src={image} className='w-full mt-[-10%]' alt="online course platform" />
                <Text
                    inner={description}
                    type={types.medium}
                    size={sizes.xxlarge}
                    style={{ color: '#D0D2D2' }}
                />
            </div>
        </div>
    )
}

HowWorkItem.propTypes = {
    number: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string
}

export default HowWorkItem
