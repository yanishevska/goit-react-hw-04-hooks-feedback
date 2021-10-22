import PropTypes from "prop-types";
import s from "./Statistics.module.css";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        <li className={s.item}>
          <p className={s.countText}>Good:</p>
          {good}
        </li>

        <li className={s.item}>
          <p className={s.countText}> Neutral:</p>
          {neutral}
        </li>

        <li className={s.item}>
          <p className={s.countText}>Bad:</p>
          {bad}
        </li>

        <li className={s.item}>
          <p className={s.countText}>Total:</p>
          {total}
        </li>

        <li className={s.item}>
          <p className={s.countText}>Positive feedback:</p>
          {positivePercentage}%
        </li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
