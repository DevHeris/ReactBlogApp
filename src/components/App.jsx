import { useState, useEffect } from "react";
import Logo from "./Logo";
import Form from "./Form";
import FilterAndActions from "./FilterAndActions";
import BlogPosts from "./BlogPosts";
import defaultPosts from "./defaultPosts";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts");
    const initialPosts = JSON.parse(savedPosts);
    return initialPosts || defaultPosts;
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

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
