import React from "react";
import blogData from "../data/blog";
import Header from "./Header.js"
import About from "./About"
import ArticleList from "./ArticleList"

console.log(blogData);

const App = () => {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
