export default function Form() {
  return (
    <div className="add-post-wrapper">
      <h2>New Post</h2>
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" className="title" placeholder="Enter title..." />
        <label htmlFor="author">Author</label>
        <input type="text" className="author" placeholder="Enter author..." />
        <label htmlFor="content">Content</label>
        <textarea className="content" placeholder="Enter content..." rows="7" />
        <div>
          <button className="btn">Add Post</button>
        </div>
      </form>
    </div>
  );
}
