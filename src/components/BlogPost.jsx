export default function BlogPost({ id, title, author, content, onDeletePost }) {
  return (
    <li className="blog-post">
      <h2>{title}</h2>
      <p>{content}</p>
      <p>
        <strong>{author}</strong>
      </p>
      <button className="btn">
        <span onClick={() => onDeletePost(id)}>Delete</span>
      </button>
    </li>
  );
}
