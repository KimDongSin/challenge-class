# React 주요 개념

---

## 2. JSX

---

### JSX란?

- JSX는 JavaScript를 확장한 문법으로, React에서 UI구조를 표현하는 데 사용된다.
- HTML태그와 유사하게 생겼지만, 실제로는 JavaScript의 확장이다. 절대 혼돈하지 말자.
- HTML != JSX는 완전히 다르다.
- JSX는 React 라이브러리의 `createElement` 함수 호출을 보다 직관적으로<br />
  표현해주는 문법적 편의를 제공하는 데에 불과하다.

### JSX의 특징

1. **HTML과 유사한 문법**

- JSX는 HTML 태그와 비슷하게 생겼기 때문에, 웹 개발자에게 친숙하고 읽기 쉽다.

2. **JavaScript와의 결합**

- JSX 내에서 JavaScript 표현식을 중괄호 `{}`로 묶어 사용할 수 있다.
- 이를 통해 데이터 바인딩이나 반복문 처리 등이 가능하다.

```jsx
function App() {
  const name = "Kim";

  return <div>Hello~! My name is {name}</div>;
}
```

3. **컴포넌트 기반**

- React 컴포넌트를 JSX를 사용하여 리액트 앨리먼트로 만들 수 있다.
- 이를 통해 UI를 구조화하고 재사용할 수 있다.

<br />

### JSX 사용 예시

```jsx
// 컴포넌트 선언
function SomeComponent() {
  return <h1>{3 + 5}</h1>;
}

// 엘리먼트 생성
const someElement = <SomeComponent />;

// 컴포넌트의 재사용
function AnotherComponent() {
  return (
    <div>
      <SomeComponent />
      <SomeComponent />
    </div>
  );
}
```

### JSX의 장점

- 읽기 쉽고 작성하기 편리
  UI 코드가 시각적으로 이해하기 쉬워, 개발 효율성이 높아진다.
- 컴포넌트 구조 명확화
  컴포넌트의 구조를 한눈에 파악하기 쉬워, 프로젝트의 유지보수성이 향상된다.

### JSX 사용 시 주의사항

- 브라우저는 JS의 확장인 JSX는 읽지 못하고 JS만 읽을 수 있다.
- 따라서 트랜스파일(Babel 등)를 사용하여 JSX를 일반 JS로 변환하여 웹 브라우저에 보내주어야 한다.
