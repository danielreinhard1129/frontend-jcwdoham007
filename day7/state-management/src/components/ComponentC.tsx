interface ComponentCProps {
  name: string;
}

function ComponentC(props: ComponentCProps) {
  return (
    <div style={{ border: "1px solid blue", padding: "20px" }}>
      <h1>Component C</h1>
      <p>{props.name}</p>
    </div>
  );
}

export default ComponentC;
