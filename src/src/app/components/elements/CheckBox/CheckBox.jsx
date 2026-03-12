import { TYPES as textTypes, SIZES as textSizes } from '../TextWithIcon/TextWithIconProps';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Text from '../TextWithIcon/TextWithIcon';
import Icon from '../IconNew/IconNew';

import styles from './CheckBox.module.scss';

export const LabelPositions = {
   left: 'left',
   right: 'right',
};

const CheckBox = ({
   name, checked, onChange, label, disabled, labelPosition, iconType, textProps,
}) => {
   const isChecked = !!checked;

   return (
      <div
         onClick={disabled ? () => { } : () => onChange(name, !isChecked)}
         role='presentation'
         className={
            classNames(
               styles['checkBox'],
               {
                  [styles.checkBox__disabled]: disabled,
                  [styles.checkBox__isChecked__disabled]: isChecked && disabled,
                  [styles.checkBox__isChecked]: isChecked && !disabled,
                  [styles.checkBox__isNotChecked]: !isChecked && !disabled,
                  [styles.checkBox__left]: !!label && labelPosition === 'left',
               })
         }
      >
         <div className={styles.checkBox__square}>
            {isChecked && (iconType === 'icon' ? <Icon name='Checkbox' /> : (<div className='checkBox__square__icon' />))}
         </div>
         {!!label && (
            <div className={styles.checkBox__label}>
               <Text
                  size={textSizes.medium}
                  type={textTypes.regular}
                  inner={label}
                  {...textProps}
               />
            </div>
         )}
      </div>
   );
};

export default CheckBox;

CheckBox.propTypes = {
   name: PropTypes.string,
   checked: PropTypes.any,
   onChange: PropTypes.func,
   label: PropTypes.any,
   iconType: PropTypes.string,
   disabled: PropTypes.bool,
   textProps: PropTypes.object,
   labelPosition: PropTypes.string,
};

CheckBox.defaultProps = {
   checked: false,
   label: '',
   onChange: () => { },
   labelPosition: 'right',
   iconType: 'icon',
};
