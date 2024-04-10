import React from "react";

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
  return (
    <div className="app">
      <header className="header">
        <h1>Your Blog Name</h1>
      </header>
      <main className="blog-post-list">
        <h2>Blog Posts</h2>
        <div className="blog-post">
          <h3>Post Title 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            convallis libero nec ex consequat, in laoreet dolor tristique. Donec
            sit amet tortor at arcu ullamcorper suscipit.
          </p>
          <p>Author: John Doe</p>
        </div>
        <div className="blog-post">
          <h3>Post Title 2</h3>
          <p>
            Nullam vulputate metus ut dui facilisis, nec scelerisque metus
            suscipit. Curabitur maximus quam nec nulla pharetra, a volutpat
            turpis fermentum.
          </p>
          <p>Author: Jane Doe</p>
        </div>
      </main>
      <div className="add-post-form">
        <h2>Add New Post</h2>
        <form>
          <input type="text" placeholder="Title" />
          <textarea placeholder="Content" rows="4"></textarea>
          <input type="text" placeholder="Author" />
          <button type="submit">Add Post</button>
        </form>
      </div>
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Your Blog Name. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
