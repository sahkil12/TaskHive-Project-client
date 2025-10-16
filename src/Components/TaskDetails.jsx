import { Link, useLoaderData } from "react-router-dom";
import { MdOutlineSubtitles } from "react-icons/md";
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Helmet } from "react-helmet";

const TaskDetails = () => {
  const task = useLoaderData();
  const { title, name, email, category, deadline, budget, country, details } = task;
  const [bidsCount, setBidsCount] = useState(0);

  const handleBid = () => {
    setBidsCount((prev) => prev + 1);
    // TODO: save bid to DB if needed
  };

  return (
    <div className="bg-base-300 py-10 pop">
      <Helmet>
        <title>Task Details {title}- Task Hive</title>
      </Helmet>
      <div className="mx-auto md:w-10/12 my-6 px-3 text-primary/90 font-semibold">
        <Link to={'/browseTasks'} className="flex items-center gap-3">  <FaArrowLeftLong></FaArrowLeftLong> Back</Link>
      </div>
      <div className="mx-auto md:w-10/12 bg-base-200 border-2 rounded-2xl border-neutral-300 shadow-lg p-4 sm:p-8 py-10">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-semibold  mb-6 text-center">
          {title}
        </h2>
        {/* Bid Info */}
        <p className="text-center text-blue-700 font-semibold my-8 text-lg">
          You bid for {bidsCount} {bidsCount === 1 ? "opportunity" : "opportunities"}
        </p>
        {/* Task Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 my-7">
          <div className="space-y-3">
            <p className="font-semibold  md:text-lg">
             Posted by: <span className="text-base text-gray-500">{name}</span> 
            </p>
            <p className="font-semibold  md:text-lg">
              Email: <span className="text-base text-gray-500">{email}</span> 
            </p>
            <p className="font-semibold  md:text-lg">
              Category: <span className="text-base text-gray-500">{category}</span> 
            </p>
          </div>
          <div className="space-y-2">
            <p>
              <span className="font-semibold  md:text-lg">Deadline:</span>{" "}
              <span className="text-red-600 font-semibold">{deadline}</span>
            </p>
            <p>
              <span className="font-semibold  md:text-lg">Budget:</span>{" "}
              <span className="text-blue-700 font-bold">${budget}</span>
            </p>
            <p className="font-semibold  md:text-lg">
             Country: <span className="text-base text-gray-500">{country}</span> 
            </p>
          </div>
        </div>
        {/* Task Details */}
        <div className="border-t border-gray-300 pt-6">
          <h3 className="flex items-center text-xl font-semibold mb-2 ">
            <MdOutlineSubtitles className="mx-2 text-primary/80" /> Task Description
          </h3>
          <p className="text-gray-500 leading-relaxed md:w-10/12 md:px-3">{details}</p>
        </div>
        {/* Bid Button */}
        <div className="mt-8 text-center">
          <button
            onClick={handleBid}
            className="bg-primary/90 hover:bg-primary text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
            Place a Bid
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
