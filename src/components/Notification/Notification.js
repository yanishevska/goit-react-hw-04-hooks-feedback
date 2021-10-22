import s from "./Notification.module.css";
import PropTypes from "prop-types";

function Notification({ message }) {
  return (
    <div className={s.notificationContainer}>
      <p className={s.text}>{message}</p>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
