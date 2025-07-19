import { useState } from "react";

function Counter({ initialValue }: { initialValue: number }) {
  const [count, setCount] = useState(initialValue);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
      <button onClick={decrement}>-1</button>
      <h2>{count}</h2>
      <button onClick={increment}>+1</button>
    </div>
  );
}

export default Counter;
