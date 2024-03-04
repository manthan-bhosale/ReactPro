import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function IncrementhandleClick() {
    setCount(count + 1);
  }
  function DecrementhandleClick() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Count value is: {count}</h1>
      <button onClick={IncrementhandleClick}>Increment</button>
      <button onClick={DecrementhandleClick}>Decrement</button>
    </div>
  );
}
