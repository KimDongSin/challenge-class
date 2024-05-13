# React 주요 개념

---

## 4. State

- State는 **React 컴포넌트 내부**의 동적인 데이터를 관리하는 데 사용되는 **데이터** 구조이다.
- 일반적으로 시간에 따라 변하는 값이나 사용자의 상호작용 또는 네트워크 응답 등에 의해 변경되는 값을 State로 관리한다.
- State가 바뀌면 컴포넌트는 리렌더링을 한다.
- 리렌더링이 된다는 것은 함수가 재실행된다는 뜻이고, 그 결과 화면이 다시 그려지게 된다.
- 함수는 재실행되지만 상태값은 어딘가에 계속 기억이 되고 있다.

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // 초기값 0

  const increment = () => {
    setCount(count + 1); // count를 1 증가시키는 함수
  };

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={increment}>증가</button>
    </div>
  );
}
```

[공식문서 링크](https://react.dev/learn/state-a-components-memory)
