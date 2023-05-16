import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

/*
만약 위 코드 root.render에서 error이 발생한다면
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
이 코드로 수정해주세요
*/
