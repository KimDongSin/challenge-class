import { Link, Outlet } from "react-router-dom";

function DefaultLayout() {
  /*
    useEffect::
    컴포넌트 생애주기와 의존성 배열에 담긴 값의 변화에 따라
    함수를 실행해 주는 훅
  */

  // useEffect(() => {
  //   alert("안녕하세요.");
  // }, []);

  // 만약 마운트가 두번 실행되면 StrictMode off인지 확인

  return (
    <div>
      <Link to="/">홈 페이지</Link>
      <br />
      <Link to="/posts">포스트 목록 페이지</Link>
      <br />
      <Link to="/posts/123">포스트 상세 페이지</Link>

      <Outlet />
      {/* Outlet은 현재 선택된 라우트의 자식컴포넌트를 렌더링한다.  */}
    </div>
  );
}

export default DefaultLayout;
