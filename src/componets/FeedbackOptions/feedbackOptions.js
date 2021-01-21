import PropTypes from 'prop-types';
import s from 'componets/FeedbackOptions/feedbackOptions.module.css';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return ( 
    <>
    {options.map(option =>(<button className={s.button} type="button" key={option} name={option} onClick={onLeaveFeedback}>{option}</button>))}
    </>          
     )
}
FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func, 
}