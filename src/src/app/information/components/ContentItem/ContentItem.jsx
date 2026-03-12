import { TYPES as types, SIZES as sizes } from "@/app/components/elements/TextWithIcon/TextWithIconProps";
import { Roboto } from "next/font/google";

import Text from "@/app/components/elements/TextWithIcon/TextWithIcon";

import styles from './ContentItem.module.scss';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700', '900'] });

const ContentItem = ({
    title,
    descriptions,
    contentListItems,
    contentSubDescriptions,
}) => {
    return (
        <div className="flex flex-col gap-4 content__item">
            {title && (
                <Text
                    inner={title}
                    type={types.bold900}
                    className={styles.content__item__title}
                    style={{fontFamily: true}}
                />
            )}
            {descriptions.map((e, key) => {
                return (
                    <span
                        className={`${styles.content__item__description} ${roboto.className}`}
                        key={key}
                    >
                        {e}
                    </span>
                );
            })}
            {contentListItems && (
                <ul className="flex flex-col gap-4 pl-10">
                    {contentListItems.map((e, key) => {
                        return (
                            <li key={key} className={`${styles.content__item__list__item} ${roboto.className}`}>
                                {e}
                            </li> 
                        );
                    })}
                </ul>
            )}
            {contentSubDescriptions &&
                contentSubDescriptions.map(e => {
                    return (
                        <div
                            key={e.title}
                            className="flex flex-col pl-10 gap-2"
                        >
                            <Text
                                inner={e.title}
                                type={types.bold800}
                                style={{
                                    lineHeight: "38px",
                                    fontSize: "32px",
                                    color: "#131F1E"
                                }}
                            />
                            <Text
                                inner={e.description}
                                type={types.regular160}
                                size={sizes.xlarge}
                                style={{ color: "#444C4B" }}
                            />
                        </div>
                    );
                })}
        </div>
    );
};

ContentItem.propTypes = {};

export default ContentItem;
