import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>Ini Deskripsi</p>

      <Banner name="Home" description="Ini description halaman Home" />

      <img
        src="/picture.avif"
        alt="ini gambar 2023"
        width="100%"
        height="500px"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

export default Home;
