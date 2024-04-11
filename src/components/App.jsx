import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import FilterAndActions from "./FilterAndActions";
import BlogPosts from "./BlogPosts";
import initialPosts from "./initialPosts";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [posts, setPosts] = useState(initialPosts);
  const [sortBy, setSortBy] = useState("input");

  const handleAddNewPost = (newPost) => setPosts([...posts, newPost]);

  const handleDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleClearAllPosts = () => {
    if (window.confirm("Are you sure you want to clear all blog posts?"))
      setPosts([]);
  };

  return (
    <div className="app">
      <Logo />
      <div className="form-filter-posts">
        {showForm && (
          <Form setShowForm={setShowForm} onAddNewPost={handleAddNewPost} />
        )}
        <FilterAndActions
          setShowForm={setShowForm}
          onClearAll={handleClearAllPosts}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        <BlogPosts
          posts={posts}
          onDeletePost={handleDeletePost}
          sortBy={sortBy}
        />
      </div>
    </div>
  );
}

export default App;
