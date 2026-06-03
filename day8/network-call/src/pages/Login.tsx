import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { axiosInstance } from "../lib/axios";
import { useState } from "react";
import { useAuth } from "../stores/useAuth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(6, { error: "Password must be at least 6 chars" }),
});

type LoginSchema = z.infer<typeof loginSchema>;

function Login() {
  const [isPending, setIsPending] = useState<boolean>(false);

  const { register, handleSubmit, formState } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const { login } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async (values: LoginSchema) => {
    setIsPending(true);
    try {
      const response = await axiosInstance.post("/users/login", {
        login: values.email,
        password: values.password,
      });

      toast.success("login success");

      login({
        email: response.data.email,
        name: response.data.name,
        objectId: response.data.objectId,
        userToken: response.data["user-token"],
      });

      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("login failed");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit(handleLogin)}>
        <div>
          <label>Email</label>
          <input
            // type="email"
            placeholder="Your email address"
            {...register("email")}
          />
          {formState.errors.email && (
            <p style={{ color: "red", fontSize: "12px" }}>
              {formState.errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Your password"
            {...register("password")}
          />
          {formState.errors.password && (
            <p style={{ color: "red", fontSize: "12px" }}>
              {formState.errors.password.message}
            </p>
          )}
        </div>

        <button type="submit" disabled={isPending}>
          {isPending ? "Loading" : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
