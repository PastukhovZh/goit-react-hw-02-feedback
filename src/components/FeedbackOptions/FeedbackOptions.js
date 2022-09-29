import PropTypes from "prop-types"
import { Button, Wrap } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Wrap>
            {options.map(option => {
                return (
                <Button
                    key={option}
                    onClick={() => { onLeaveFeedback(option) }} type="button">{option}
                </Button>
                )
            })}
        </Wrap>
            )
} 


Wrap.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            option:PropTypes.number.isRequired,
        }),
    ),
}