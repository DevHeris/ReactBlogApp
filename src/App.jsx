import React, { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Introduction to React",
    content:
      "React is a JavaScript library for building user interfaces. It was developed by Facebook and released in 2013. React allows developers to create reusable UI components and efficiently manage the state of their applications. It has become one of the most popular libraries for front-end development due to its simplicity, flexibility, and performance.",
    author: "John Doe",
  },
  {
    id: 2,
    title: "Getting Started with JavaScript",
    content:
      "JavaScript is a versatile programming language commonly used for web development. It is essential for building interactive websites and web applications. JavaScript can be used to add dynamic behavior to HTML and CSS, handle user interactions, manipulate the DOM, make HTTP requests, and much more.",
    author: "Jane Smith",
  },
  {
    id: 3,
    title: "Mastering CSS Flexbox",
    content:
      "CSS Flexbox is a layout model that allows you to design flexible and responsive web layouts with ease. It provides a more efficient way to distribute space and align items within a container, eliminating the need for complex CSS hacks and workarounds. With Flexbox, you can create complex layouts that adapt to different screen sizes and devices.",
    author: "Adam Johnson",
  },
];

function App() {
  const [filterAuthor, setFilterAuthor] = useState("");

  const uniqueAuthors = Array.from(new Set(blogPosts.map((post) => post.author)));

  const handleFilterChange = (e) => {
    setFilterAuthor(e.target.value);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>📝 My Blog</h1>
        <select value={filterAuthor} onChange={handleFilterChange}>
          <option value="">Filter by Author</option>
          {uniqueAuthors.map((author) => (
            <option value={author} key={author}>
              {author}
            </option>
          ))}
        </select>
      </header>
      <div className="blog-posts">
        {blogPosts
          .filter((post) => !filterAuthor || post.author === filterAuthor)
          .map((post) => (
            <div className="blog-post" key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <p>Author: {post.author}</p>
              <button>Delete Post ❌</button>
            </div>
          ))}
      </div>
      <div className="add-post-form">
        <h2>Add New Post</h2>
        <form>
          <input type="text" placeholder="Title" />
          <textarea placeholder="Content" rows="4" />
          <input type="text" placeholder="Author" />
          <button>Add Post ➕</button>
        </form>
      </div>
    </div>
  );
}

export default App;