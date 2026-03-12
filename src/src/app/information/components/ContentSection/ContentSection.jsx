import PropTypes from "prop-types";

import { TYPES as types, SIZES as sizes } from "@/app/components/elements/TextWithIcon/TextWithIconProps";

import Text, { NewText } from "@/app/components/elements/TextWithIcon/TextWithIcon";
import ContentItem from "../ContentItem/ContentItem";

import styles from './ContentSection.module.scss';

const ContentSection = ({ title, items }) => {
    return (
        <div className={`${styles.content__wrapper} flex flex-col gap-4`}>
            {title &&
                !!title.length && (
                    <NewText
                        inner={title}
                        type={types.bold900}
                        className={styles.content__section__title}
                        style={{fontFamily: true}}
                    />
                )}
            {items.map((e, key) => {
                return <ContentItem key={key} {...e} />;
            })}
        </div>
    );
};

ContentSection.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array
};

export default ContentSection;
