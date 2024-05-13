# React 주요 개념

---

## 1. 가상DOM

<img src="https://teamsparta.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F83c75a39-3aba-4ba4-a792-7aefe4b07895%2Fab84a4fb-5637-444d-bb7c-5cf4e4f1e1b0%2FUntitled.png?table=block&id=6f2c056f-5c74-413a-b989-c6ce523e2a5e&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=670&userId=&cache=v2" />

[Virtual DOM과 Internals 공식문서 참고](https://ko.legacy.reactjs.org/docs/faq-internals.html)

- **가상 DOM**은 실제 DOM을 흉내 낸 가상의 DOM이다.
- React 같은 라이브러리는 가상 DOM을 사용해서 실제 DOM보다 **빠르게 UI 변경사항을 관리** 한다.
- 가상 DOM은 변경이 필요한 부분만 실제 DOM에 반영해줘서, 페이지 전체를 새로 불러오는 것보다 훨씬 효율적이다.
- 개발자 입장에서도 DOM을 직접 다루는 대신 React가 가상 DOM을 이용해 필요한 부분만 <br /> 자동으로 업데이트 해주니
  훨씬 편리하게 그리고 높은 생산성으로 서비스를 만들 수 있다.

<br />
