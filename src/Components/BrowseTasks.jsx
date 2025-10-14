import { useLoaderData } from "react-router-dom";
import TaskCard from "./TaskCard";
import { useEffect, useState } from "react";

const BrowseTasks = () => {
  const allTasks = useLoaderData();
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  const filteredTasks =
    activeCategory === "All Categories"
      ? allTasks
      : allTasks.filter((task) => task.category === activeCategory);

  return (
    <div className="bg-base-300">
      {/* heading section */}
      <div className="rail flex flex-col justify-center items-center text-center gap-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center pt-10">
          Browse All <span className="text-secondary/95">Tasks</span>
        </h2>
        <p className="text-base/normal tracking-tight md:tracking-wide font-semibold opacity-95 md:text-lg">
          Find freelancers or tasks by category, budget, and deadline
        </p>
      </div>
      <div className="w-full p-2 md:w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-8 gap-3 py-10">
        {/* all category container section */}
        <section className="sm:sticky h-fit top-28 sm:col-span-2 py-5 p-1 md:px-3 w-full">
          <h2 className="text-white font-semibold bg-primary/90 py-3 rounded-lg text-center text-xl ">
            Task Category
          </h2>
          <ul className="space-y-2 py-2">
            {categories.map((cat) => (
              <li
                onClick={() => setActiveCategory(cat.name)}
                key={cat.id}
                className={`px-4 py-2 rounded-sm border text-lg text-center font-semibold hover:bg-primary/5 border-neutral-300 cursor-pointer ${
                  activeCategory === cat.name ? "bg-primary/15" : ""
                }`}
              >
                {cat.name}
              </li>
            ))}
          </ul>
        </section>
        {/*all task container section*/}
        <section className=" sm:col-span-6 w-full ">
          <div className="p-2 py-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <TaskCard key={task._id} task={task} />
              ))
            ) : (
              <p className="text-center text-gray-600 my-8 text-2xl font-semibold col-span-full">
                No tasks available in this category.
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BrowseTasks;
