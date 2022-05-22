import { memo, useState } from "react";

// 버튼 여러개를 만들건데 공통된 골격은 같지만 안의 내용만 다르게 할 거기 때문에 같은 컴포넌트에 props를 다르게 주는 방식으로 진행
// 인자를 props로 받고 props.btn_text로 가져다 써도 됨.
// 부모에서 인자를 여러개 보낼 수도 있다.
// js문법으로 인자에 기본값을 줄 수도 있다.
function Btn({ btn_text, fontSize = 12, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "tomato",
        color: "white",
        borderRadius: "10px",
        border: "0",
        padding: "10px 20px",
        fontSize,
        // fontSize: big ? 18 : 12,
      }}
    >
      {btn_text}
    </button>
  );
}
// memo 사용법
// const MemorizedBtn = memo(Btn)

// propType ; 타입을 체크해주고 필요한요소인지 체크해준다.
// 설치 필요
// Btn.propType = {
//   btn_text: propType.string.isRequired,
//   fontSize: propType.number,
// };
function App() {
  const [value, setValue] = useState("go");
  const changeValue = () => {
    setValue("pause");
  };
  return (
    // 컴포넌트 안에 분할한 컴포넌트 가져다씀. ; 분할해서 쓰면 재활용 가능!
    // props로 부모컴포넌트에서 자식컴포넌트에 데이터를 보낼 수도 있음. ; string, T/F, function 도 가능
    // 주의해야할 건 props로 부모컴포넌트에 넣는다 하더라도 자식 컴포넌트에서 인자를 받지않으면 반영되지 않는다!
    <div>
      {/* 첫번째 버튼은 state와 연결되어 있어서 자동으로 rerender된다. 근데 두번째 버튼같이 props가 바뀌지 않는 경우에 rerender하고 싶지 않다면 React-Memo를 사용하자. ; 앱의 반응속도를 조금이라도 높이기 위해!*/}
      <Btn btn_text={value} fontSize={18} onClick={changeValue} />
      <Btn btn_text="stop" fontSize={15} />
    </div>
  );
}

export default App;
