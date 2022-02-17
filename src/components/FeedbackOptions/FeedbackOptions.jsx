import React from 'react';
import PropTypes from "prop-types";
import { FeedbackOptionButtons, FeedbackButton } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onClick }) => {
    return (
            <FeedbackOptionButtons>
                {options.map((option) => (
                    <li key={option}>
                        <FeedbackButton
                            onClick={() => {onClick(option)}}
                            type="button"
                            name={option}
                        >
                            {option}
                        </FeedbackButton>
                    </li>
                ))}
            </FeedbackOptionButtons>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;