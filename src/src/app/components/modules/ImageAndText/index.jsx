import { NewText } from '../../elements/TextWithIcon/TextWithIcon'; 
import { TYPES as types } from '../../elements/TextWithIcon/TextWithIconProps';

import styles from './VideoSection.module.scss';

const ImageAndText = ({
    imageName,
    title,
    subtitle,
    footerText,
    marginBottom,
    column
}) => {
    const COLUMN__IMAGES = [
        'https://miestro-production.s3.us-west-2.amazonaws.com/landing/miestro-landing-nextjs/column-images/group__1.png',
        'https://miestro-production.s3.us-west-2.amazonaws.com/landing/miestro-landing-nextjs/column-images/group__2.png',
        'https://miestro-production.s3.us-west-2.amazonaws.com/landing/miestro-landing-nextjs/column-images/group__3.png',
        'https://miestro-production.s3.us-west-2.amazonaws.com/landing/miestro-landing-nextjs/column-images/group__4.png'
    ];

    return (
        <div className={styles.membership__wrapper}>
                <div className={styles.membership__section__wrapper}>
                <div className={styles.text__wrapper}>
                    <div className={styles.top__texts} style={{
                        marginBottom: marginBottom ? marginBottom : 0
                    }}>
                        <NewText 
                            inner={title}
                            type={types.bold800}
                            className="gradient__text"
                            style={{
                                fontFamily: true,
                                fontSize: '40px'
                            }}
                        />
                        <NewText
                            inner={subtitle}
                            type={types.bold900}
                            style={{
                                color: "#131F1E",
                                maxWidth: '1200px',
                                marginBottom: '24px',
                                fontSize: '52px'
                            }}
                            className="text-center z-10"
                        />
                    </div>
                    {
                        footerText && <div className={styles.last__text__wrapper}>
                            <NewText
                                inner={footerText}
                                style={{
                                    color: "#444C4B",
                                    margin: "0px auto",
                                    fontSize: '20px'
                                }}
                                className="text-center"
                            />
                        </div>
                    }
                </div>
                <div className={column ? styles.column__element : ''}>
                    <img src={imageName.src} alt="membership image" />
                </div>
                {
                    column && <div className={styles.column__images}>
                        {
                            COLUMN__IMAGES.map(image => {
                                return (
                                    <img src={image} alt="grow image" />
                                )
                            })
                        }
                    </div>
                }
            </div>
        </div>
    )
};

export default ImageAndText;