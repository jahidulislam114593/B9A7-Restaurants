import bannerImage from "../../assets/images/Banner.jpg";

const Banner = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center h-[calc(100vh-4rem)]"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-white md:text-5xl">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p className="mt-4 text-lg text-white max-w-2xl mx-auto">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database, and solve 500+ coding problems to become an exceptionally
          well world-class Programmer.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <a
            href="#explore"
            className="px-8 py-3 bg-green-500 text-white text-lg font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
          >
            Explore Now
          </a>
          <a
            href="#feedback"
            className="px-8 py-3 bg-transparent border-2 border-white text-white text-lg font-semibold rounded-md hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
          >
            Our Feedback
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
