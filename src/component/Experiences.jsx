import { MdOutlineForwardToInbox,  } from "react-icons/md";

const Experiences = () => {
    return (
      <>
        <div className="flex flex-wrap lg:flex-nowrap justify-between px-10 py-12">
          {/* -- Left Section */}
          <div className="lg:w-1/2 w-full space-y-6">
            <h2 className="text-2xl font-bold text-white">Articles</h2>
            {/* <!-- Article Card 1 --> */}
            <div className="bg-black hover:bg-gray-800 transition rounded-lg p-5 shadow-lg">
              <p className="text-gray-400 text-sm">Date: 2024-12-02</p>
              <h3 className="text-xl font-semibold text-white">Project Title 1</h3>
              <p className="text-gray-300">
                Description about the project goes here. Add details about what you did and learned.
              </p>
              <button className="mt-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-blue-600 transition">
                Read More Article
              </button>
            </div>
            {/* <!-- Repeat Card for More Articles --> */}
            <div className="bg-black hover:bg-gray-800 transition rounded-lg p-5 shadow-lg">
              <p className="text-gray-400 text-sm">Date: 2024-11-20</p>
              <h3 className="text-xl font-semibold text-white">Project Title 2</h3>
              <p className="text-gray-300">
                Another project description goes here. Include the impact of your work.
              </p>
              <button className="mt-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-blue-600 transition">
                Read More Article
              </button>
            </div>
            <div className="bg-black border-slate-900 hover:bg-gray-800 transition rounded-lg p-5 shadow-lg">
              <p className="text-gray-400 text-sm">Date: 2024-10-05</p>
              <h3 className="text-xl font-semibold text-white">Project Title 3</h3>
              <p className="text-gray-300">
                Final project details with outcomes and challenges faced.
              </p>
              <button className="mt-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-blue-600 transition">
                Read More Article
              </button>
            </div>
          </div>
  
          {/* <!-- Right Side (Updates Section) --> */}
          <div className="lg:w-1/2 w-full space-y-6 pl-5">
            <h2 className="text-2xl font-bold text-white flex"> Work</h2>
            {/* <!-- Update Card 1 --> */}
            <div className="bg-black hover:bg-gray-800 transition rounded-lg p-5 flex items-center space-x-4 shadow-lg">
              <div className="w-12 h-12 bg-gray-700 flex items-center justify-center rounded-full">
                <img
                  src="https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/mrouitebj2d07fy6znno"
                  alt="Avatar"
                  className="w-24 h-12 rounded-full"
                />
              </div>
              <div>
                <p className="text-white font-semibold">RE2QA</p>
                <p className="text-gray-400 text-sm">Sept 2024 - Nov 2024 </p>
              </div>
            </div>
            {/* <!-- Update Card 2 --> */}
            <div className="bg-black hover:bg-gray-800 transition rounded-lg p-5 flex items-center space-x-4 shadow-lg">
              <div className="w-12 h-12 bg-gray-700 flex items-center justify-center rounded-full">
                <img
                  src="https://th.bing.com/th/id/OIP.-1gDdPW1x_9lINCVv8rl0wHaEK?rs=1&pid=ImgDetMain"
                  alt="Avatar"
                  className="w-24 h-12 rounded-full"
                />
              </div>
              <div>
                <p className="text-white font-semibold">Txend-TXD</p>
                <p className="text-gray-400 text-sm">Nov 2024 - Present </p>
              </div>
            </div>
            {/* <!-- Update Card 3 --> */}
            {/* <div className="bg-black hover:bg-gray-800 transition rounded-lg p-5 flex items-center space-x-4 shadow-lg">
              <div className="w-12 h-12 bg-gray-700 flex items-center justify-center rounded-full">
                <img
                  src="https://preview.redd.it/73t9xcxsvkg41.jpg?auto=webp&s=237ce3fa54b3e74e5f68f41502c520d99fb2b9c5"
                  alt="Avatar"
                  className="w-24 h-12 rounded-full"
                />
              </div>
              <div>
                <p className="text-white font-semibold">Company Name 3</p>
                <p className="text-gray-400 text-sm">2022 - 2023</p>
              </div>
            </div> */}
  
            {/* <!-- Resume Download Button --> */}
            <button>

            <a  
            href="/resume.pdf"
            download="Bazed_Gul_Resume.pdf"
            className="mt-6 px-6 py-3 bg-slate-900 text-white rounded hover:bg-blue-600 transition w-full">
              Download Resume
            </a>
              </button>
  
            {/* <!-- Additional Card Section --> */}
            {/* <div className="max-w-sm rounded overflow-hidden shadow-lg mt-6">
              <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-white text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #CricketLover
                </span>
              </div>
            </div> */}

                <div className="update mt-10">
                  <div className="ml-10 mt-3">
                
                  <h1 className="text-white flex"> <MdOutlineForwardToInbox className="mt-1 gap-2" /> - Stay up to Date</h1>
                  <p className="text-white mt-4">Get notified when I publish something new, and unsubscribe at any time.</p>
                  <input className="bg-black mt-4 border-white border-solid text-white w-96 p-2 " type="email" placeholder="Email Address" />
                  <button className="text-white ml-3 w-20 h-10 bg-slate-900 hover:bg-blue-800 text-white" >Join</button>
                  </div>
                </div>

          </div>
        </div>
      </>
    );
  };
  
  export default Experiences;
  