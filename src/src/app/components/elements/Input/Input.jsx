import { Roboto } from "next/font/google";
import PropTypes from "prop-types";
import classNames from "classnames";

import IconNew from "../IconNew/IconNew";

import styles from './Input.module.scss';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700', '900'] });

const Input = ({
    required,
    register,
    labelName,
    name,
    inputType,
    placeholder,
    isPassword,
    handleChangeInputType,
    err,
    onBlur,
    onChange,
    customError,
    isLoading
}) => {
    return (
        <div className="flex flex-col gap-[8px] relative">
            <label className={styles.label}>{labelName}</label>
            <input
             {...register(name || labelName, { 
                required: required ? `${labelName} is required` : false
             })} 
            placeholder={placeholder} 
            className={classNames(styles.input, roboto.className)} 
            type={inputType} 
            id={name || labelName} 
            onBlur={onBlur}
            style={{
                border: (err || customError) && '1px solid red'
            }} />
            {
                isPassword && <div onClick={handleChangeInputType} className="cursor-pointer" ><IconNew style={{
                    position: 'absolute',
                    top: '2.75rem',
                    right: '1.5rem',
                    height: '20px'
                }} name={ inputType === 'password' ? 'UnShown' : 'Show'} /> </div>
            }
            {
                isLoading && (
                    <div className="absolute top-12 right-4">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900"></div>
                    </div>
                )
            }
            {
                customError && (
                    <span className={`text-red-500 text-sm ${roboto.className}`}>
                        {customError}
                    </span>
                )
            }
        </div>
    )
};

Input.propTypes = {
    required: PropTypes.bool,
    register: PropTypes.func,
    labelName: PropTypes.string,
    name: PropTypes.string,
    inputType: PropTypes.string,
    placeholder: PropTypes.string,
    isPassword: PropTypes.bool,
    handleChangeInputType: PropTypes.func,
    err: PropTypes.bool,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    customError: PropTypes.string,
    isLoading: PropTypes.bool
}

export default Input;