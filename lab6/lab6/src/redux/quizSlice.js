import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    {
      id: 1,
      question: "Inside which HTML element do we put the JavaScript?",
      options: ["javascript", "scripting", "script", "js"],
      correctAnswer: "script",
      selectedAnswer: null,
    },
    {
      id: 2,
      question: "What are variables used for in JavaScript Programs?",
      options: [
        "Storing numbers, dates, or other values",
        "Varying randomly",
        "Causing high-school algebra flashbacks",
        "None of these",
      ],
      correctAnswer: "Storing numbers, dates, or other values",
      selectedAnswer: null,
    },
    // Add 8 more if needed
  ],
  currentIndex: 0,
  submitted: false,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    selectAnswer: (state, action) => {
      const { id, answer } = action.payload;
      const q = state.questions.find(q => q.id === id);
      if (q) q.selectedAnswer = answer;
    },
    goToNext: (state) => {
      if (state.currentIndex < state.questions.length - 1) state.currentIndex++;
    },
    goToPrev: (state) => {
      if (state.currentIndex > 0) state.currentIndex--;
    },
    goToFirst: (state) => {
      state.currentIndex = 0;
    },
    goToLast: (state) => {
      state.currentIndex = state.questions.length - 1;
    },
    submitQuiz: (state) => {
      state.submitted = true;
    }
  }
});

export const { selectAnswer, goToNext, goToPrev, goToFirst, goToLast, submitQuiz } = quizSlice.actions;
export default quizSlice.reducer;
