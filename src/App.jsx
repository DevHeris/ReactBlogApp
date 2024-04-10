import React from "react";

function App() {
  return (
    <>
      <BlogPostList />
      <AddPostForm />
    </>
  );
}

function BlogPostList() {
  return (
    <div className="blog-post-list">
      <h2>Blog Posts</h2>
      <ul>
        <li>
          <BlogPost
            title="Post Title 1"
            content="Lorem ipsum dolor sit amet."
            author="John Doe"
          />
        </li>
        <li>
          <BlogPost
            title="Post Title 2"
            content="Consectetur adipiscing elit."
            author="Jane Smith"
          />
        </li>
        {/* Add more BlogPost items as needed */}
      </ul>
    </div>
  );
}

function BlogPost({ title, content, author }) {
  return (
    <div className="blog-post">
      <h3>{title}</h3>
      <p>{content}</p>
      <p>Author: {author}</p>
    </div>
  );
}

function AddPostForm() {
  return (
    <div className="add-post-form">
      <h2>Add New Post</h2>
      <form>
        <input type="text" placeholder="Title" />
        <textarea placeholder="Content" rows="4" />
        <input type="text" placeholder="Author" />
        <button>Add Post</button>
      </form>
    </div>
  );
}

export default App;

/* AddPostForm.css */
.add-post-form {
  background-color: #e5771f;
  padding: 2.8rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
}

.add-post-form h2 {
  text-align: center;
  font-size: 2.4rem;
  color: #ffebb3;
  margin-bottom: 1rem;
}

.add-post-form input[type="text"],
.add-post-form textarea {
  background-color: #ffebb3;
  color: #5a3e2b;
  font-family: inherit;
  border: none;
  border-radius: 10rem;
  padding: 1.2rem 3.2rem;
  font-weight: 700;
  font-size: 1.8rem;
}

.add-post-form button {
  background-color: #76c7ad;
  color: #5a3e2b;
  font-family: inherit;
  border: none;
  border-radius: 10rem;
  padding: 1.2rem 3.2rem;
  font-weight: 700;
  font-size: 1.8rem;
  cursor: pointer;
}/* BlogPost.css */
.blog-post {
  background-color: #5a3e2b;
  color: #ffebb3;
  padding: 1rem;
  margin-bottom: 1rem;
}

.blog-post h3 {
  font-size: 2.4rem;
  text-align: center;
}

.blog-post p {
  font-size: 1.8rem;
  text-align: center;
}/* BlogPostList.css */
.blog-post-list {
  margin: 20px auto;
  max-width: 600px;
}

.blog-post-list h2 {
  text-align: center;
  background-color: #f4a226;
  font-family: "Monoton";
  font-size: 8rem;
  text-transform: uppercase;
  font-weight: 400;
  word-spacing: 30px;
  letter-spacing: -5px;
  padding: 2.4rem 0;
}

.blog-post-list ul {
  list-style: none;
  padding: 0;
}

const blogPosts = [
  {
    id: 1,
    title: "Introduction to React",
    content: "React is a JavaScript library for building user interfaces. It was developed by Facebook and released in 2013. React allows developers to create reusable UI components and efficiently manage the state of their applications. It has become one of the most popular libraries for front-end development due to its simplicity, flexibility, and performance.",
    author: "John Doe",
  },
  {
    id: 2,
    title: "Getting Started with JavaScript",
    content: "JavaScript is a versatile programming language commonly used for web development. It is essential for building interactive websites and web applications. JavaScript can be used to add dynamic behavior to HTML and CSS, handle user interactions, manipulate the DOM, make HTTP requests, and much more.",
    author: "Jane Smith",
  },
  {
    id: 3,
    title: "Mastering CSS Flexbox",
    content: "CSS Flexbox is a layout model that allows you to design flexible and responsive web layouts with ease. It provides a more efficient way to distribute space and align items within a container, eliminating the need for complex CSS hacks and workarounds. With Flexbox, you can create complex layouts that adapt to different screen sizes and devices.",
    author: "Adam Johnson",
  },
  // Add more blog post objects as needed
];

export default blogPosts;