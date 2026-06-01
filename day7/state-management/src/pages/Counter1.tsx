import { Link } from "react-router";
import { useCounter } from "../stores/useCounter";

function Counter1() {
  const { count, decrement, increment } = useCounter();

  return (
    <div>
      <h1>Counter1</h1>

      <button onClick={decrement}>decrement</button>
      <p>{count}</p>
      <button onClick={increment}>increment</button>
      <hr />
      <Link to="/counter-2">Halaman Counter 2</Link>
    </div>
  );
}

export default Counter1;
