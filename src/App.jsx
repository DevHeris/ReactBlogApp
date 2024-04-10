
function App() {
  return (
    
  );
}

export default App;
// BlogPostList.jsx
import React from "react";
import "./BlogPostList.css"; // Import CSS file for styling

function BlogPostList() {
  return (
    <div className="blog-post-list">
      <h2>Blog Posts</h2>
      <ul>
        <li>
          <BlogPost title="Post Title 1" content="Lorem ipsum dolor sit amet." author="John Doe" />
        </li>
        <li>
          <BlogPost title="Post Title 2" content="Consectetur adipiscing elit." author="Jane Smith" />
        </li>
        {/* Add more BlogPost items as needed */}
      </ul>
    </div>
  );
}

export default BlogPostList;// BlogPost.jsx
import React from "react";

function BlogPost({ title, content, author }) {
  return (
    <div className="blog-post">
      <h3>{title}</h3>
      <p>{content}</p>
      <p>Author: {author}</p>
    </div>
  );
}

export default BlogPost;AddPostForm.jsx// AddPostForm.jsx
import React from "react";

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

export default AddPostForm;