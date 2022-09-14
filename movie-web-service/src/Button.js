import { useEffect } from "react";

function Button({ text }) {
  useEffect(() => {
    console.log("버튼 생겼다!");
    return () => console.log("버튼 사라졌다!");
    //useEffect에 return에 쓰면 컴포넌트가 사라질질 때 사용 가능!
  }, []);

  return <button>{text}</button>;
}

export default Button;
