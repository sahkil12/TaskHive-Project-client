import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="rounded-t-2xl border-t-3 border-primary/20 bg-white text-slate-800 py-12 px-6 shadow-inner pop">
      <div className="lg:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-10">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <img
              src="/taskhiva logo .png"
              className="w-10 h-10"
              alt="TaskHive logo"
            />
            <Link
              to={"/"}
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent"
            >
              TaskHive
            </Link>
          </div>
          <p className="text-md text-slate-500 text-center md:text-left">
            Your freelance task marketplace – connect, collaborate, and grow.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-3">
            <a href="#" className="text-slate-500 hover:text-primary transition">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-slate-500 hover:text-primary transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-slate-500 hover:text-primary transition">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Pages */}
        <nav className="flex flex-col gap-2">
          <h6 className="font-semibold text-slate-800 mb-2">Pages</h6>
          <Link to="/" className="hover:text-primary transition">Home</Link>
          <Link to="/addTask" className="hover:text-primary transition">Add Task</Link>
          <Link to="/browseTasks" className="hover:text-primary transition">Browse Jobs</Link>
          <Link to="/myPostTasks" className="hover:text-primary transition">My Posted Task</Link>
        </nav>

        {/* Legal */}
        <nav className="flex flex-col gap-2">
          <h6 className="font-semibold text-slate-800 mb-2">Legal</h6>
          <a className="hover:text-primary transition">Terms of use</a>
          <a className="hover:text-primary transition">Privacy policy</a>
          <a className="hover:text-primary transition">Cookie policy</a>
        </nav>

        {/* Newsletter */}
        <form className="flex flex-col gap-3">
          <h6 className="font-semibold text-slate-800 mb-2">Newsletter</h6>
          <label className="text-sm text-slate-500">
            Enter your email address
          </label>
          <div className="join">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input input-bordered join-item w-full md:w-full"
            />
            <button type="button" className="btn btn-primary join-item">
              Subscribe
            </button>
          </div>
        </form>
      </div>

      {/* Bottom Note */}
      <div className="mt-7 border-t pt-6 text-center text-base text-slate-700">
        © {new Date().getFullYear()} TaskHive. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
