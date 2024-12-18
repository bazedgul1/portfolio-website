import { useState, useEffect } from "react";

const Articles = () => {
  const [heading, setHeading] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const storedArticles = JSON.parse(localStorage.getItem("articles")) || [];
    setArticles(storedArticles);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = { heading, date, description };
    const updatedArticles = [...articles, newArticle];
    setArticles(updatedArticles);
    localStorage.setItem("articles", JSON.stringify(updatedArticles));

    localStorage.setItem("articles", JSON.stringify(updatedArticles));
    setArticles(updatedArticles);

    // Inputs clear karna
    setHeading("");
    setDate("");
    setDescription("");
  };

  const handleDelete = (index) => {
    const updatedArticles = articles.filter((_, i) => i !== index);
    setArticles(updatedArticles);
    localStorage.setItem("articles", JSON.stringify(updatedArticles));
  };
  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-between px-10 py-12">
      <div className="lg:w-1/2 w-full space-y-6 ml-40">
        <h1
          className="text-4xl font-bold tracking-tight
          text-white sm:text-5xl dark:text-zinc-100 hover:text-blue-700 translate-x-1"
        >
          Writing Articles on software design, company building, Developer Ideas
          and the IT industry.
        </h1>

        <div>
          <p className="text-red-200 hover:text-white translate-x-1 mt-10">
            All of my long-form thoughts on programming, leadership, product
            design, and more, collected in chronological order.
          </p>
        </div>

        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            <article className="md:grid md:grid-cols-4 md:items-baseline" />
            <div className="md:col-span-3 group relative flex flex-col items-start">
              <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                <div
                  className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition
                    group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"
                ></div>

                <a href="/articles">
                  <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                  <span className="relative z-10">
                    Crafting a design system for a multiplanetary future
                  </span>
                </a>
              </h2>
              <time
                className=" relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                dateTime="2022-09-05"
              >
                <span
                  className="absolute inset-y-0 left-0 flex items-center"
                  aria-hidden="true"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                </span>
                September 5, 2024
              </time>
              <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Most companies try to stay ahead of the curve when it comes to
                visual design, but for Planetaria we needed to create a brand
                that would still inspire us 100 years from now when humanity has
                spread across our entire solar system.
              </p>
              <div
                aria-hidden="true"
                className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
              >
                Read article
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="ml-1 h-4 w-4 stroke-current"
                >
                  <path d="M6.75 5.75 9.25 8l-2.5 2.25"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-8 space-y-16">
      {articles.map((article, index) => (
        <div key={index} className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            <article className="md:grid md:grid-cols-4 md:items-baseline">
              <div className="md:col-span-3 group relative flex flex-col items-start">
                <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                  <div
                    className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"
                  ></div>

                  <a href={article.link}>
                    <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                    <span className="relative z-10">{article.heading}</span>
                  </a>
                </h2>
                <time
                  className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                  dateTime={new Date(article.date).toISOString()}
                >
                  <span
                    className="absolute inset-y-0 left-0 flex items-center"
                    aria-hidden="true"
                  >
                    <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                  </span>
                  {article.date}
                </time>
                <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {article.description}
                </p>
                <div
                  aria-hidden="true"
                  className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                >
                  Read article
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    className="ml-1 h-4 w-4 stroke-current"
                  >
                    <path d="M6.75 5.75 9.25 8l-2.5 2.25"></path>
                  </svg>
                </div>
              </div>
            </article>
          </div>
        </div>
      ))}
    </div> */}

        <div className="mt-8 space-y-16">
          {articles.map((article, index) => (
            <div
              key={index}
              className="md:border-l"
            >
              <div className="flex max-w-3xl flex-col space-y-4">
                <time className="text-sm text-zinc-400 dark:text-zinc-500">
                  {article.date}
                </time>
                <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                  {article.heading}
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {article.description}
                </p>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-slate-900 text-white px-3 py-1 w-32 rounded hover:bg-red-800"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:w-1/2 w-full space-y-6 pl-5">
        <div className="max-w-lg mx-auto mt-12">
          {/* <h1 className="text-2xl font-bold mb-4">Add a New Article</h1> */}
          <h1
            className="text-lg font-bold tracking-tight
          text-zinc-800 sm:text-2xl dark:text-zinc-100 hover:text-blue-700 translate-x-1"
          >
            Share your Experiences
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <h1
              className="text-lg font-bold tracking-tight
          text-zinc-800 sm:text-1xl dark:text-zinc-100 hover:text-blue-700 translate-x-1"
            >
              Add your Article{" "}
            </h1>

            <div>
              <label className="block mb-1 text-white">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-2 border rounded bg-black text-white"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-white">Heading</label>
              <input
                type="text"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                className="w-full p-2 border rounded bg-black text-white"
                placeholder="Enter a Heading"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-white">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border rounded bg-black text-white"
                rows="4"
                required
                placeholder="Enter a Description"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-slate-800 text-white px-4 py-2 rounded hover:bg-blue-900 translate-x-1"
            >
              Save Article
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Articles;
