import "./App.css";
import { useState } from "react";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";

function App() {
  const [good, setGood] = useState(0);
  const [ neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

 const handleIncrement = (option)  => {
   switch (option) {
     case "good":
       setGood((prev) => prev + 1);
       break;
     
    case "neutral":
       setNeutral((prev) => prev + 1);
       break;
     
     case "bad":
       setBad((prev) => prev + 1);
       break;
     
     default:
       console.log(`We have not ${option} button`);
       break;
   }
 };
  
  const countTotalFeedback = () => {
   
    return  good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalPercentage = Math.round(
      (good / countTotalFeedback()) * 100);
    return totalPercentage;
  };

    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={Object.keys({good,neutral,bad})}
            onLeaveFeedback={handleIncrement}
          />
        </Section>

        {countTotalFeedback() > 0 ? (
          <Section title={"Statistics"}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message={"No feedback given"} />
        )}
      </>
    );
  }

export default App;
