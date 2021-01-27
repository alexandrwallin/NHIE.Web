import React, { useEffect, useState } from 'react';
import q from '../questions.json';
import styles from './question.module.scss';

const Question = () => {
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState<string[]>(q);

  const newQuestion = () => {
    const idx = random(questions.length);
    setQuestion(questions[idx]);

    const temp = [...questions];
    temp.splice(idx, 1);

    setQuestions(temp);
  };

  useEffect(() => {
    newQuestion();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const random = (max: number) => Math.floor(Math.random() * max);

  return (
    <div className={styles.container} onClick={newQuestion}>
      <h1>Jag har aldrig</h1>
      <h2>{question}</h2>
      <p>Klicka varsomhelst för att gå vidare till nästa fråga.</p>
    </div>
  );
};

export default Question;
