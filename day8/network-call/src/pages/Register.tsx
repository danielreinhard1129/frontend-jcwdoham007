import { useState } from "react";
import { axiosInstance } from "../lib/axios";

function Register() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleRegister = async () => {
    try {
      await axiosInstance.post("/users/register", {
        email,
        password,
        name,
      });

      alert("register success");
    } catch (error) {
      console.log(error);
      alert("register failed");
    }
  };

  return (
    <div>
      <h1>Register Page</h1>

      <div>
        <label>Name</label>
        <input
          type="text"
          placeholder="Your name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="Your password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="button" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}

export default Register;
