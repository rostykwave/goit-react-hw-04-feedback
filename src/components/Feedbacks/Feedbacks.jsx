import { useState } from 'react';
import { FeedbackOptions } from './Options/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedbacks = key => {
    setFeedbacks(state => ({ ...state, [key]: state[key] + 1 }));
  };

  const { good, neutral, bad } = feedbacks;
  const total = good + neutral + bad;
  const positivePercentage = parseFloat(((good / total) * 100).toFixed(1));

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
            onGood: () => handleFeedbacks('good'),
            onNeutral: () => handleFeedbacks('neutral'),
            onBad: () => handleFeedbacks('bad'),
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
