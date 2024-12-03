// import React from 'react'

const Projects = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-between px-10 py-12">
      <div className="lg:w-1/2 w-full space-y-6 ml-40">
        <h1
          className="text-4xl font-bold tracking-tight
              text-white sm:text-5xl dark:text-zinc-100 hover:text-blue-700 translate-x-1"
        >
          Things I’ve made trying to put my dent in the universe.
        </h1>
        <div>
          <p className="text-red-200 hover:text-white translate-x-1">
            I’ve worked on tons of little projects over the years but these are
            the ones that I’m most proud of. Many of them are open-source, so if
            you see something that piques your interest, check out the code and
            contribute if you have ideas for how it can be improved.
          </p>
        </div>

        <div className="bg-black hover:bg-gray-800 transition rounded-lg p-5 shadow-lg">
          {/* <div>
                <img src="https://spotlight.tailwindui.com/_next/static/media/planetaria.ecd81ade.svg" alt="" />
              </div> */}
          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <img
              src="https://spotlight.tailwindui.com/_next/static/media/planetaria.ecd81ade.svg"
              alt="Project Image 1"
            />
          </div>
          <h1 className="text-xl font-semibold text-white mt-4">
            Project Title 1
          </h1>
          <p className="text-gray-300 mt-2">
            Description about the project goes here. Add details about what you
            did and learned.
          </p>
          <button className="mt-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-blue-600 transition">
            <a href="">Source Code</a>
          </button>
        </div>

        <div className="bg-black hover:bg-gray-800 transition rounded-lg p-5 shadow-lg">
          {/* <div>
                <img src="https://spotlight.tailwindui.com/_next/static/media/planetaria.ecd81ade.svg" alt="" />
              </div> */}
          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <img
              src="https://spotlight.tailwindui.com/_next/static/media/animaginary.8d221e52.svg"
              alt="Project Image 2"
            />
          </div>
          <h1 className="text-xl font-semibold text-white mt-4">
            Project Title 1
          </h1>
          <p className="text-gray-300 mt-2">
            Description about the project goes here. Add details about what you
            did and learned.
          </p>
          <button className="mt-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-blue-600 transition">
            <a href="">Source Code</a>
          </button>
        </div>

        <div className="bg-black hover:bg-gray-800 transition rounded-lg p-5 shadow-lg">
          {/* <div>
                <img src="https://spotlight.tailwindui.com/_next/static/media/planetaria.ecd81ade.svg" alt="" />
              </div> */}
          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <img
              src="https://spotlight.tailwindui.com/_next/static/media/open-shuttle.db0327e4.svg"
              alt="Project Image 3"
            />
          </div>
          <h1 className="text-xl font-semibold text-white mt-4">
            Project Title 1
          </h1>
          <p className="text-gray-300 mt-2">
            Description about the project goes here. Add details about what you
            did and learned.
          </p>
          <button className="mt-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-blue-600 transition">
            <a href="">Source Code</a>
          </button>
        </div>
      </div>

      <div className="lg:w-1/2 w-full space-y-6 pl-5">
        <h2 className="text-2xl font-bold text-white flex justify-center">
          {" "}
          Language & Tool{" "}
        </h2>
        <div>
          <p className="flex justify-center ">
            <img
              className="flex justify-center"
              align="center"
              src="https://github-readme-stats.vercel.app/api/top-langs?username=bazedgul&show_icons=true&locale=en&layout=compact"
              alt="bazedgul"
            />
          </p>
        </div>

        {/* <div className="flex justify-center">
        <video className="w-72" controls>
          <source src="https://www.youtube.com/watch?v=RVFAyFWO4go&t=10s" type="video/mp4" />
                Your browser does not support the video tag.
         </video>
          <button className="text-white flex flex-col"><a href="https://www.youtube.com/watch?v=RVFAyFWO4go&t=10s">Video Link </a></button>
        </div> */}

        <div className="flex flex-col items-center">
          <iframe
            className="w-72 h-40 rounded-md"
            src="https://www.youtube.com/embed/RVFAyFWO4go?start=10"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button className="mt-2 text-white bg-slate-600 px-4 py-2 rounded hover:bg-blue-800 translate-x-1">
            <a
              href="https://www.youtube.com/watch?v=RVFAyFWO4go&t=10s"
              target="_blank"
              rel="noopener noreferrer"
            >
              Video Link
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
