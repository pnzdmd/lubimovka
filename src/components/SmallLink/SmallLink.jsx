import PropTypes from 'prop-types';
import "./SmallLink.css";

const SmallLink = (props) => {
  const { children, url } = props;

  return (
    <a className="small-link" href={url}>
      {children}
    </a>
  );
};

SmallLink.propTypes = {
  children: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default SmallLink;
