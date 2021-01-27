import axios from 'axios';
import React, { useEffect, useState } from 'react';
import config from '../config';
import { IQuestion } from '../models/IQuestion';
import styles from './question.module.scss';

const Question = () => {
  const [question, setQuestion] = useState<string>();
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      setIsLoading(true);
      const LIMIT = 100;
      const response = await axios.get<{
        total: number;
        questions: IQuestion[];
      }>(config.API_URL + `questions?limit=${LIMIT}`, {
        headers: { Authorization: config.API_KEY },
      });

      setQuestions(response.data.questions);
    };

    fetchQuestions();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!question && questions.length) {
      newQuestion();
      setIsLoading(false);
    }
  }, [questions]); // eslint-disable-line react-hooks/exhaustive-deps

  const newQuestion = () => {
    if (questions.length < 1) {
      setQuestion('');
      return;
    }
    const idx = random(questions.length);
    setQuestion(questions[idx].title);

    const temp = [...questions];
    temp.splice(idx, 1);

    setQuestions(temp);
  };

  const random = (max: number) => Math.floor(Math.random() * max);

  return (
    <div className={styles.container} onClick={newQuestion}>
      {isLoading ? (
        <div>Laddar...</div>
      ) : question ? (
        <>
          <h1>Jag har aldrig</h1>
          <h2>{question}</h2>
          <p className={styles.subtext}>
            Klicka varsomhelst för att gå vidare till nästa fråga.
          </p>
        </>
      ) : (
        <div>Frågorna är slut, ladda om för att hämta nya, slumpade</div>
      )}

      <div className={styles.credits}>
        <h3>Text och Musik:</h3>
        <p>Elin Lundqvist</p>
        <p>
          <a
            href="https://twitter.com/alaxendrawallin"
            target="_blank"
            rel="noreferrer"
          >
            Alexandra Wallin
          </a>
        </p>
      </div>
    </div>
  );
};

export default Question;
