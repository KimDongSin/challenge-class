import { useLoaderData } from "react-router-dom";

function PostDetailPage() {
  const post = useLoaderData();

  return (
    <div>
      <h1>PostDetailPage</h1>

      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDetailPage;
