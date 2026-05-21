import { HiMenu } from "react-icons/hi";

function Navbar() {
  return (
    <div className="flex items-center justify-between px-4 py-6 md:px-12">
      <img src="/logo.png" alt="logo" width="187px" height="40px" />

      <div className="hidden cursor-pointer gap-8 md:flex">
        <p className="hover:text-[#5E3BEE]">Home</p>
        <p className="hover:text-[#5E3BEE]">Portfolio</p>
        <p className="hover:text-[#5E3BEE]">About me</p>
        <p className="hover:text-[#5E3BEE]">Testimonials</p>
      </div>

      <button className="hidden rounded-sm border border-[#5E3BEE] p-4 text-[#5E3BEE] md:block">
        Contact Me
      </button>

      <HiMenu className="text-3xl md:hidden" />
    </div>
  );
}

export default Navbar;
