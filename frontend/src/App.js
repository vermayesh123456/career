import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";  // Import the new Home component
import Login from "./components/Login";
import Signup from "./components/Signup";
import Quiz from "./components/Quiz";
import Contact from "./components/Contact";
import Careers from "./components/Careers";
import Feedback from "./components/Feedback";
import WriteBlog from "./components/WriteBlog";
import ViewAnalytics from "./components/ViewAnalytics";
import ViewFeedback from "./components/ViewFeedback";

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the default homepage route */}
        <Route path="/" element={<Home />} />

        {/* Define other routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/write-blog" element={<WriteBlog />} />
        <Route path="/view-analytics" element={<ViewAnalytics />} />
        <Route path="/view-feedback" element={<ViewFeedback />} />
      </Routes>
    </Router>
  );
}

export default App;
