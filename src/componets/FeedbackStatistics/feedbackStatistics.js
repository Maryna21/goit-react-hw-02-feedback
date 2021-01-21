import React, { Component } from 'react';
import Statistics from 'componets/Statistics/statistics';
import FeedbackOptions from 'componets/FeedbackOptions/feedbackOptions';
import Section from 'componets/Section/section';

class FeedbackStatistics extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    onLeaveFeedback =  e => {
        const feedback = e.currentTarget.name;
        this.setState((prevState => ({
          [feedback]: Number(prevState[feedback] + 1)}
     )))
    
     }

    countTotalFeedback = ()=> {
        return Object.values(this.state).reduce((acc,value)=> acc + value, 0)
     };

    countPositiveFeedbackPercentage = () =>{
        const {good=0}=this.state;
        const total = this.countTotalFeedback();
        return total ? Math.round((good/total)*100):0;
     };

    render() { 
        const state = this.state;
         return (
        <>
           <Section title={'Please leave feedback'} >
            <FeedbackOptions options={['good','neutral','bad']} onLeaveFeedback={this.onLeaveFeedback}/>
            </Section>
            <Section title={''} >
            <Statistics good={state.good} neutral={state.neutral} bad={state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} /> 
            </Section>
        </>)
    }
}
export default FeedbackStatistics;