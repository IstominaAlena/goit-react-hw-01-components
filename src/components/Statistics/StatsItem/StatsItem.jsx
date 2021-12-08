import PropTypes from 'prop-types';
import styles from './StatsItem.module.css';

const StatsItems = ({ label, percentage }) => {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatsItems;

StatsItems.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
