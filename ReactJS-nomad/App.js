import { useState } from "react";

// MinutesToHours 기능을 하는 컴포넌트 분할.
function MinutesToHours() {
  // React.usestate()쓰면 오류뜬다. 이미 react-app을 다운받아서 그런 듯.
  // state를 만들면 결과는 array ; [데이터, 데이터 수정하기 위한 함수]
  const [amount, setAmount] = useState(0);
  // Ture-False / On-Off 같이 toggle형식에서는 Ture-False 이용하면 좋다.
  const [flipped, setFlipped] = useState(false);
  const onChange = (event) => {
    // input에 담긴 value로 값을 업데이트.
    setAmount(event.target.value);
  };
  const reset = () => setAmount(0);
  const onFilp = () => {
    reset();
    setFlipped((current) => !current);
  };
  return (
    <div>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          // input의 value를 state로 연결해주는 이유는 input 값을 외부에서 수정하기 용이하게 하려고.
          // 삼항연산자 ; 조건 ? true 일때 : false일떄
          value={flipped ? amount * 60 : amount}
          id="minutes"
          placeholder="minutes"
          type="number"
          // 변하는 값을 리스닝하고 업데이트해주는 함수
          onChange={onChange}
          disabled={flipped}
        ></input>
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          // 분을 시간으로 변환한 값이 value로 들어감.
          value={flipped ? amount : Math.round(amount / 60)}
          id="hours"
          placeholder="hours"
          type="number"
          onChange={onChange}
          disabled={!flipped}
        ></input>
      </div>
      <button id="reset" onClick={reset}>
        Reset
      </button>
      <button onClick={onFilp}>Flip</button>
    </div>
  );
}
// KmToMiles 컴포넌트 부분
function KmToMiles() {}
// state를 이용해 값을 바꿀 때마다 UI를 새로고침하는 걸 익히는 예제.
function App() {
  // index값(0 or 1)에 따라 다른 컴포넌트 불러오고 싶다.
  const [index, setIndex] = useState("0");
  const onSelect = (event) => {
    // 이 값으로 index값 업데이트해서 반영
    setIndex(event.target.value);
  };
  return (
    // 컴포넌트 안에 분할한 컴포넌트 가져다씀.

    // JSX문법은 div태그 안에 넣어야됨. 안그러면 오류뜬다,,,
    <div>
      <h1>Super Converter!</h1>

      <select value={index} onChange={onSelect}>
        {/* value 값을 저장해서 select되는 것에 맞는 컴포넌트 연결가능 */}
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      {/* 중괄호 안에 js 코드쓸 수 있음. 그냥 쓰면 텍스트로 인식함.  */}
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToMiles /> : null}
    </div>
  );
}

export default App;
