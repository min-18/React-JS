import { useState } from "react";

// state를 이용해 값을 바꿀 때마다 UI를 새로고침하는 걸 익히는 예제.
function App() {
  // React.usestate()쓰면 오류뜬다. 이미 react-app을 다운받아서 그런 듯.
  // state를 만들면 결과는 array ; [데이터, 데이터 수정하기 위한 함수]
  const [amount, setMinutes] = useState(0);
  // Ture-False / On-Off 같이 toggle형식에서는 Ture-False 이용하면 좋다.
  const [flipped, setFlipped] = useState(false);
  const onChange = (event) => {
    // input에 담긴 value로 값을 업데이트.
    setMinutes(event.target.value);
  };
  const reset = () => setMinutes(0);
  const onFilp = () => {
    reset();
    setFlipped((current) => !current);
  };

  return (
    <div>
      <h1>Super Converter!</h1>
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

export default App;
