import PropTypes from 'prop-types';

import StatsList from './StatsList';

import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <StatsList items={stats} />
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.node.isRequired,
};
