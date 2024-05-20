import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      {/* a태그로 하면 새로고침이 발생! */}
      <a href="/posts">포스트 목록 페이지</a>
      <br />
      <Link to="/posts">포스트 목록 페이지</Link>
      {/* Link는 SPA 페이지전환 처리 */}
    </div>
  );
}

export default HomePage;
