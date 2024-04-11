export default function BlogPost({ id, title, author, content, onDeletePost }) {
  return (
    <li className="blog-post">
      <h2>{title}</h2>
      <p>{content}</p>
      <p>
        <strong>{author}</strong>
      </p>
      <div>
        <button onClick={() => onDeletePost(id)} className="btn">
          Delete
        </button>
      </div>
    </li>
  );
}
