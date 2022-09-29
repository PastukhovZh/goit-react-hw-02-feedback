import { Title } from "./Section.styled"
import PropTypes from "prop-types"

export const Section = ({ title, children }) => {
    return (
        <section>
            <Title>{title}</Title>
                {children}
        </section>
    )
}

Title.propTypes = {
    title: PropTypes.string,
}
