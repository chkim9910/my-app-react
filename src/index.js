import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// import "./index.css";
// comm.css를 설정해줄 것이므로 위의 코드는 주석 처리해줌
// import reportWebVitals from "./reportWebVitals";
// 위의 코드는 성능 측정

const root = ReactDOM.createRoot(document.getElementById("root"));
// index.html의 root에 아래의 내용이 들어갈 수 있도록 함
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
