import { FaTasks } from "react-icons/fa";
import { Link } from "react-router-dom";

const TaskCard = ({ task }) => {
  const { _id, title, budget, deadline, category } = task;

  return (
    <div className="border flex flex-col gap-5 w-full border-neutral-200 p-6 rounded-2xl bg-white hover:shadow-2xl hover:-translate-y-1 duration-300 cursor-pointer">
      {/* Icon */}
      <div className="text-5xl text-primary/80 flex justify-center">
        <FaTasks />
      </div>
      {/* Content */}
      <div className="space-y-5 text-center">
        <h3 className="text-xl text-gray-900 font-bold">{title}</h3>

        <span className="inline-block bg-gradient-to-r from-green-400 to-green-600 text-white text-sm px-5 py-1.5 rounded-full font-medium shadow">
          {category}
        </span>
        <div className="flex justify-between items-center text-sm sm:text-base font-medium text-gray-700 border-t border-gray-400 pt-4 ">
          <p>
            Deadline:{" "}
            <span className="font-semibold text-red-600">{deadline}</span>
          </p>
          <p>
            Budget:{" "}
            <span className="font-bold text-blue-700">${budget}</span>
          </p>
        </div>
      </div>

      {/* Action */}
      <Link to={`/taskDetails/${_id}`} className="mt-4 w-full bg-primary/90 hover:bg-primary text-white py-3 text-center rounded-lg font-medium transition-colors duration-300">
        See Details
      </Link>
    </div>
  );
};

export default TaskCard;
