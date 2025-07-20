import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from './components/Quiz';
import QuizReview from './components/QuizReview';
import QuizOverview from './components/QuizOverview';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/review" element={<QuizReview />} />
        <Route path="/overview" element={<QuizOverview />} />
      </Routes>
    </Router>
  );
}

export default App;
