import { useState } from "react";
import Counter from "./Counter";
import Viewer from "./Viewer";
import { css } from "@emotion/react";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const handleCount = (value) => {
    setCount(count + value);
  };

  const color = "gray";

  return (
    <>
      <div className="counter-container">
        <div className="txt-box">
          <h1>Counter App 만들기</h1>
          <h3>(used by emotion.js)</h3>
        </div>
        <Viewer count={count} />
        <Counter handleCount={handleCount} />
      </div>

      <style jsx>{`
        .counter-container {
          width: 500px;
          height: 200px;
          padding: 10px;
          background: paleturquoise;
        }
        .txt-box {
          display: flex;
          align-items: flex-end;
          gap: 10px;
        }
      `}</style>
    </>
  );
};

export default CounterApp;
