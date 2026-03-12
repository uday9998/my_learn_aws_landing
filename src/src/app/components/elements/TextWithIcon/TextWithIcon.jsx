import classNames from "classnames";
import PropTypes from "prop-types";
import IconNew from "../IconNew/IconNew";
import { Roboto, Lexend_Deca, Lato, Bevan, Berkshire_Swash } from "next/font/google";


const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700', '900'] });
const lexendDeca = Lexend_Deca({subsets: ['latin'], weight: ['800']});
const lato = Lato({subsets: ['latin'], weight: ['400', '900']});
const bevan = Bevan({subsets: ['latin'], weight: ['400']});
const bershireSwash = Berkshire_Swash({ subsets: ['latin'], weight: '400' });

import styles from './TextWithIcon.module.scss';

export const TextWithIcon = ({
    className,
    inner,
    type,
    size,
    style,
    onClick,
    tooltip,
    iconName,
    isWithoutIcon,
    iconGap,
    generalStyles,
    iconProps,
    isIconRight,
    iconColor,
    classNameActive
}) => {
    return (
        <div
            role="presentation"
            onClick={onClick}
            style={{ gap: iconGap || 11, ...generalStyles }}
            className={classNames(classNameActive, styles["text-with-icon"])}
        >
            {!isWithoutIcon &&
                !isIconRight && (
                    <IconNew
                        color={iconColor}
                        name={iconName || "LeftArrowL"}
                        {...iconProps}
                    />
                )}
            <span
                style={style}
                className={classNames(
                    roboto.className,
                    className,
                    "textBasic",
                    "dont-break-out",
                    styles[`textBasic_type_${type}`],
                    styles[`textBasic_size_${size}`],
                    // "flex-1"
                )}
            >
                {inner}
            </span>
            {!isWithoutIcon &&
                isIconRight && (
                    <IconNew name={iconName || "LeftArrowL"} {...iconProps} />
                )}
        </div>
    );
};

export const NewTextWithIcon = ({
    className,
    inner,
    type,
    size,
    style,
    tooltip,
    iconName,
    isWithoutIcon,
    iconGap,
    generalStyles,
    iconProps,
    isIconRight,
    iconColor,
    classNameActive
}) => {
    return (
        <div
            role="presentation"
            style={{ gap: iconGap || 11, ...generalStyles }}
            className={classNames(classNameActive, styles["text-with-icon"])}
        >
            {!isWithoutIcon &&
                !isIconRight && (
                    <IconNew
                        color={iconColor}
                        name={iconName || "LeftArrowL"}
                        {...iconProps}
                    />
                )}
            <span
                style={style}
                className={classNames(
                    roboto.className,
                    className,
                    "textBasic",
                    "dont-break-out",
                    styles[`textBasic_type_${type}`],
                    styles[`textBasic_size_${size}`],
                    "flex-1"
                )}
            >
                {inner}
            </span>
            {!isWithoutIcon &&
                isIconRight && (
                    <IconNew name={iconName || "LeftArrowL"} {...iconProps} />
                )}
        </div>
    );
}

export const TextWithTooltip = ({
    className,
    inner,
    type,
    size,
    style,
    onClick,
    tooltip,
    iconName,
    iconGap,
    generalStyles,
    isIconRigth
}) => {
    return (
        <div
            role="presentation"
            onClick={onClick}
            className="text-with-icon"
            style={{ gap: iconGap || 11, ...generalStyles }}
        >
            <span
                style={style}
                className={classNames(
                    roboto.className,
                    className,
                    "textBasic",
                    "dont-break-out",
                    {
                        [`textBasic_type_${type}`]: type,
                        [`textBasic_size_${size}`]: size
                    }
                )}
            >
                {inner}
            </span>
        </div>
    );
};

const Text = ({
    className,
    inner,
    type,
    size,
    style,
    onClick,
    tooltip,
    miniText,
    isTitle,
    isSubtitle,
    fontBevan,
    fontSwash,
    fontFamily
}) => {
    return (
        <>
           {!isTitle && !isSubtitle &&  <span
                style={style}
                role="presentation"
                
                className={classNames(
                    styles.fontFamily && !bevan ? lexendDeca.className : fontBevan ?  bevan.className : fontSwash ? bershireSwash.className : fontFamily === 'lato' ? lato.className : roboto.className,
                    styles[className],
                    styles["textBasic"],
                    styles["dont-break-out"],
                    styles[`textBasic_type_${type}`],
                    styles[`textBasic_size_${size}`],
                    className,
                )}
            >
                {Array.isArray(inner)
                    ? inner.map((child, index) => {
                        if (typeof child === "string") return child;
                        return React.cloneElement(child, {
                            key: index.toString()
                        });
                    })
                    : inner}
                {!!`${miniText}` && (
                    <span className={styles["mini-text"]}>{miniText}</span>
                )}
            </span>}
            {isTitle &&  <h1
                style={style}
                role="presentation"
                onClick={onClick}
                className={classNames(
                    fontFamily && fontFamily === 'lato' ? lato.className : style?.fontFamily ? lexendDeca.className : roboto.className,
                    styles[className],
                    styles["textBasic"],
                    styles["dont-break-out"],
                    styles[`textBasic_type_${type}`],
                    styles[`textBasic_size_${size}`],
                )}
            >
                {Array.isArray(inner)
                    ? inner.map((child, index) => {
                        if (typeof child === "string") return child;
                        return React.cloneElement(child, {
                            key: index.toString()
                        });
                    })
                    : inner}
                {!!`${miniText}` && (
                    <span className={styles["mini-text"]}>{miniText}</span>
                )}
                <span style={{display: 'none'}}>online course</span>
            </h1>}
            {isSubtitle &&  <h2
                style={style}
                role="presentation"
                onClick={onClick}
                className={classNames(
                    fontFamily && fontFamily === 'lato' ? lato.className : roboto.className,
                    styles[className],
                    styles["textBasic"],
                    styles["dont-break-out"],
                    styles[`textBasic_type_${type}`],
                    styles[`textBasic_size_${size}`]
                )}
            >
                {Array.isArray(inner)
                    ? inner.map((child, index) => {
                        if (typeof child === "string") return child;
                        return React.cloneElement(child, {
                            key: index.toString()
                        });
                    })
                    : inner}
                {!!`${miniText}` && (
                    <span className={styles["mini-text"]}>{miniText}</span>
                )}
            </h2>}
        </>
    );
};

export const TextDocument = ({
    className,
    inner,
    type,
    size,
    style,
    onClick,
    tooltip,
    miniText
}) => {
    return (
        <>
            <span
                style={style}
                role="presentation"
                onClick={onClick}
                className={classNames(
                    className,
                    "textBasic",
                    "dont-break-out",
                    {
                        [`textBasic_type_${type}`]: type,
                        [`textBasic_size_${size}`]: size
                    }
                )}
            >
                <div dangerouslySetInnerHTML={{ __html: inner }}></div>
                {!!`${miniText}` && (
                    <span className="mini-text">{miniText}</span>
                )}
            </span>
        </>
    );
};

export const TextColumn = ({ texts, alignItems, Component, lato, ...props }) => {
    return (
        <div
            className="text__column"
            style={{ alignItems: alignItems || "center" }}
        >
            {texts.map((e, index) => {
                if(lato) {
                    return <NewText lato={true} key={index} {...props} inner={e} />
                }
                return (
                    <>
                        {
                            Component ? <Component {...props} inner={e} key={index} /> : <Text key={index} {...props} inner={e} />
                        }
                    </>
                );
            })}
        </div>
    );
};

export const NewText = ({
    inner,
    size,
    type,
    style,
    lexend,
    lato,
    className
}) => {
    return (
        <span 
            style={style}
            className={classNames(
                lato ? lato.className : lexend ? lexendDeca.className : roboto.className,
                className,
                styles["textBasic"],
                styles["dont-break-out"],
                styles[`textBasic_type_${type}`],
                styles[`textBasic_size_${size}`],
            )}        
        >{inner}</span>
    )
};

export const StaticText = ({
    inner,
    style,
    className,
    size,
    type,
}) => {
    return (
        <h2
            style={style}
            className={classNames(
                style?.fontFamily ? lato.className : roboto.className,
                className,
                styles["textBasic"],
                styles["dont-break-out"],
                styles[`textBasic_type_${type}`],
                styles[`textBasic_size_${size}`],
            )} 
        >
            {inner}
        </h2>
    )
}

NewText.propTypes = {
    inner: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.string,
}

TextColumn.propTypes = {
    texts: PropTypes.array,
    alignItems: PropTypes.string,
    lato: PropTypes.bool
};

NewTextWithIcon.propTypes = {
    size: PropTypes.string,
    type: PropTypes.string,
    inner: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.number,
        PropTypes.node
    ]),
    style: PropTypes.any,
    className: PropTypes.string,
    tooltip: PropTypes.string,
    iconName: PropTypes.string,
    isWithoutIcon: PropTypes.bool,
    iconColor: PropTypes.string,
    iconGap: PropTypes.number,
    generalStyles: PropTypes.any,
    isIconRight: PropTypes.bool,
    iconProps: PropTypes.object,
    classNameActive: PropTypes.string
};

TextWithIcon.propTypes = {
    size: PropTypes.string,
    type: PropTypes.string,
    inner: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.number,
        PropTypes.node
    ]),
    style: PropTypes.any,
    className: PropTypes.string,
    onClick: PropTypes.func,
    tooltip: PropTypes.string,
    iconName: PropTypes.string,
    isWithoutIcon: PropTypes.bool,
    iconColor: PropTypes.string,
    iconGap: PropTypes.number,
    generalStyles: PropTypes.any,
    isIconRight: PropTypes.bool,
    iconProps: PropTypes.object,
    classNameActive: PropTypes.string
};

TextWithIcon.defaultProps = {
    type: "medium",
    size: "large",
    inner: "Text",
    onClick: () => { },
    isIconRight: false,
    iconProps: {}
};

Text.propTypes = {
    size: PropTypes.string,
    type: PropTypes.string,
    miniText: PropTypes.any,
    inner: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.number,
        PropTypes.node
    ]),
    style: PropTypes.any,
    className: PropTypes.string,
    onClick: PropTypes.func,
    tooltip: PropTypes.string,
    isTitle: PropTypes.bool,
    fontBevan: PropTypes.bool,
    fontSwash: PropTypes.bool
};

StaticText.propTypes = {
    inner: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.string,
}

TextDocument.propTypes = {
    size: PropTypes.string,
    type: PropTypes.string,
    miniText: PropTypes.any,
    inner: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.number,
        PropTypes.node
    ]),
    style: PropTypes.any,
    className: PropTypes.string,
    onClick: PropTypes.func,
    tooltip: PropTypes.string
}

Text.defaultProps = {
    type: "medium",
    size: "large",
    inner: "Text",
    onClick: () => { }
};

TextWithTooltip.propTypes = {
    size: PropTypes.string,
    type: PropTypes.string,
    inner: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.number,
        PropTypes.node
    ]),
    style: PropTypes.any,
    className: PropTypes.string,
    onClick: PropTypes.func,
    tooltip: PropTypes.string,
    iconName: PropTypes.string,
    iconGap: PropTypes.number,
    generalStyles: PropTypes.any,
    isIconRigth: PropTypes.bool
};

export default Text;
