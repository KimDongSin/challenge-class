import { useParams } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout";

function PostDetailPage() {
  const params = useParams();

  console.log(params);

  return (
    <DefaultLayout>
      <h1>PostDetailPage</h1>
    </DefaultLayout>
  );
}

export default PostDetailPage;
