import { Link } from "react-router";
import { useCounter } from "../stores/useCounter";

function Counter2() {
  const { count, decrement, increment } = useCounter();

  return (
    <div>
      <h1>Counter2</h1>

      <button onClick={decrement}>decrement</button>
      <p>{count}</p>
      <button onClick={increment}>increment</button>
      <hr />
      <Link to="/counter-1">Halaman Counter 1</Link>
    </div>
  );
}

export default Counter2;
