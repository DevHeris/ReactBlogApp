import { useState } from "react";

export default function Form({ setShowForm, onAddNewPost }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [showError, setShowError] = useState(false);

  const handleCloseForm = () => {
    setShowForm(false);
    setAuthor("");
    setTitle("");
    setContent("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "") setTitle(null);
    if (author === "") setAuthor(null);
    if (content === "") setContent(null);

    if (title === "" || author === "" || content === "")
      return setShowError(true);

    const newPost = { id: crypto.randomUUID(), title, content, author };

    onAddNewPost(newPost);

    setAuthor("");
    setTitle("");
    setContent("");

    handleCloseForm();
  };

  return (
    <div className="add-post-wrapper">
      <h2>
        <span>New Post</span>
        <span className="close" onClick={handleCloseForm}>
          ✖
        </span>
      </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title" style={{ color: `${title === null && "red"}` }}>
          Title
        </label>

        <input
          type="text"
          className="title-input"
          placeholder="Enter title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label
          htmlFor="author"
          style={{ color: `${author === null && "red"}` }}
        >
          Author
        </label>
        <input
          type="text"
          className="author-input"
          placeholder="Enter author..."
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label
          htmlFor="content"
          style={{ color: `${content === null && "red"}` }}
        >
          Content
        </label>
        <textarea
          className="content-input"
          placeholder="Enter content..."
          rows="7"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div>
          <button className="btn">Add Post</button>
        </div>
        {showError && (
          <p className="error-message">
            Please make sure to fill in all required fields
          </p>
        )}
      </form>
    </div>
  );
}
