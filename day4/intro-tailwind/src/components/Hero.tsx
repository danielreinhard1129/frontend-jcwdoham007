function Hero() {
  return (
    <div className="grid bg-[#EEF4FA] px-4 py-12 md:grid-cols-2 md:px-12 md:py-24">
      {/* KOLOM KIRI */}
      <div className="flex flex-col justify-center gap-6">
        <h1 className="text-sm">Hey, I am John</h1>
        <p className="text-5xl font-bold">
          I create <span className="text-[#5E3BEE]">product design</span> <br />{" "}
          and brand experience
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Suspendisse varius enim in eros elementum tristique.
        </p>
        <button className="w-fit rounded-sm bg-[#5E3BEE] p-4 text-white">
          Get In Touch
        </button>
      </div>

      {/* KOLOM KANAN */}
      <div className="">
        <img
          src="/profile-pic.png"
          alt="profile picture"
          width="900px"
          height="700"
        />
      </div>
    </div>
  );
}

export default Hero;
