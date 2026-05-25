import { useMemo, useState } from "react";

function UseMemo() {
  const [number, setNumber] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const isNumberEven = useMemo(() => {
    let i = 0;

    while (i < 900_000_000) {
      i++;
    }

    return number % 2 === 0 ? "even" : "odd";
  }, [number]);

  return (
    <div>
      <h1>UseMemo</h1>

      <hr />

      <p>{number}</p>
      <p>result : {isNumberEven}</p>
      <button onClick={() => setNumber(number + 1)}>Increment Number</button>

      <hr />

      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default UseMemo;
