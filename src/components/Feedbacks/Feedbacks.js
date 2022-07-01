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

  const countTotalFeedback = () => {
    setTotal(good + neutral + bad);
  };

  const countPositiveFeedbackPercentage = () => {
    setPositivePercentage(parseFloat(((good / total) * 100).toFixed(1)));
  };

  useEffect(() => {
    countTotalFeedback();
  }, [good, neutral, bad]);

  useEffect(() => {
    countPositiveFeedbackPercentage();
  }, [total]);

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
// export class OLDFeedbacks extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     total: 0,
//     positivePercentage: 0,
//   };

//   handleGood = () => {
//     this.setState(state => ({
//       good: state.good + 1,
//     }));

//     this.countTotalFeedback();
//     this.countPositiveFeedbackPercentage();
//   };

//   handleNeutral = () => {
//     this.setState(state => ({
//       neutral: state.neutral + 1,
//     }));

//     this.countTotalFeedback();
//     this.countPositiveFeedbackPercentage();
//   };

//   handleBad = () => {
//     this.setState(state => ({
//       bad: state.bad + 1,
//     }));

//     this.countTotalFeedback();
//     this.countPositiveFeedbackPercentage();
//   };

//   countTotalFeedback = () => {
//     this.setState(state => ({
//       total: state.good + state.neutral + state.bad,
//     }));
//   };

//   countPositiveFeedbackPercentage = () => {
//     this.setState(state => ({
//       positivePercentage: parseFloat(
//         ((state.good / state.total) * 100).toFixed(1)
//       ),
//     }));
//   };

//   render() {
//     const { good, neutral, bad, total, positivePercentage } = this.state;

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={{
//               onGood: 'Good',
//               onNeutral: 'Neutral',
//               onBad: 'Bad',
//             }}
//             onLeaveFeedback={{
//               onGood: this.handleGood,
//               onNeutral: this.handleNeutral,
//               onBad: this.handleBad,
//             }}
//           />
//         </Section>

//         <Section title="Statistics">
//           {total > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
