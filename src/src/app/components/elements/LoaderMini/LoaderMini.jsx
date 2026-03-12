import PropTypes from 'prop-types';

import styles from './LoaderMini.module.scss';

const LoaderMini = ({ color }) => {
   const customStyles = {
      borderColor: `${ color } transparent transparent transparent`,
   };
   return (
      <div className={styles['lds-ring']}><div style={ customStyles } /><div style={ customStyles } /><div style={ customStyles } /><div style={ customStyles } /></div>
   );
};

LoaderMini.propTypes = {
   color: PropTypes.string,
};

export default LoaderMini;
