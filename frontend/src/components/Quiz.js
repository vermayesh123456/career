import React, { useState } from 'react';
import axios from 'axios';

const Quiz = ({ userId }) => {
  const [answers, setAnswers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/quiz', { userId, answers }); // Use the full backend URL
      alert('Quiz Submitted: ' + response.data.result);
    } catch (error) {
      alert('Quiz submission failed.');
    }
  };

  const handleChange = (e, questionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = e.target.value;
    setAnswers(newAnswers);
  };

  return (
    <div>
      <h1>Career Quiz</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Question 1:</label>
          <input
            type="text"
            onChange={(e) => handleChange(e, 0)}  // Store answer for question 1
          />
        </div>
        <div>
          <label>Question 2:</label>
          <input
            type="text"
            onChange={(e) => handleChange(e, 1)}  // Store answer for question 2
          />
        </div>
        {/* Add more questions as needed */}
        <button type="submit">Submit Quiz</button>
      </form>
    </div>
  );
};

export default Quiz;
