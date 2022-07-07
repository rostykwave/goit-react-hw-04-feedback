import { useEffect, useState } from 'react';
import { FeedbackOptions } from './Options/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export function Feedbacks() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  const handleGood = () => {
    setGood(state => state + 1);
  };
  const handleNeutral = () => {
    setNeutral(state => state + 1);
  };
  const handleBad = () => {
    setBad(state => state + 1);
  };

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  useEffect(() => {
    setPositivePercentage(parseFloat(((good / total) * 100).toFixed(1)));
  }, [total, good]);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{
            onGood: 'Good',
            onNeutral: 'Neutral',
            onBad: 'Bad',
          }}
          onLeaveFeedback={{
            onGood: handleGood,
            onNeutral: handleNeutral,
            onBad: handleBad,
          }}
        />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
