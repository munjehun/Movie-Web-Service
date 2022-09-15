import { useEffect, useState } from "react";

// index.js로 보내서 index.js에서 출력!
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault(); //submit의 새로고침 방지
    if (toDo === "") return;
    // if 문의 조건이 충족하는 경우 해당 함수를 실행을 중단하고 함수 자체에서 빠져나가라는 의미
    // 그래서 return 다음에 코드를 쓸 수 없었군!
    setToDos([toDo, ...toDos]); //toDos.push(toDo) 금지!! useState니까 변경함수로만 변경!!
    setToDo("");
  };

  useEffect(() => console.log(toDos), [toDos]);

  return (
    <div>
      <h1>내 할 일 ({toDos.length})개</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="할 일 적기"
          value={toDo}
          onChange={onChange}
        />
        <button type="submit">추가하기</button>
      </form>
      <hr />
      <ul>
        {toDos.map((toDo, idx) => (
          <li key={idx}>{toDo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
