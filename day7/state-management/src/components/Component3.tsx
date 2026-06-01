import { useContext } from "react";
import { UserContext } from "../pages/About";

function Component3() {
  const context = useContext(UserContext);

  return (
    <div style={{ border: "1px solid blue", padding: "20px" }}>
      <h1>Component 3</h1>
      <p>{context?.name}</p>
    </div>
  );
}

export default Component3;
