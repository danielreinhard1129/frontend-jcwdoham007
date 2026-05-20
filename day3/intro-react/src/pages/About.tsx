import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

function About() {
  const name = "About";

  return (
    <div>
      <Navbar />
      <h1>About Page</h1>

      <Banner name={name} />
    </div>
  );
}

export default About;
