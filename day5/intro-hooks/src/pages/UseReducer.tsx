import { useReducer } from "react";

interface CounterState {
  count: number;
}

interface CounterAction {
  type: "increment" | "decrement";
  payload: number;
}

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
  }
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>Use Reducer</h1>

      <hr />

      <button onClick={() => dispatch({ payload: 5, type: "decrement" })}>
        decrement
      </button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ payload: 5, type: "increment" })}>
        increment
      </button>
    </div>
  );
}

export default UseReducer;
