import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import TodoList from "./pages/TodoList";
import UseCallback from "./pages/UseCallback";
import UseCustomHook from "./pages/UseCustomHook";
import UseEffect from "./pages/UseEffect";
import UseMemo from "./pages/UseMemo";
import UseReducer from "./pages/UseReducer";
import UseRef from "./pages/UseRef";
import UseState from "./pages/UseState";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "/use-state",
    element: <UseState />,
  },
  {
    path: "/use-effect",
    element: <UseEffect />,
  },
  {
    path: "/use-ref",
    element: <UseRef />,
  },
  {
    path: "/use-memo",
    element: <UseMemo />,
  },
  {
    path: "/use-callback",
    element: <UseCallback />,
  },
  {
    path: "/use-reducer",
    element: <UseReducer />,
  },
  {
    path: "/use-custom-hook",
    element: <UseCustomHook />,
  },
  {
    path: "/todo-list",
    element: <TodoList />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
