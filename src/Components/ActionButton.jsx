import { Link } from "react-router-dom";

const ActionButton = ({ to, children }) => {
     return (
          <Link
               to={to}
               className="relative inline-flex items-center justify-center p-2 px-8 md:px-8 py-3.5 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
          >
               <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/80 via-purple-600 to-secondary/80"></span>
               <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
               <span className="relative text-white md:text-base font-semibold ">
                    {children}
               </span>
          </Link>
     );
};
export default ActionButton;