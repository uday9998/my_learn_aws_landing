import { useEffect } from "react";
import PropTypes from "prop-types";
import IconNew from "../IconNew/IconNew";

import styles from './Modal.module.scss';

const Modal = ({ children, closeModal, isHaveCloseIcon, className }) => {
    useEffect(() => {
        const body = document.querySelector('body')
        body.style.overflow = 'hidden'
        return () => {
            body.style.overflow = 'auto'
        }
    }, [])
    return (
        <div className={styles.modal}>
            <div className={styles.modal__background} onClick={() => closeModal()} />
            <div className={`${styles.modal__content} ${ className }`}>
                <div className="relative h-full">
                    {children}
                    {isHaveCloseIcon && (
                        <div
                            className="absolute modal__close"
                            onClick={() => closeModal()}
                        >
                            <IconNew name="CloseModal" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

Modal.defaultProps = {
    className: ''
}

Modal.propTypes = {
    children: PropTypes.any,
    isHaveCloseIcon: PropTypes.bool,
    closeModal: PropTypes.func,
    className: PropTypes.string
};

export default Modal;
