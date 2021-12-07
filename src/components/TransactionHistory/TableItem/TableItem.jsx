import PropTypes from 'prop-types';
import styles from './TableItem.module.css';

const TableItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td className={styles.item}>{type}</td>
      <td className={styles.item}>{amount}</td>
      <td className={styles.item}>{currency}</td>
    </tr>
  );
};

export default TableItem;

TableItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
