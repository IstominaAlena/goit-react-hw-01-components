import PropTypes from 'prop-types';
// import styles from './TransactionHistory.module.css';
import TableHead from './TableHead';
import TableBody from './TableBody';

const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <TableHead />
      <TableBody data={items} />
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
