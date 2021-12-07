import PropTypes from 'prop-types';
import TableHead from './TableHead';
import TableBody from './TableBody';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.history}>
      <TableHead />
      <TableBody data={items} />
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
