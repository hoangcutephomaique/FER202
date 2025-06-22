import React from 'react';
import Quiz from './components/Quiz';
import QuizContext from './components/QuizContext';

const App = () => {
  return (
    <QuizContext.Provider value={{}}>
      <Quiz />
    </QuizContext.Provider>
  );
};

export default App;
