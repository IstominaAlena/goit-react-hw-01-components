import PropTypes from 'prop-types';
// import styles from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className="section">
      <div className="container">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
