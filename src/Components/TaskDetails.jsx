import { useLoaderData } from "react-router-dom";
import { MdOutlineSubtitles } from "react-icons/md";
import { useState } from "react";

const TaskDetails = () => {
  const task = useLoaderData();
  const { title, name, email, category, deadline, budget, country, details } = task;
    console.log(task);
  const [bidsCount, setBidsCount] = useState(0);

  const handleBid = () => {
    setBidsCount((prev) => prev + 1);
    // TODO: save bid to DB if needed
  };

  return (
    <div className="bg-base-300 py-10 pop">
      <div className="mx-auto md:w-10/12 bg-white border-2 rounded-2xl border-neutral-300 shadow-lg p-8 py-10">
        {/* Header */}
        <h2 className="text-3xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">
          {title}
        </h2>
        {/* Bid Info */}
        <p className="text-center text-blue-700 font-semibold my-8 text-lg">
          You bid for {bidsCount} {bidsCount === 1 ? "opportunity" : "opportunities"}
        </p>
        {/* Task Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 my-7">
          <div className="space-y-3">
            <p>
              <span className="font-semibold text-lg text-gray-800">Posted by:</span> {name}
            </p>
            <p>
              <span className="font-semibold text-lg text-gray-800">Email:</span> {email}
            </p>
            <p>
              <span className="font-semibold text-lg text-gray-800">Category:</span> {category}
            </p>
          </div>
          <div className="space-y-2">
            <p>
              <span className="font-semibold text-lg text-gray-800">Deadline:</span>{" "}
              <span className="text-red-600 font-semibold">{deadline}</span>
            </p>
            <p>
              <span className="font-semibold text-lg text-gray-800">Budget:</span>{" "}
              <span className="text-blue-700 font-bold">${budget}</span>
            </p>
            <p>
              <span className="font-semibold text-lg text-gray-800">Country:</span> {country}
            </p>
          </div>
        </div>
        {/* Task Details */}
        <div className="border-t border-gray-300 pt-6">
          <h3 className="flex items-center text-xl font-semibold mb-2 text-gray-800">
            <MdOutlineSubtitles className="mx-2 text-primary/80" /> Task Description
          </h3>
          <p className="text-gray-700 leading-relaxed md:w-10/12 md:px-3">{details}</p>
        </div>

        {/* Bid Button */}
        <div className="mt-8 text-center">
          <button
            onClick={handleBid}
            className="bg-primary/90 hover:bg-primary text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Place a Bid
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
