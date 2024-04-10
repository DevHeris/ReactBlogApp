import React from "react";

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
            convallis libero nec ex consequat, in laoreet dolor tristique.
            Donec sit amet tortor at arcu ullamcorper suscipit.
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
        <p>&copy; {new Date().getFullYear()} Your Blog Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;