import React, { useState } from "react";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    console.log(countTotalFeedback());
    const percentage = (good * 100) / countTotalFeedback();
    return Math.round(percentage);
  };

  const handleFeedback = (option) => {
    if (option === "good") {
      setGood(good + 1);
    }
    if (option === "neutral") {
      setNeutral(neutral + 1);
    }
    if (option === "bad") {
      setBad(bad + 1);
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onClick={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {good || neutral || bad ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
