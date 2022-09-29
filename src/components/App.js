import { Component } from "react";
import { FeedbackMark } from "./FeedbackMark/FeedbackMark";
import { FeedbackStatistics } from "./FeedbackStatistics/FeedbackStatistics";

export class App extends Component {
      state = {
  good: 0,
  neutral: 0,
  bad: 0,
  }
  countTotalFeedback=()=>{
    const { good, neutral, bad } = this.state
    return good + neutral + bad
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
        return (
            <div>
            <FeedbackMark
              options={options}
              onLeaveFeedback={this.onLeaveFeedback } />
                <FeedbackStatistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback()}
                    positiveFeedback={this.countPositiveFeedbackPercentage()}
                />
            </div>
        )
        
    }
};
