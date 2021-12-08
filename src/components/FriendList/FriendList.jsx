import PropTypes from 'prop-types';
import FriendItem from './FriendItem';

import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  const friendElems = friends.map(friend => <FriendItem key={friend.id} {...friend} />);
  return <ul className={styles.list}>{friendElems}</ul>;
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ).isRequired,
};
