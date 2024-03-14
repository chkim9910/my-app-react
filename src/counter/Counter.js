import { css } from "@emotion/react";

export default function Counter({ handleCount }) {
  const color = "white";
  return (
    <>
      <div>
        <button
          className={css`
            background: hotpink;
          `}
          onClick={() => {
            handleCount(100);
          }}
        >
          +100
        </button>
        <button
          onClick={() => {
            handleCount(10);
          }}
        >
          +10
        </button>
        <button
          onClick={() => {
            handleCount(5);
          }}
        >
          +5
        </button>
        <button
          onClick={() => {
            handleCount(-5);
          }}
        >
          -5
        </button>
        <button
          onClick={() => {
            handleCount(-10);
          }}
        >
          -10
        </button>
        <button
          onClick={() => {
            handleCount(-100);
          }}
        >
          -100
        </button>
      </div>

      <style jsx>{`
        button {
          width: 60px;
          /* height: 200px; */
          padding: 10px;
          background: pale;
          border: none;
          margin-right: 10px;
          border-radius: 10px;
          font-weight: 700;
        }
        button:hover {
          color: ${color};
          background: hotpink;
        }
      `}</style>
    </>
  );
}
