import { Link } from "react-router-dom";

function DefaultLayout({ children }) {
  return (
    <div>
      <Link to="/">홈 페이지</Link>
      <br />
      <Link to="/posts">포스트 목록 페이지</Link>
      <br />
      <Link to="/posts/123">포스트 상세 페이지</Link>
      {children}
    </div>
  );
}

export default DefaultLayout;
