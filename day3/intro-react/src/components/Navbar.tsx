import { Link } from "react-router";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "green",
        color: "white",
        padding: "20px 20px",
        borderRadius: "16px",
        margin: "20px",
      }}
    >
      <h1 className="biru">Logo</h1>

      <div style={{ display: "flex", gap: "16px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Navbar;
