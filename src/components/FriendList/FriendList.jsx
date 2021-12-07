import PropTypes from 'prop-types';
// import styles from './FriendList.module.css';
import FriendItem from './FriendItem';

const FriendList = ({ friends }) => {
  const friendElems = friends.map(friend => <FriendItem key={friend.id} {...friend} />);
  return <ul className="friend-list">{friendElems}</ul>;
};

export default FriendList;
FriendList.propTypes = {
  friends: PropTypes.node.isRequired,
};
