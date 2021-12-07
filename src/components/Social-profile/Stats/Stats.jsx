import PropTypes from 'prop-types';

import styles from './Stats.module.css';

const Stats = ({ stats }) => {
  return (
    <ul className={styles.stats}>
      <li className={styles.item}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{stats.followers}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{stats.views}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{stats.likes}</span>
      </li>
    </ul>
  );
};

export default Stats;

Stats.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired
  ),
};
