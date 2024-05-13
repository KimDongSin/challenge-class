# React 주요 개념

---

## 1. 리액트 컴포넌트 (React Component)

- 리액트 컴포넌트는 UI의 한 부분을 캡슐화한 코드 블록이다.
- 과거에는 클래스 컴포넌트를 사용했지만 이제는 함수로 만드는 것을 권장한다.

```jsx
function Greeting() {
  return <div>Hello World</div>;
}
```

## 2. 리액트 엘리먼트 (React Element)

- 리액트 엘리먼트는 컴포넌트의 인스턴스로, 화면에 표시할 내용을 기술하는 객체이다.
- JSX 문법을 사용하여 생성할 수 있다.

```jsx
<Greeting />
```
