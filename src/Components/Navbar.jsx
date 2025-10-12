import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "bg-primary/10 text-primary font-semibold rounded-lg px-3 py-1"
              : "font-medium text-slate-700 hover:text-primary hover:scale-105 transition"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/addTask"}
          className={({ isActive }) =>
            isActive
              ? "bg-primary/10 text-primary font-semibold rounded-lg px-3 py-1"
              : "font-medium text-slate-700 hover:text-primary hover:scale-105 transition"
          }
        >
          Add Task
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/browseTasks"}
          className={({ isActive }) =>
            isActive
              ? "bg-primary/10 text-primary font-semibold rounded-lg px-3 py-1"
              : "font-medium text-slate-700 hover:text-primary hover:scale-105 transition"
          }
        >
          Browse Tasks
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/myPostTasks"}
          className={({ isActive }) =>
            isActive
              ? "bg-primary/10 text-primary font-semibold rounded-lg px-3 py-1"
              : "font-medium text-slate-700 hover:text-primary hover:scale-105 transition"
          }
        >
          My Posted Task
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="shadow-md">
      <div className="navbar sm:px-6 bg-white py-4 rounded-b-2xl">
        {/* Left */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-white border border-slate-200 rounded-box z-10 mt-3 w-52 p-3 shadow-lg space-y-2"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/taskhiva logo .png" className="w-10 h-10" alt="logo" />
            <Link
              to={"/"}
              className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-sky-600 bg-clip-text text-transparent"
            >
              TaskHive
            </Link>
          </div>
        </div>

        {/* Center Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-8 text-lg">{links}</ul>
        </div>

        {/* Right */}
        <div className="navbar-end gap-4">
          <button className="btn btn-primary btn-sm px-5">Logout</button>

          {/* Profile */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full ring ring-primary ring-offset-2">
                <img
                  alt="User"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-white border border-slate-200 rounded-box z-10 mt-3 w-52 p-2 shadow-lg"
            >
              <li>
                <a className="justify-between">
                  Profile <span className="badge badge-primary">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
