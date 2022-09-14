import { useEffect, useState } from "react";
import Button from "./Button.js";

// index.js로 보내서 index.js에서 출력!
function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);

  const onClick = () => setCounter((i) => i + 1);
  const onClick1 = () => setShowing((i) => !i);
  const onChange = (e) => setKeyword(e.target.value);

  useEffect(() => console.log("render"), []);
  useEffect(() => {
    if (keyword !== "") console.log(keyword); //처음 렌더될 때 실행 🚫
  }, [keyword]); //실시간 추천검색어 API할 때 쓸 수 있겠군
  useEffect(() => console.log(counter), [counter]);

  return (
    <div className="App">
      {showing ? <Button text={"버튼 컴포넌트"} /> : null}
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here!"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>클릭하면 +1</button>
      <button onClick={onClick1}>{showing ? "hide" : "show"}</button>
    </div>
  );
}

export default App;
