import { useEffect, useRef, useState } from "react";
import char from "./../../assets/pikachu.png";

function GameContainer() {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const charRef = useRef(null);

  const handleKeydown = (e) => {
    // 캐릭터 위치 값
    let topVal = charRef.current.style.top.replace("px", "");
    let leftVal = charRef.current.style.left.replace("px", "");

    // 캐릭터 기준으로 상하좌우
    switch (e.key) {
      case "ArrowUp":
        if (topVal >= 50) {
          setPosition((prev) => ({ ...prev, top: prev.top - 50 }));
        }
        break;
      case "ArrowDown":
        if (topVal < 450) {
          setPosition((prev) => ({ ...prev, top: prev.top + 50 }));
        }
        break;
      case "ArrowLeft":
        if (leftVal >= 50) {
          setPosition((prev) => ({ ...prev, left: prev.left - 50 }));
        }
        break;
      case "ArrowRight":
        if (leftVal < 450) {
          setPosition((prev) => ({ ...prev, left: prev.left + 50 }));
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <main>
      <div className="bg__container">
        <img
          className="game__char"
          ref={charRef}
          src={char}
          alt="피카츄"
          style={{
            top: `${position.top}px`,
            left: `${position.left}px`,
          }}
        />
      </div>
    </main>
  );
}

export default GameContainer;
