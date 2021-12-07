import PropTypes from 'prop-types';

import Description from '../Description';
import Stats from '../Stats';

import styles from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <Description name={username} tag={tag} location={location} avatar={avatar} />
      <Stats stats={stats} />
    </div>
  );
};
export default Profile;

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.node.isRequired,
};
