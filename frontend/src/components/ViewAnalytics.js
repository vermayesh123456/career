import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewAnalytics = () => {
  const [analytics, setAnalytics] = useState({});

  useEffect(() => {
    async function fetchAnalytics() {
      const response = await axios.get("http://localhost:5000/api/analytics");
      setAnalytics(response.data);
    }
    fetchAnalytics();
  }, []);

  return (
    <div>
      <h2>Analytics Dashboard</h2>
      <p>Users: {analytics.users}</p>
      <p>Quiz Submissions: {analytics.quizSubmissions}</p>
      {/* Add more analytics fields as needed */}
    </div>
  );
};

export default ViewAnalytics;
