import styles from './TableHead.module.css';

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th className={styles.name}>Type</th>
        <th className={styles.name}>Amount</th>
        <th className={styles.name}>Currency</th>
      </tr>
    </thead>
  );
};

export default TableHead;
