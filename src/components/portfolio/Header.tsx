import React from "react";

const ProjectsHeader = () => {
  return (
    <header className="relative w-full h-[70%] lg:p-8 p-6 flex text-white flex-col justify-center mt-20">
      <h1 className="text-3xl mb-3 font-future">Portfolio</h1>
      <p className="text-lg font-semibold lg:w-[90%]">
        At Kester Dev Studio, every project is more than just code and design,
        it's a solution, a story, and a step forward. We collaborate with
        startups, businesses, and visionaries to bring bold ideas to life
        through clean design, smart development, and purposeful user experience.
      </p>
      <h5 className="text-slate-400 mt-4">
        Below is a showcase of our latest creations, real-world results crafted
        with <br /> passion, precision, and a deep commitment to excellence.
      </h5>
    </header>
  );
};

export default ProjectsHeader;
