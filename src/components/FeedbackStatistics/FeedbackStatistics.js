export const FeedbackStatistics = ({ good, neutral, bad, total, positiveFeedback }) => {
    
    return (
        <div>
            <h1>Statistics</h1>
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral} </li>
                <li>Bad: {bad} </li>
                <li>Total: {total}</li>
                <li>Positive feedback: {positiveFeedback}% </li>
            </ul>
        </div>
    )
}