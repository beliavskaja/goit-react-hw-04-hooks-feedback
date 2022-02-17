import React from 'react';
import PropTypes from "prop-types";
import { StatisticList, StatisticItem } from './Statistics.styled'

const Statistics = ({ good, neutral, bad, total, percentage }) => {
    return (
        <StatisticList>
            <StatisticItem>Good: {good}</StatisticItem>
            <StatisticItem>Neutral: {neutral}</StatisticItem>
            <StatisticItem>Bad: {bad}</StatisticItem>
            <StatisticItem>Total: {total}</StatisticItem>
            <StatisticItem>PositivePercentage: {percentage}%</StatisticItem>
        </StatisticList>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default Statistics;