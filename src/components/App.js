import { Component } from "react";
import { FeedbackMark } from "./Feedback/FeedbackMark/FeedbackMark";
import { FeedbackStatistics } from "./Feedback/FeedbackStatistics/FeedbackStatistics";

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
  
render() {

        return (
            <div>
                <FeedbackMark/>
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
