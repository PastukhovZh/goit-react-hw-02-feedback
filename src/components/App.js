import { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import { Wrap } from "./App.styled";


export class App extends Component {
      state = {
  good: 0,
  neutral: 0,
  bad: 0,
  }
  countTotalFeedback=()=>{
    const marks = Object.values(this.state)
    return marks. reduce((acc, mark)=> acc + mark, 0)

    // const { good, neutral, bad } = this.state
    // return good + neutral + bad
  }
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state
    return Math.round((good/ this.countTotalFeedback())*100)
  }


  onLeaveFeedback = newState => {
    this.setState(prevState => ({
      [newState]: prevState[newState] + 1,
    }));
  };
  
render() {
  const options = Object.keys(this.state);
  const { good, neutral, bad } = this.state;
  const total = this.countTotalFeedback();
  const positiveFeedback = this.countPositiveFeedbackPercentage()
  return (
      <Wrap>
        <Section title={`Please leave feedback`} >
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onLeaveFeedback} />
          
        </Section>
      <Section title={`Statistics`}>
        {total > 0
          ? <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={positiveFeedback}
          />
          : <Notification message={`There is no feedback!`}/>}
      </Section>
      </Wrap>
        )
    }
};