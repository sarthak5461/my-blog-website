import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Blog from "./pages/Blog.js";
import BlogDetails from "./pages/BlogDetails.js";
// import BlogDetails from "./pages/BlogDetails.js";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={ <BlogDetails/> } />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
