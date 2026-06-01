import ComponentC from "./ComponentC";

interface ComponentBProps {
  name: string;
}

function ComponentB(props: ComponentBProps) {
  return (
    <div style={{ border: "1px solid green", padding: "20px" }}>
      <h1>Component B</h1>
      <ComponentC name={props.name} />
    </div>
  );
}

export default ComponentB;
