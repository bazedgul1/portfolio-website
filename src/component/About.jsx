import { FaGithub, FaLinkedin, FaInstagram, FaTwitter,FaFacebookSquare } from "react-icons/fa";
const About = () => {
    return (
    <>
    <div className="flex justify-center">
     <img
        src="https://preview.redd.it/73t9xcxsvkg41.jpg?auto=webp&s=237ce3fa54b3e74e5f68f41502c520d99fb2b9c5" // Replace with your image URL
        alt="Avatar"
        className="w-32 h-32 rounded-full mb-6"
     />
    </div>
    <div className="flex flex-wrap lg:flex-nowrap justify-between px-10 py-12">
        <div className="lg:w-1/1.2 w-full space-y-6 ml-16">

            <h1 className="text-4xl font-bold tracking-tight
            text-zinc-800 sm:text-5xl dark:text-zinc-100">
                Hi 👋, I am Bazed Gul !!!.
            </h1>
            <h2 className="text-4xl font-bold tracking-tight
            text-zinc-800 sm:text-5xl dark:text-zinc-100">💻 Backend & Frontend Developer</h2>
            <div>
                <p className="text-red-200 mt-2">
                🎓 Recent Graduate in Software Engineering | University of Lahore.
                </p>

                <p className="text-red-200 mt-2">
                🌍 Passionate about building efficient and scalable web applications.
                </p>

                <p className="text-red-200 mt-2">
                🚀 Currently exploring: Java, Node.js, Angular, React, .NET, and more.
                </p>

                <p className="text-red-200 mt-2">
                💬 Ask me about **ReactJs, JavaScript, ExpressJs, MongoDB, Python, NLP, C++ , Java, OOP and DBS
                </p>

                <p className="text-red-200 mt-2">
                🔍 Open to exciting opportunities in software development
                </p>

                <p className="text-red-200 mt-2">
                📫 How to reach me **bazeed.gul@txend.com
                </p>

                <p className="text-red-200 mt-2">
                ⚡ Fun fact **I am Cricket Lover !!
                </p>
            </div> 
        </div>


        <div className="lg:w-1/2 w-full space-y-6 pl-5">
            <div className="image">
                <img src="https://www.springboard.com/blog/wp-content/uploads/2022/06/software-engineer-salary-2022.png" 
                alt="About Image" width="420px" className="rounded-3xl mb-10" />
            </div>

            <div className="">
                <ul>
                    <li><a className="text-white flex " href=""><FaTwitter className="w-20 h-6 mb-2" /> Follow on X</a></li>
                    <li><a className="text-white flex" href=""><FaGithub className="w-20 h-6 mb-2" /> Follow on Github</a></li>
                    <li><a className="text-white flex" href=""><FaInstagram className="w-20 h-6 mb-2" /> Follow on Instagram</a></li>
                    <li><a className="text-white flex" href=""><FaFacebookSquare className="w-20 h-6 mb-2" />Follow on Facebook</a></li>
                    <li><a className="text-white flex" href=""><FaLinkedin className="w-20 h-6 mb-2" /> Follow on Linkedin</a></li>
                </ul>
            </div>
        </div>


    </div>
    </>
    )
}

export default About;