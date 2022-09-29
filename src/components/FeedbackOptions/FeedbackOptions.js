import { Button } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {options.map(option => {
                return (
                <Button
                    key={option}
                    onClick={() => { onLeaveFeedback(option) }} type="button">{option}
                </Button>
                )
            })}
        </div>
            )
}