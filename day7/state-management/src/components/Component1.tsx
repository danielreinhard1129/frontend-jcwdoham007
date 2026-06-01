import Component2 from "./Component2";

function Component1() {
  return (
    <div style={{ border: "1px solid red", padding: "20px" }}>
      <h1>Component 1</h1>
      <Component2 />
    </div>
  );
}

export default Component1;
