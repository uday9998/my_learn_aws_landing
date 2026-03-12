import PropTypes from 'prop-types';

import Text from '@/app/components/elements/TextWithIcon/TextWithIcon';

import styles from './Customers.module.scss';

const Customers = ({
    scssClassName,
    tailwindClassNames,
    type,
    secondType,
    secondSize,
    size,
    style,
    secondStyle,
    backgroundImage,
    image,
    inner,
    secondInner,
    componentClassName,
    secondTailwindClassNames,
    fontBevan,
    fontSwash
}) => {
    return (
        <div className={`${styles[scssClassName]} ${tailwindClassNames}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
                <img src={image} alt="online course platform" />
            <div className={secondTailwindClassNames}>
                <div className={styles[componentClassName]}>
                    <Text
                        inner={inner}
                        type={type}
                        style={{...style}}
                        fontBevan={fontBevan}
                        fontSwash={fontSwash}
                    />
                </div>
                <div className={styles.card__text__wrapper}>
                    <Text
                        inner={secondInner}
                        type={secondType}
                        size={secondSize}
                        style={{...secondStyle}}
                    />
                </div>
            </div>
        </div>
    )
};

Customers.propTypes = {
    scssClassName: PropTypes.string,
    tailwindClassNames: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    style: PropTypes.object,
    backgroundImage: PropTypes.object,
    image: PropTypes.object,
    inner: PropTypes.string,
    secondInner: PropTypes.string,
    componentClassName: PropTypes.string,
    secondStyle: PropTypes.object,
    secondSize: PropTypes.string,
    secondType: PropTypes.string,
    secondTailwindClassNames: PropTypes.string,
    fontBevan: PropTypes.bool,
    fontSwash: PropTypes.bool
}

export default Customers;