'use client';

import { Roboto } from "next/font/google";
import classNames from "classnames";
import PropTypes from "prop-types";
import IconNew, {NewIconNew} from "../IconNew/IconNew";
import LoaderMini from "../LoaderMini/LoaderMini";

const roboto = Roboto({subsets: ['latin'], weight: ['400', '500', '700', '900']});

import styles from './Button.module.scss';

const BaseButton = ({
    text,
    onClick,
    theme,
    size,
    disabled,
    style,
    type,
    id,
    isRotatedIcon,
    className,
    iconName,
    isOpen,
    isIconRight,
    isActiveFilterButton,
    secondIcon,
    isDropButton,
    isIconLeft,
    isHidenDiv,
    iconColor,
    loading
}) => {
    return (
        <button
            type={type}
            id={id}
            style={style}
            onClick={disabled ? () => { } : e => onClick(e)}
            className={classNames(roboto.className, className, styles["btnBasic"], styles[className], styles[`btnBasic_theme_${theme}`], styles[`btnBasic_theme_${theme}_${isActiveFilterButton ||
                ""}`], styles[`btnBasic_size_${size}`], styles[`btnBasic_theme_${theme}_${disabled}`]  )}
        >
            {!isIconRight &&
                !!secondIcon &&
                !isHidenDiv && (
                    <IconNew
                        color={iconColor}
                        isOpen={isOpen}
                        name={secondIcon}
                    />
                )}
            {isIconRight &&
                !!iconName &&
                isDropButton &&
                !isHidenDiv && (
                    <div
                        style={{ transform: isRotatedIcon ? "90deg" : "0deg" }}
                    >
                        <IconNew
                            color={iconColor}
                            isOpen={isOpen}
                            name={iconName}
                        />
                    </div>
                )}
            {isIconRight &&
                !!iconName &&
                !isDropButton &&
                !isHidenDiv && (
                    <div
                        style={{ transform: isRotatedIcon ? "90deg" : "0deg" }}
                    >
                        <IconNew
                            color={iconColor}
                            isOpen={isOpen}
                            name={iconName}
                        />
                    </div>
                )}
            {/* {isIconRight && !!iconName && <IconNew color={ iconColor } isOpen={ isOpen } name={ iconName } /> } */}
            {loading ? (
                <LoaderMini color="#fff" />
            ) : text}
            {!!iconName &&
                !isIconRight &&
                isDropButton && (
                    <div
                        style={{
                            transform: `rotate(${isRotatedIcon ? "180deg" : "0deg"
                                })`
                        }}
                    >
                        <IconNew isOpen={isOpen} name={iconName} />
                    </div>
                )}
            {!!iconName &&
                !!isIconLeft && (
                    <IconNew
                        color={iconColor}
                        isOpen={isOpen}
                        name={iconName}
                    />
                )}
            {isIconRight &&
                !!secondIcon && (
                    <IconNew
                        color={iconColor}
                        isOpen={isOpen}
                        name={secondIcon}
                    />
                )}
        </button>
    );
};

export const NewBaseButton = ({
    text,
    theme,
    size,
    disabled,
    style,
    type,
    id,
    isRotatedIcon,
    className,
    iconName,
    isOpen,
    isIconRight,
    isActiveFilterButton,
    secondIcon,
    isDropButton,
    isIconLeft,
    isHidenDiv,
    iconColor,
    loading
}) => {
    return (
        <button
            type={type}
            id={id}
            style={style}
            className={classNames(roboto.className, className, styles["btnBasic"], styles[className], styles[`btnBasic_theme_${theme}`], styles[`btnBasic_theme_${theme}_${isActiveFilterButton ||
                ""}`], styles[`btnBasic_size_${size}`], styles[`btnBasic_theme_${theme}_${disabled}`]  )}
        >
            {!isIconRight &&
                !!secondIcon &&
                !isHidenDiv && (
                    <NewIconNew
                        color={iconColor}
                        isOpen={isOpen}
                        name={secondIcon}
                    />
                )}
            {isIconRight &&
                !!iconName &&
                isDropButton &&
                !isHidenDiv && (
                    <div
                        style={{ transform: isRotatedIcon ? "90deg" : "0deg" }}
                    >
                        <NewIconNew
                            color={iconColor}
                            isOpen={isOpen}
                            name={iconName}
                        />
                    </div>
                )}
            {isIconRight &&
                !!iconName &&
                !isDropButton &&
                !isHidenDiv && (
                    <div
                        style={{ transform: isRotatedIcon ? "90deg" : "0deg" }}
                    >
                        <NewIconNew
                            color={iconColor}
                            isOpen={isOpen}
                            name={iconName}
                        />
                    </div>
                )}
            {/* {isIconRight && !!iconName && <IconNew color={ iconColor } isOpen={ isOpen } name={ iconName } /> } */}
            {loading ? (
                <LoaderMini color="#fff" />
            ) : text}
            {!!iconName &&
                !isIconRight &&
                isDropButton && (
                    <div
                        style={{
                            transform: `rotate(${isRotatedIcon ? "180deg" : "0deg"
                                })`
                        }}
                    >
                        <NewIconNew isOpen={isOpen} name={iconName} />
                    </div>
                )}
            {!!iconName &&
                !!isIconLeft && (
                    <NewIconNew
                        color={iconColor}
                        isOpen={isOpen}
                        name={iconName}
                    />
                )}
            {isIconRight &&
                !!secondIcon && (
                    <NewIconNew
                        color={iconColor}
                        isOpen={isOpen}
                        name={secondIcon}
                    />
                )}
        </button>
    );
};

BaseButton.propTypes = {
    disabled: PropTypes.any,
    size: PropTypes.string,
    isHidenDiv: PropTypes.bool,
    theme: PropTypes.string,
    isOpen: PropTypes.bool,
    text: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    isIconRight: PropTypes.bool,
    isRotatedIcon: PropTypes.bool,
    isDropButton: PropTypes.bool,
    isActiveFilterButton: PropTypes.bool,
    iconName: PropTypes.string,
    secondIcon: PropTypes.string,
    iconColor: PropTypes.string,
    isIconLeft: PropTypes.bool
};

NewBaseButton.propTypes = {
    disabled: PropTypes.any,
    size: PropTypes.string,
    isHidenDiv: PropTypes.bool,
    theme: PropTypes.string,
    isOpen: PropTypes.bool,
    text: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    isIconRight: PropTypes.bool,
    isRotatedIcon: PropTypes.bool,
    isDropButton: PropTypes.bool,
    isActiveFilterButton: PropTypes.bool,
    iconName: PropTypes.string,
    secondIcon: PropTypes.string,
    iconColor: PropTypes.string,
    isIconLeft: PropTypes.bool
};

NewBaseButton.defaultProps = {
    theme: "primary",
    size: "large",
    text: "primary",
    isIconRight: false,
    disabled: false,
    type: "button",
    id: "",
    className: "",
    isRotatedIcon: null,
    iconName: ""
};

BaseButton.defaultProps = {
    theme: "primary",
    size: "large",
    text: "primary",
    isIconRight: false,
    disabled: false,
    onClick: () => { },
    type: "button",
    id: "",
    className: "",
    isRotatedIcon: null,
    iconName: ""
};

export default BaseButton;
