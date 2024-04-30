"use client";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Test</h1>
      <h1>Counter : {counter}</h1>
      <button className="border p-2" onClick={() => setCounter(counter + 1)}>
        Increase
      </button>
      <button className="border p-2" onClick={() => setCounter(counter - 1)}>
        Decrease
      </button>
    </div>
  );
};

export default Counter;
