import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import HomePage from "../pages/HomePage";
import PostDetailPage from "../pages/PostDetailPage";
import postDetailPageLoader from "../pages/PostDetailPage/PostDetailPage.loader";
import PostListPage from "../pages/PostListPage";
import postsListPageLoader from "../pages/PostListPage/PostsListPage.loader";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/posts",
        element: <PostListPage />,
        loader: postsListPageLoader,
        // loader는 페이지가 완전히 그려지기 전 단계에 할 작업을 수행한다.
        /*
          로더로 데이터를 가져오면 속도가 빨라지는게 아니라, 가져오는 시점이 당겨진다.
          그리기전에 가져오고 그리는거랑, 일단 그려놓고 가져와서 다시 그리는 것 차이

          현재 PostsListPage기준 목록 Link를 누르면 데이터를 먼저 가져온 다음 그리게 된다.
          따라서 약간의 딜레이가 존재한다면 엄청 빠르게 로딩이 되는 느낌은 아닐 것이다.

          이 문제를 해결하고 싶다면 React-Router에서 Await, chilren을 알아보자.
        */
      },
      {
        path: "/posts/:postId", // 동적라우터 이름은 명시적으로.
        element: <PostDetailPage />,
        loader: postDetailPageLoader,
      },
    ],
  },
]);

export default router;
