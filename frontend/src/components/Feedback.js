import React, { useState } from "react";
import axios from "axios";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/feedback", { feedback });
      alert(response.data.message);
    } catch (error) {
      alert("Failed to submit feedback.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Leave Feedback</h2>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        required
      ></textarea>
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default Feedback;
