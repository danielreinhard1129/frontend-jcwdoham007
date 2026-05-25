import { memo, useCallback, useState } from "react";

function UseCallback() {
  const [count, setCount] = useState<number>(0);
  const [theme, setTheme] = useState<string>("light");

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <h1>UseCallback</h1>

      <hr />

      <p>{count}</p>
      <ComponentChildren increment={increment} />

      <hr />

      <p>{theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default UseCallback;

// ========================================================================

interface ComponentChildrenProps {
  increment: () => void;
}

const ComponentChildren = memo((props: ComponentChildrenProps) => {
  console.log("COMPONENT CHILD RENDER");

  return (
    <div>
      <button onClick={props.increment}>Increment</button>
    </div>
  );
});
