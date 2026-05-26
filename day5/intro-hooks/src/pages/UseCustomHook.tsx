import useCounter from "../hooks/useCounter";

function UseCustomHook() {
  const { count, handleDecrement, handleIncrement } = useCounter();

  return (
    <div>
      <h1>UseCustomHook</h1>

      <button onClick={handleDecrement}>decrement</button>
      <p>{count}</p>
      <button onClick={handleIncrement}>increment</button>
    </div>
  );
}

export default UseCustomHook;
