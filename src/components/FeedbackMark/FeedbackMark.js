export const FeedbackMark = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            <h1>Please leave feedback</h1>
            <ul>
                {options.map(option => {
                    return (
                    <button
                        key={option}
                        onClick={() => { onLeaveFeedback(option) }} type="button">{option}
                    </button>
                    )
                })}
            </ul>
        </div>
            )
}