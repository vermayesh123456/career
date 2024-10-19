import React, { useState } from "react";
import axios from "axios";

const WriteBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/blog", { title, content });
      alert(response.data.message);
    } catch (error) {
      alert("Failed to publish blog.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Write a Blog Post</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Blog Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Blog Content"
        required
      ></textarea>
      <button type="submit">Publish</button>
    </form>
  );
};

export default WriteBlog;
