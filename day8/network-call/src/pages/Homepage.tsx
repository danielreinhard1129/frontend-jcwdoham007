import { Link } from "react-router";
import { useAuth } from "../stores/useAuth";

function Homepage() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Homepage</h1>

      {user ? (
        <div>
          <p>Welcome, {user.name}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Homepage;
