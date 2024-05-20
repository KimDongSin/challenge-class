import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PostDetailPage from "../pages/PostDetailPage";
import PostListPage from "../pages/PostListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/posts",
    element: <PostListPage />,
  },
  {
    path: "/posts/:postId", // 동적라우터 이름은 명시적으로.
    element: <PostDetailPage />,
  },
]);

export default router;
