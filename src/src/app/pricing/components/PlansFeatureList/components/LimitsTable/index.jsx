'use client'

import Text from "@/app/components/elements/TextWithIcon/TextWithIcon";
import { TYPES as types, SIZES as sizes } from "@/app/components/elements/TextWithIcon/TextWithIconProps";
import { getTableMobileText } from "@/app/helpers/priceType";

import styles from './LimitsTable.module.scss';
import { useEffect, useState } from "react";

const LimitsTable = ({
    limitData
}) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024)
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    const getComponent = (value) => {
        return <div className={styles.limit__wrapper}>
            <div className={`${styles.limit__title__wrapper} ${value.isListItem ? styles.list__item : value.boldTitle ? styles.bold__title : ''}`}>
                <Text size={sizes.large} inner={value.title} />
            </div>
            <div className={styles.right__limits__wrapper}>
                {
                    value.values.map(item => {
                        return <div>
                            {
                                item.includes('#') ? <div style={{
                                    background: item
                                }} className={styles.color__icon} /> : <Text size={sizes.large} type={types.bold400} inner={isMobile ? getTableMobileText(value.title, item) : item}/>
                            }
                        </div>
                    })
                }
            </div>
        </div>
    };

    return (
        <div className={styles.limit__wrapper}>
            <div className={limitData.isTopSection ? `${styles.limit__title} ${styles.top__section}` : styles.limit__title}>
                <Text 
                    inner={limitData.title.toUpperCase()}
                    size={sizes.xlarge}
                />
            </div>
            <div className={`${styles.options__wrapper} ${limitData.isLastSection ? styles.lastSection : ''}`}>
                {
                    limitData.options.map(option => {
                        return getComponent(option)
                    })
                }
            </div>
        </div>
    )
};

export default LimitsTable;