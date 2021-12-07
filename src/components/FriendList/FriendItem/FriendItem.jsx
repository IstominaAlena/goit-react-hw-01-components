import PropTypes from 'prop-types';
import styles from './FriendItem.module.css';

const FriendItem = ({ avatar, name, isOnline }) => {
  const status = isOnline ? styles.online : styles.offline;
  return (
    <li className={styles.item}>
      <span className={status} />
      <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendItem;

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
