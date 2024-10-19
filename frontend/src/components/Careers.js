import React, { useEffect, useState } from "react";
import axios from "axios";

const Careers = () => {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    async function fetchCareers() {
      const response = await axios.get("http://localhost:5000/api/careers");
      setCareers(response.data);
    }
    fetchCareers();
  }, []);

  return (
    <div>
      <h2>Explore Careers</h2>
      {careers.map((career, index) => (
        <div key={index}>
          <h3>{career.title}</h3>
          <p>{career.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Careers;
