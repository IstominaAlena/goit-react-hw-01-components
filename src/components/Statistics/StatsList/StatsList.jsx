import PropTypes from 'prop-types';
import StatsItem from '../StatsItem';
import styles from './StatsList.module.css';

const StatsList = ({ items }) => {
  const itemElems = items.map(item => <StatsItem key={item.id} {...item} />);

  return <ul className={styles.list}>{itemElems}</ul>;
};
export default StatsList;

StatsList.propTypes = {
  items: PropTypes.node.isRequired,
};
