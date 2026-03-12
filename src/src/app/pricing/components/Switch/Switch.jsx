import styles from './Switch.module.scss';

export const SIZES = {
    big: 'big',
    medium: 'medium',
    small: 'small',
 };

const Switch = ({
    label = false, value, onChange, disabled = false, size = 'big', positionText,
 }) => {
    return (
        <div className={`${styles.switch} switch__${SIZES[size]}`}>
            {positionText === 'left' && label && (
                <div className='switch_text'>{label}</div>
            )}
            <label
                className={styles.toggle}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onChange(!value);
                }}
            >
            <input
               className={`${styles['toggle-checkbox']} ${disabled ? `toggle_checkbox_${value}` : ''}`}
               disabled={disabled}
               type='checkbox'
               checked={value}
               onChange={(e) => {
                  onChange(e.target.checked);
               }}
            />
            <div className={`toggle-switch${value ? '  toggle-switch-active ' : ''}${disabled ? ` toggle_disabled_${value}` : ''}`} />
         </label>
         {positionText === 'right' && label && (
            <div className={styles.switch_text}>{label}</div>
         )}
        </div>
    )
};

export default Switch;