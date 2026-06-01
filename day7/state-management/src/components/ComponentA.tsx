import ComponentB from "./ComponentB";

interface ComponentAProps {
  name: string;
}

function ComponentA(props: ComponentAProps) {
  return (
    <div style={{ border: "1px solid red", padding: "20px" }}>
      <h1>Component A</h1>
      <ComponentB name={props.name} />
    </div>
  );
}

export default ComponentA;
