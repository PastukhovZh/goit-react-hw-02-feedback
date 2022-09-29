import { Messege } from "./Notification.styled"
import PropTypes from "prop-types"

export const Notification = ({ message }) => {
    return (
        <Messege>{message}</Messege>
    )
}

Messege.propTypes = {
    message: PropTypes.string,
}