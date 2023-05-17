import { useState, useEffect } from "react";

function Hello() {
  function byFn() {
    console.log("디스트로이");
  }
  function hiFn() {
    console.log("크리에이트");
    return byFn;
  }
  useEffect(function () {
    console.log("Hi (:");
    return function () {
      console.log("Bay ):");
    };
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
// ⛔⛔⛔⛔⛔⛔ 수요일까지 주관회고 제출 ⛔⛔⛔⛔⛔⛔
