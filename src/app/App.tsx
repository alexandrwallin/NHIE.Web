import React, { useState } from 'react';
import Login from '../components/Login';
import Question from '../components/Question';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className="app">
      {isAuthenticated ? <Question /> : <Login setAuth={setIsAuthenticated} />}
    </div>
  );
};

export default App;
