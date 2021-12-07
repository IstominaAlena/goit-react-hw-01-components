import PropTypes from 'prop-types';
import styles from './TableBody.module.css';

import TableItem from '../TableItem';

const TableBody = ({ data }) => {
  const elements = data.map(item => <TableItem key={item.id} {...item} />);

  return <tbody className={styles.body}>{elements}</tbody>;
};

export default TableBody;
TableBody.propTypes = {
  data: PropTypes.array.isRequired,
};
