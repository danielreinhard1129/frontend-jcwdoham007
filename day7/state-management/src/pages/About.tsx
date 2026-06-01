import { createContext } from "react";
import Component1 from "../components/Component1";

interface UserContextType {
  name: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<UserContextType | null>(null);

function About() {
  return (
    <UserContext.Provider value={{ name: "Joko" }}>
      <div style={{ border: "1px solid black", padding: "20px" }}>
        <h1>About page</h1>
        <Component1 />
      </div>
    </UserContext.Provider>
  );
}

export default About;
