import PropTypes from 'prop-types';
import "./SwitchButton.css";

const SwitchButton = (props) => {
  const { dest, isDisabled, onClick } = props;

  const buttonType = `reviews__pagination-button ${
    dest === "prev"
      ? "reviews__pagination-button_dest_prev"
      : "reviews__pagination-button_dest_next"
  }`;

  const disabledStyle = isDisabled ? 'reviews__pagination-button_disabled' : '';

  return (
    <button
      type="button"
      className={`${buttonType} ${disabledStyle}`}
      onClick={onClick}
      disabled={isDisabled}
    ></button>
  );
};

SwitchButton.propTypes = {
  dest: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func
};

export default SwitchButton;
