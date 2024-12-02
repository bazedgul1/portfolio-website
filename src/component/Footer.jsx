// import  {Link}  from "react-router-dom";
const Footer = () => {
    return (
        <div>
            <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
            <div className="flex flex-wrap lg:flex-nowrap justify-between px-10 py-12">
                <div className="lg:w-1/2 w-full space-y-6 flex justify-center">
                    <h2 className="text-white">© 2024 Bazed Gul (BG). All rights reserved.</h2>
                </div>              
                
                <div className="lg:w-1/2 w-full space-y-6 pl-5">
                {/* <nav className="flex space-x-6 text-sm md:text-lg">
                    <Link to="/about" className="hover:text-gray-400">
                        About
                    </Link>
                    <Link to="/articles" className="hover:text-gray-400">
                        Articles
                    </Link>
                    <Link to="/projects" className="hover:text-gray-400">
                        Projects
                    </Link>
                    <Link to="/speaking" className="hover:text-gray-400">
                        Speaking
                    </Link>
                    <Link to="/uses" className="hover:text-gray-400">
                        Uses
                    </Link>
                </nav> */}
                </div>
            </div>


        </div>
    )
}
export default Footer;