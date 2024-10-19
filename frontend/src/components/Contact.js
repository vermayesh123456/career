import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/contact", { message });
      alert(response.data.message);
    } catch (error) {
      alert("Failed to send message.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default Contact;
