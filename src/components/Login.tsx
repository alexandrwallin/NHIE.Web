import React, { useState } from 'react';
import styles from './login.module.scss';

interface ILoginProps {
  setAuth: (b: boolean) => void;
}

const Login: React.FC<ILoginProps> = ({ setAuth }) => {
  const [password, setPassword] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuth(true);
  };

  return (
    <div className={styles.container}>
      <h1>Är du cool nog att få spela?</h1>
      <form className={styles.form} onSubmit={submit}>
        <input
          className={styles.input}
          placeholder="Lösenord"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Logga in!</button>
      </form>
    </div>
  );
};

export default Login;
