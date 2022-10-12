import { StatisticsItem } from "./Statistics.styled"
import PropTypes from "prop-types"

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
    
    return (
        <div>
            <ul>
                <StatisticsItem>Good: {good}</StatisticsItem>
                <StatisticsItem>Neutral: {neutral} </StatisticsItem>
                <StatisticsItem>Bad: {bad} </StatisticsItem>
                <StatisticsItem>Total: {total}</StatisticsItem>
                <StatisticsItem>Positive feedback: {positiveFeedback}% </StatisticsItem>
            </ul>
        </div>
    ) 
} 

StatisticsItem.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positiveFeedback:PropTypes.number,
}