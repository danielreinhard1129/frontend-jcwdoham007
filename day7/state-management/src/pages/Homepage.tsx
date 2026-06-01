import ComponentA from "../components/ComponentA";

function Homepage() {
  const name = "Budi";

  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <h1>Homepage</h1>
      <ComponentA name={name} />
    </div>
  );
}

export default Homepage;
