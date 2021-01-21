import PropTypes from 'prop-types';
import Notification from 'componets/Notification/notification';
import s from 'componets/Statistics/statistics.module.css';
export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <>
        {total > 0 &&(
            <>
           <h3>Statistics</h3>
            <ul className={s.list}>
            <li className={s.item} >Good: {good}</li>
            <li className={s.item}>Neutral: {neutral}</li>
            <li className={s.item}>Bad: {bad}</li>
            <li className={s.item}>Total: {total}</li>
            <li className={s.item}>Positive Feedback: {positivePercentage}%</li>
        </ul>
        </>
        )} 
        {total === 0 && <Notification message="No feedback given"/> } 
        </>
    
    )
}
Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
    ]),
    positivePercentage:PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
    ]),
}