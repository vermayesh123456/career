// Home.js
import React from "react";

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Career Interest Platform</h1>
      <p>Explore careers, take quizzes, and find your best fit!</p>
      {/* <p><a href="/signup">Sign up</a> or <a href="/login">Log in</a> to get started.</p> */}
      <p><a href="/quiz">Quiz</a> || <a href="/write-blog">Write blog <br/></a> Happy Journey</p>
    </div>
  );
};

export default Home;
