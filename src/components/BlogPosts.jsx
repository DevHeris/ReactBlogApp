import BlogPost from "./BlogPost";

export default function BlogPosts({ posts, onDeletePost, sortBy }) {
  let sortedPosts;
  if (sortBy === "input") sortedPosts = posts;
  if (sortBy === "title")
    sortedPosts = posts.slice().sort((a, b) => a.title.localeCompare(b.title));
  if (sortBy === "author")
    sortedPosts = posts
      .slice()
      .sort((a, b) => a.author.localeCompare(b.author));

  return (
    <ul className="blog-posts">
      {sortedPosts.map((post) => (
        <BlogPost {...post} key={post.id} onDeletePost={onDeletePost} />
      ))}
    </ul>
  );
}
