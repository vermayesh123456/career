import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewFeedback = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    async function fetchFeedback() {
      const response = await axios.get("http://localhost:5000/api/feedback/view");
      setFeedback(response.data);
    }
    fetchFeedback();
  }, []);

  return (
    <div>
      <h2>User Feedback</h2>
      {feedback.map((fb, index) => (
        <div key={index}>
          <p>{fb.message}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewFeedback;
