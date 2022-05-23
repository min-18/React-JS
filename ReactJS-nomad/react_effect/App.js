import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((prev) => prev + 1);

  const onChange = (event) => setKeyword(event.target.value);

  const reset = () => {
    setKeyword("");
    setCounter(0);
  };
  console.log("I run all the time.");

  // 처음 한번만 콘솔 찍히고 다음부터는 호출 안함.; []안에 추적하는 게 없기 때문.
  useEffect(() => {
    console.log("Call the API... I want to run only once.");
  }, []);
  // []안에 들은 keyword 값이 바뀔때만 콘솔 찍힘.
  // 추가로. js 문법도 활용가능.
  useEffect(() => {
    if (keyword !== "" && keyword.length > 3) {
      console.log("Search For", keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  return (
    <div>
      <input
        onChange={onChange}
        value={keyword}
        type="text"
        placeholder="Search here..."
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Here</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default App;
