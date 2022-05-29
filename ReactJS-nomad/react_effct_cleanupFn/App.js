import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    // 실행될 때
    console.log("created :)");
    // CleanupFunction ; 컴포넌트가 사라질 때 실행.
    return () => console.log("destroyed :( ");
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
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
