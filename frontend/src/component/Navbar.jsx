import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="relative z-10 py-4 px-12 w-full font-medium text-[1.3vw] text-black">
      <div className=" flex justify-between items-center ">
        <div>
          <Link to={"/"}><img className="w-50 cursor-pointer" src="logo.png" alt="" /></Link>
          
        </div>
        <ul className="flex space-x-6 ">
          <li><Link to="/" className="hover:text-red-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-red-600">About</Link></li>
          <li><Link to="/dashboard" className="hover:text-red-600">Planner</Link></li>
          <li><Link to="/pricing" className="hover:text-red-600">Pricing</Link></li>
          <li><Link to="/team" className="hover:text-red-600">Team</Link></li>
          <li><Link to="/blog" className="hover:text-red-600">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-red-600">Contact</Link></li>
          {/* <div className="w-11 h-0.5 bg-red-600 absolute top-10 "></div> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
